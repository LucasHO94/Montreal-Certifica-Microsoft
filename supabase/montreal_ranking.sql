-- ============================================================================
-- Montreal — Ranking Global (correção)
-- ----------------------------------------------------------------------------
-- Problema: a RLS de montreal_simulator_history restringe o SELECT às linhas
-- do próprio usuário (auth.uid() = user_id). Por isso o ranking montado no
-- cliente só enxergava o próprio usuário e nunca funcionava como global.
--
-- Solução: uma função SECURITY DEFINER que roda com privilégios do owner
-- (ignora a RLS por linha de forma controlada) e devolve APENAS dados
-- agregados e públicos (apelido + pontos + melhor nota). Nenhum dado
-- sensível (respostas, question_ids) é exposto.
--
-- Executar no SQL Editor do projeto Supabase.
-- ============================================================================

CREATE OR REPLACE FUNCTION public.montreal_global_ranking(
  p_cert_id text DEFAULT NULL,   -- NULL = ranking global (todas as certs)
  p_limit   integer DEFAULT 5
)
RETURNS TABLE (
  name          text,
  total_correct bigint,
  best_score    integer
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COALESCE(NULLIF(pr.nickname, ''), NULLIF(pr.full_name, ''), 'Usuário Anônimo') AS name,
    COALESCE(SUM(h.correct_answers), 0)::bigint                                    AS total_correct,
    COALESCE(MAX(h.score), 0)::integer                                            AS best_score
  FROM public.profiles pr
  JOIN public.montreal_simulator_history h ON h.user_id = pr.id
  WHERE (p_cert_id IS NULL OR h.cert_id = p_cert_id)
  GROUP BY pr.id, pr.nickname, pr.full_name
  HAVING COALESCE(SUM(h.correct_answers), 0) > 0
  ORDER BY total_correct DESC, best_score DESC
  LIMIT GREATEST(p_limit, 1);
$$;

-- Permite que usuários logados (e anônimos, se quiser ranking público) chamem.
GRANT EXECUTE ON FUNCTION public.montreal_global_ranking(text, integer) TO authenticated, anon;
