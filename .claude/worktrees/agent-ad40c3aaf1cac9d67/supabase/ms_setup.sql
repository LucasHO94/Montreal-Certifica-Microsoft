-- ============================================================================
-- Simulador Certificações Microsoft — Schema multi-cert
-- Executar no SQL Editor do projeto Supabase compartilhado.
-- ============================================================================

-- 1. Coluna premium MS na tabela profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS ms_is_premium boolean DEFAULT false;

-- 2. Histórico de simulados (multi-cert)
CREATE TABLE IF NOT EXISTS public.ms_simulator_history (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  cert_id         text NOT NULL,
  exam_type       text NOT NULL,
  score           integer NOT NULL,
  passed          boolean NOT NULL,
  domain_stats    jsonb,
  question_ids    jsonb,
  answers         jsonb,
  correct_answers integer,
  created_at      timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS ms_sh_user_cert_idx
  ON public.ms_simulator_history (user_id, cert_id, created_at DESC);

ALTER TABLE public.ms_simulator_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "ms: users view own history"   ON public.ms_simulator_history;
DROP POLICY IF EXISTS "ms: users insert own history" ON public.ms_simulator_history;

CREATE POLICY "ms: users view own history"
  ON public.ms_simulator_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "ms: users insert own history"
  ON public.ms_simulator_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 3. Progresso de estudo
CREATE TABLE IF NOT EXISTS public.ms_study_progress (
  user_id              uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  cert_id              text NOT NULL,
  last_question_index  integer DEFAULT 0,
  answers              jsonb DEFAULT '{}',
  updated_at           timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, cert_id)
);

ALTER TABLE public.ms_study_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "ms: users manage own progress" ON public.ms_study_progress;

CREATE POLICY "ms: users manage own progress"
  ON public.ms_study_progress FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 4. Fila de revisão espaçada
CREATE TABLE IF NOT EXISTS public.ms_review_queue (
  user_id          uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  cert_id          text NOT NULL,
  question_id      text NOT NULL,
  next_review_date timestamptz NOT NULL,
  status           text DEFAULT 'learning',
  PRIMARY KEY (user_id, cert_id, question_id)
);

CREATE INDEX IF NOT EXISTS ms_rq_user_cert_date_idx
  ON public.ms_review_queue (user_id, cert_id, next_review_date);

ALTER TABLE public.ms_review_queue ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "ms: users manage own queue" ON public.ms_review_queue;

CREATE POLICY "ms: users manage own queue"
  ON public.ms_review_queue FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
