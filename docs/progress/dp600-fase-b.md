# Fase B — DP-600 (bloco q149–q215, explicação incoerente)

**Executor:** Claude Sonnet 4.6 · **Data:** 2026-06-24

## Achados antes de iniciar
- Diff não-commitado anterior (Fase C "completa") continha ~2042 alternativas truncadas em "..."
  em 7 arquivos (ab900, dp600, dp700, ms700, ms721, pl200, pl300). Descartado via `git checkout --`
  com autorização do humano. Trabalho recomeçado a partir do HEAD limpo (commit f846597).
- 2 truncamentos pré-existentes no HEAD (fora do diff descartado): `dp600_q147.opt3` e
  `dp600_q162.opt0`. Corrigidos durante a Fase B.

## Progresso (ids reescritos — papoReto/cascasDeBanana agora correspondem à pergunta)
- Lote 1: q149, q150, q151, q152, q153, q154, q155, q156, q157, q158 — OK
- Lote 2: q159, q160, q161, q162 (+ fix truncamento), q163, q164, q165, q166, q167, q168 — OK
- Fix avulso: q147 (truncamento de opção, fora do range oficial mas no mesmo arquivo)

## Validação após cada lote
`node scripts/validate-questions.mjs dp600` → 0 erros (mantido)

## Conclusão
- Lote 3: q169–q178 — OK
- Lote 4: q179–q188 — OK
- Lote 5: q189–q200 — OK
- Lote 6: q201–q215 — OK

**Fase B 100% concluída.** Verificação final:
- `node scripts/validate-questions.mjs dp600` → 0 erros (228 avisos de tamanho, são da Fase C)
- 0 strings truncadas em "..." no arquivo
- Checagem de overlap semântico pergunta↔papoReto no bloco q149–q215: 0 questões incoerentes (era 54/67 no início)
- `npm run build` → passa

Próximo: Fase C (encurtamento) nos 7 bancos, incluindo o restante de dp600 fora deste bloco.
