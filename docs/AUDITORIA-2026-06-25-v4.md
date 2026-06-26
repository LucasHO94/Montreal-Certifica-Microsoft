# Auditoria (4ª passada) — i18n, domínios, modelo de dados — 2026-06-25

**Escopo:** 12 certs, 3.625 questões PT **+ os arquivos `en.js`** (nunca antes auditados — o validador
roda só em `pt`). Dimensões novas: paridade/saúde dos idiomas, alinhamento de `domain` com a config
das certs (afeta o modo exame), validade de enums `difficulty`/`domain`, uniformidade de opções.

## Achados REAIS

### 🔴 1. i18n — Inglês meio-construído (feature exposta na UI via LanguageSwitcher)
O app é bilíngue (toggle pt↔en). Loader de cada cert: retorna `en` se `questionsEn.length > 0`,
senão cai para `pt`. Estado dos `en.js`:

| Situação | Certs | Efeito ao trocar p/ inglês |
|---|---|---|
| `en.js` **vazio** → fallback p/ pt | 10 (ab900, ai900, dp600, dp700, mo101, mo201, mo500, ms700, ms721, pl300) | Mostra português (degradação graciosa; inglês dormente) |
| `en.js` **parcial** | **az900 (20 de 300)** | Usuário recebe só **20 questões** (loader não cai p/ pt pois length>0) — **UX quebrada** |
| `en.js` **completo mas inválido** | **pl200 (300)** | **126 questões sem campos obrigatórios** de explanation + **123 sem respostaCerta** — reprovaria no validador |

→ Inglês não é realmente suportado em 11/12 certs; onde "existe" (az900/pl200) está parcial ou quebrado.

### 🟡 2. pl200 — desalinhamento de domínio (pt) quebra a ponderação do exame
142 de 300 questões (47%) usam nomes de `domain` que **não existem** na `CERTS_CONFIG`:

| `q.domain` atual (qtd) | Deveria ser (config) |
|---|---|
| "Aplicativos do Microsoft Power" (60) | **Power Apps** |
| "Fluxos em nuvem do Microsoft Power Automate" (39) | **Power Automate** |
| "Criação de Chatbots com Power Virtual Agents" (20) | **Microsoft Copilot Studio** |
| "Integração do Power BI" (12) | **Power BI** |
| "Microsoft Power Pages" (11) | **Power Pages** |
| (Microsoft Dataverse 135, Ambientes… 23 — já batem ✓) | |

`sampleQuestionsWeighted` filtra `q.domain === d.name`; com 5 dos 7 domínios sem match, os pools
ficam vazios e o **top-up aleatório** preenche o exame — ou seja, a **ponderação por domínio é
silenciosamente ignorada** no pl200 (vira amostragem aleatória). As outras 11 certs estão alinhadas.

### 🟢 3. pl200 — contagem de opções não-uniforme (informativo)
12 questões com 2 opções, 2 com 3 opções, 286 com 4. As de 2 opções são o formato legítimo
Sim/Não ("Esta solução atende ao objetivo?"). Não é defeito.

## Limpo (verificado)
- Enums `difficulty`: válidos em todas as 12 certs (só iniciante/intermediario/avancado).
- Alinhamento de domínio: **11/12 certs ✓** (só pl200 desalinhado).
- az900/en (20q): estruturalmente íntegro — apenas parcial em quantidade.

## Plano de implementação

### Fase Q1 — Alinhar domínios do pl200 (corrige #2)
Renomear os 5 valores de `domain` em `pl200/pt.js` (e `en.js`) conforme o mapa acima. Restaura a
ponderação por domínio no modo exame. Substituição global por valor exato, baixo risco.

### Fase Q2 — Consistência de i18n (corrige #1) — DECISÃO NECESSÁRIA
**Caminho A (recomendado, baixo esforço):** tornar o inglês consistente via fallback. Ajustar o
loader p/ retornar `en` apenas quando o conjunto estiver **completo e válido**; senão cair p/ pt.
- az900: usuário inglês passa a receber as 300 (pt) em vez de 20 parciais.
- pl200/en: ou (a) corrigir os 126 campos faltantes (espelhar o backfill feito no pt) para qualificar
  como inglês válido, ou (b) deixar cair p/ pt até tradução real.
- Resultado: inglês nunca exibe conteúdo parcial/quebrado.

**Caminho B (alto esforço):** investir no inglês — backfill pl200/en (126 campos) + traduzir os
10 stubs vazios. Fora do escopo de correção automática (tradução real de ~3.300 questões).

### Fase Q3 — (se Caminho A-a ou B) Backfill pl200/en
Inserir `respostaCerta` (= opção correta) e campos obrigatórios de explanation ausentes, como feito
no pt. Depois, estender o validador para rodar também em `en` (hoje hardcoded em `pt`).

### Fase Q4 — Revalidação
Validador (pt + en), simulação de `sampleQuestionsWeighted(pl200)` com domínios alinhados, build.

## DECISÃO (tomada) — "Consertar pl200/en e manter"
Plano de execução travado:
1. **Q1** — renomear os 5 domínios do pl200 (pt + en) p/ os nomes da config.
2. **Q3** — backfill em `pl200/en.js`: inserir `respostaCerta` (= opção correta) e os campos
   obrigatórios de explanation ausentes (126 questões), espelhando o que foi feito no pt.
3. **Q2 (loader)** — ajustar cada `index.js` p/ usar `en` apenas quando o conjunto for **completo**
   (mesma contagem do pt) e válido; senão cair p/ pt. Assim: pl200/en (consertado) é servido em
   inglês; **az900/en (20 parciais) cai p/ pt (300)**; os 10 stubs vazios seguem caindo p/ pt.
4. **Validador** — estender p/ rodar também em `en` (hoje hardcoded em `pt`).
5. **Q4** — revalidar pt+en, simular `sampleQuestionsWeighted(pl200)`, build.

---

## RESULTADO DA EXECUÇÃO (revisado: 3 certs em inglês via subagentes)
Decisão final do usuário: **inglês completo para AB-900, PL-200 e AZ-900** (mesmas questões traduzidas,
via subagentes em paralelo); as outras 9 certs travadas com "🌐 Tradução EN em breve".

### Tradução (8 subagentes em paralelo → JSON por lote → merge com enforcement do pt)
- **ab900/en**: 300 questões traduzidas (3 agentes). Merge forçando id/correctAnswer/difficulty/domain
  do pt. **0 erros, 0 avisos.** ids espelham pt, correctAnswer 300/300, 0 resíduo de português.
- **az900/en**: 300 questões traduzidas (3 agentes), substituindo os 20 antigos (ids divergentes).
  **0 erros, 0 avisos.** ids espelham pt, correctAnswer 300/300, 0 resíduo pt.
- **pl200/en**: já era tradução real; completadas as **364 cascatas faltantes** (2 agentes) +
  respostaCerta (123) + 3 cascatas + frase proibida. **0 erros**, 10 avisos (tamanho, = pt).
  (24 questões têm ordem de opções diferente do pt, mas correctAnswer aponta à opção correta em
  cada idioma — consistente; o app embaralha opções de qualquer modo.)

### Q1 — domínios pl200 alinhados (pt+en): 0 órfãos → ponderação do exame restaurada.
### Trava — `CERTS_WITH_EN = ['ab900','az900','pl200']`; as 9 demais mostram "EN em breve".
### Validador — estendido (`--all-langs` / `--lang=en`). **Full pt+en: 0 ERROS.**
### Build — `npx vite build` ✓ (exit 0).

**Estado final: 12 certs pt (0 erros) + 3 certs en completos (ab900/az900/pl200, 0 erros). Build OK.**
Sem commits.
