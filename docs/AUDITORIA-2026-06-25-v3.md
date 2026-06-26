# Auditoria profunda (3ª passada) — qualidade factual — 2026-06-25

**Escopo:** 12 certs, 3.625 questões. Dimensões novas (não cobertas nas passadas 1–2):
posição da resposta correta, duplicatas entre/intra cert, coerência resposta↔explicação,
corrupção de texto, campos de explicação vazios.

## Achados REAIS

### 🔴 1. MAJOR — Viés de posição da resposta correta (sem embaralhar opções)
O app (`src/pages/Simulator.jsx`) embaralha a **ordem das questões**, mas renderiza as **opções
em ordem fixa** (`options.map`, `correctAnswer` fixo). Não há shuffle por questão. Distribuição:

| Cert | idx0 | idx1 | idx2 | idx3 | % no idx0 |
|---|---|---|---|---|---|
| **pl300** | **287** | 5 | 7 | 1 | **96% ⚠️** |
| **pl200** | 127 | 98 | 53 | 22 | **42% ⚠️** |
| dp600/dp700/mo* | ~equilibrado | | | | ~26% |
| ab900/ai900/az900/ms700 | 75/75/75/75 | | | | 25% (perfeito) |

**Impacto:** em pl300 a resposta certa é a **1ª opção em 96%** das questões — o aluno decora "é a
primeira" e o valor de simulado se perde. Defeito de integridade.

### 🟡 2. mo101 — 18 questões com `puloDoGato` vazio
Campo presente porém `""`. Demais campos (papoReto, dicaOuro) preenchidos. Lacuna de conteúdo.
IDs: mo101_q163,164,165,168,169,170,173,174,178,180,181,185,186,187,191,194,196,197.

### 🟡 3. pl200 — 28 ocorrências do typo "Comcompartilhar"
Duplicação "Com"+"compartilhar". Deve ser "Compartilhar". Sistemático, fácil de corrigir.

### 🟢 4. mo201 — 2 questões referenciam letras de opção
`mo201_q8` ("Ambas as opções A e C") e `mo201_q47` ("Ambas as opções A e B"). Incompatíveis com
qualquer embaralhamento (referenciam letras fixas). Design de quiz frágil.

## Descartado (falso positivo / intencional)
- **Dup exata entre certs: 0.** Cascade count != options-1: **0.** Coerência resp↔expl: **0.** Limpo.
- **Near-dup intra-cert (23):** cenários-template reutilizados (ex.: ab900 q250/q272 partilham a
  abertura mas têm perguntas, opções e respostas diferentes). Intencional.
- **Typos "a a"/"o o" (maioria dos 48):** falso positivo — `\b` ASCII quebra em "a **ação**",
  "a **aplicação**". Só "Comcompartilhar" é real (item 3).

## Plano de implementação

### Fase P1 — Embaralhar opções por questão (corrige #1) — RECOMENDADO: runtime
**Opção A (runtime, recomendada):** em `Simulator.jsx`, ao carregar cada questão, embaralhar
`options` de forma determinística por `id` (seed estável) e **remapear `correctAnswer`**. Renderização
e tela de revisão (linha ~550 e ~701) usam o array remapeado. `cascasDeBanana` é lista independente
(não atrelada à posição), permanece correta. Exclui questões com opção que referencia letra (item #4).
- Prós: 1 mudança de código, corrige as 12 certs, à prova de futuro. Sem risco aos dados.

**Opção B (dados):** reordenar fisicamente as opções + atualizar `correctAnswer` em pl300/pl200.
- Contras: edita milhares de itens, não previne reincidência. Preterida.

### Fase P2 — Tornar #4 shuffle-safe
Reescrever `mo201_q8`/`q47` para referenciar o **conteúdo** das opções, não as letras
("Ambas: <X> e <Y>"). Assim ficam compatíveis com o embaralhamento.

### Fase P3 — Preencher 18 `puloDoGato` do mo101
Derivar o insight-chave de papoReto/dicaOuro de cada questão (1–2 frases técnicas).

### Fase P4 — Corrigir 28 typos "Comcompartilhar" → "Compartilhar" (pl200)
Substituição escopada, verificando que não há "com compartilhar" legítimo.

### Fase P5 — Revalidação
Validador (0 erros) + auditoria de conteúdo (B/D=0) + re-checar distribuição de correctAnswer
(pós-shuffle deve estar ~equilibrada em runtime) + 0 puloDoGato vazio + 0 "Comcompart".

## Prioridade
1. **P1 (#1)** — maior impacto na integridade do produto.
2. **P2** — pré-requisito do P1 (2 questões).
3. **P3, P4** — lacunas de conteúdo, menor severidade.

---

## RESULTADO DA EXECUÇÃO (P1–P5) — concluída

### P2 — mo201_q8/q47 shuffle-safe
Distratores "Ambas as opções A e C/B" reescritos como opções autocontidas plausíveis-mas-erradas
+ cascasDeBanana correspondentes melhoradas (saíram de genéricas para técnicas). Sem referência a letras.

### P1 — Embaralhamento determinístico de opções (runtime)
`src/pages/Simulator.jsx`: helpers `withShuffledOptions` (xmur3 + mulberry32, seed por `id`) aplicados
em `setQuestions(...)`. Determinístico por questão → preserva índices de respostas salvas (modo livre).
Pula opções com referência a letra. **Verificação offline com o algoritmo idêntico:**
- pl300: **96% → 29%** no índice 0 | pl200: **42% → 29%** | todas as 12 certs ≤33% (ideal=25%).
- Integridade: resposta correta preservada em 100% das questões. 0 puladas por letter-ref (P2 surtiu efeito).
- `cascasDeBanana`/`respostaCerta` baseadas em conteúdo → permanecem válidas após shuffle.

### P3 — mo101: 18 `puloDoGato` preenchidos
Insight técnico específico por questão (distinto da dicaOuro). 0 vazios restantes.

### P4 — pl200: typo "Comcompartilhar" → "Compartilhar"
28 ocorrências corrigidas (3 variantes) + "consume"→"consome" em q108. 0 restantes.

### P5 — Revalidação
- **Validador: 0 ERROS** (125 avisos = tamanho em conteúdo completo, inalterado).
- mo101 puloDoGato vazio: **0**. Auditoria v3: empty=0, xdup=0, cascade=0, coher=0.
- corrupt: 40 restantes — **todos falsos positivos** (`\b` ASCII em "a ação"/"saúde de"); 0 reais.
- **`npx vite build`: ✓ built in 12.5s** (exit 0). Erros de lint nas linhas 77/179 são pré-existentes,
  não relacionados às mudanças.

**Estado final: 3.625 questões, 12 certs, 0 erros, opções equilibradas, build OK.** Sem commits.
