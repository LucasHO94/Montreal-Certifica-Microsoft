# Auditoria completa do banco de questões — 2026-06-25

**Escopo:** 12 certificações, 3.625 questões.
**Método:** validador oficial (`scripts/validate-questions.mjs`) + auditoria de conteúdo
customizada (truncamento, opções duplicadas, respostaCerta, coerência correctAnswer×respostaCerta)
+ comparação git `HEAD` vs estado atual para isolar regressões.

## Resultado do validador atual
`0 erros, 56 avisos` (todos de tamanho). Avisos em certs **não** tocadas na remediação:
mo500 (45), mo201 (9), az900 (1), mo101 (1). As 7 certs remediadas mostram 0/0.

**Porém:** o "0/0" das certs remediadas é enganoso — o validador não detecta os defeitos
mais graves abaixo. O `respMismatch` apontado pela auditoria (az900/dp600/pl300) foi
verificado e é **falso positivo** (respostaCerta apenas parafraseia a opção correta — design correto).

---

## Achados

### A. CRÍTICO — regressão introduzida na Fase C (trim mecânico de opções)
O script de encurtamento da Fase C cortou `options` para caber em ≤160 chars (e no orçamento
total de 700), **sem isenção para código** — porque o validador só isenta código no campo
`text`, não em `options`. Resultado: código e respostas multi-parte truncados.

Comparação HEAD×atual nas 7 certs modificadas:

| Bucket | Qtd | Descrição |
|---|---|---|
| Código quebrado (hard) | ~122 | backtick não fechado / corte no meio de chamada (`partial(prefix, padding,`). dp700 (106), dp600 (16) |
| Código cortado em vírgula | ~380 | código incompleto. dp700 (147), pl300 (83), ms721 (68), dp600 (65) |
| Prosa com vírgula pendente | ~536 | cosmético, mas parece truncado |

Exemplos confirmados:
- `dp700_q9` opt3 (CORRETA): HEAD 222 chars completos → atual 153 terminando em `partial(prefix, padding,`
- `dp700_q29` opt3 (CORRETA): HEAD 236 → atual 145 terminando em `.option("checkpointLocation",`
- **Cluster pl200 multi-parte:** 13 questões com a opção **correta** truncada em `| 2.`/`-> 3.`/`E 2.`
  (q15, q22, q31, q37, q43, q44, q47, q73, q80, q81, q82, q91, q161). Estavam **completas no HEAD**;
  o loop de orçamento-total cortou opções <160 para caber em 700.
- `q47_topic1`: ao truncar, opt1 e opt3 ficaram **idênticas** → opção duplicada criada por mim.

### B. PRÉ-EXISTENTE (não causado pela remediação)
- **`dp600_q125`**: fundamentalmente quebrada já no HEAD — 3 opções idênticas truncadas
  (`` `SELECT mes, vendas, vendas ``), a "correta" (índice 0) é esse fragmento, usa função
  `DIFF()` inexistente em T-SQL, e `respostaCerta` é placeholder genérico
  ("A opção correta reflete o conceito ou prática..."). Precisa de reescrita real.
- **respostaCerta ausente**: mo101 (160 questões) e pl200 (121 questões). O campo existe em
  **100%** das outras 10 certs — inconsistência de schema. O validador não o exige.
- **56 avisos de tamanho** em mo500/mo201/az900/mo101 (certs nunca tocadas).

### C. CAUSA-RAIZ — lacunas do validador
1. `hasCodeBlock` isenta `text` mas **não** `options` → incentivo errado que gerou a Fase C destrutiva.
2. Não exige `respostaCerta`.
3. Não detecta: opções duplicadas, opções truncadas, respostaCerta genérica/placeholder.

---

## Plano de implementação

### Fase 1 — Corrigir o validador (causa-raiz) — pequeno, faz primeiro
1. Aplicar isenção de código às `options` (orçamento maior / sem limite 160 para opção com código).
2. Tratar opção multi-parte (contém `|` ou `->` numerado) de forma compatível.
3. Tornar `respostaCerta` campo obrigatório da explicação.
4. Novas checagens: opções duplicadas (ERRO); opção truncada — termina em vírgula/backtick-ímpar/
   `| N.`/`-> N.`/`E N.` (AVISO); respostaCerta genérica placeholder (AVISO).

### Fase 2 — Reverter o dano nas opções (cirúrgico, scriptável)
Para cada opção onde atual ≠ HEAD **e** atual é uma truncagem do HEAD (prefixo / termina mal),
restaurar o texto do HEAD. Preserva reescritas limpas. Validar após cada cert. (~1.000 opções,
automatizável via comparação HEAD; revisão por amostragem.)

### Fase 3 — Defeitos pré-existentes
1. `dp600_q125`: reescrever (4 opções T-SQL válidas e distintas, `LAG() OVER`, respostaCerta específica).
2. Backfill `respostaCerta` em mo101 (160) + pl200 (121) — derivar da opção correta + papoReto.
3. Encurtar **reescrevendo** (não truncando) as opções de prosa longas em mo500/mo201/az900/mo101.

### Fase 4 — Re-validação final
Validador (com as novas regras) + `npm run build` nas 12 certs. Meta: 0 erros, 0 avisos reais.

---

## Recomendação de prioridade
1. **Fase 1 + Fase 2** primeiro (reverte a regressão que degradou código em ~500 opções — maior impacto).
2. **Fase 3.1** (dp600_q125, 1 questão crítica).
3. **Fase 3.2** (backfill respostaCerta — consistência de schema).
4. **Fase 3.3 + mo-series length** (menor severidade).
