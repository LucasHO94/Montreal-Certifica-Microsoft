# Plano de Remediação dos Bancos de Questões
**Executor-alvo:** Claude Haiku 4.5 · **Arquitetura/diagnóstico:** Claude Opus 4.8 · **Data:** 2026-06-24

> Este documento é auto-contido. O executor (Haiku) deve segui-lo literalmente, sem improvisar processo.

---

## 0. PRINCÍPIOS ANTI-INCIDENTE (OBRIGATÓRIO — leia antes de tudo)

Um incidente anterior destruiu conteúdo porque vários agentes em background editaram os mesmos
arquivos simultaneamente e fizeram commits/reset sem autorização. Para nunca repetir:

1. **UM executor por vez.** NUNCA crie subagentes (ferramenta Agent/Task proibida).
2. **UM arquivo por vez, UM lote por vez.** Nunca abra dois `pt.js` simultaneamente.
3. **ZERO git.** Não rode `git commit`, `reset`, `checkout`, `stash`, `clean`. Quem commita é o humano.
4. **Quality gate após cada lote:** `node scripts/validate-questions.mjs <cert>` precisa retornar
   **0 erros** antes de seguir para o próximo lote. Se aparecer erro, conserte antes de avançar.
5. **Só edite o `pt.js` alvo.** Não toque em `certifications.js`, `index.js`, `en.js` ou outros bancos.
6. **Progresso rastreável:** ao concluir um lote, registre os ids feitos em `docs/progress/<cert>.md`.
7. **Preserve sempre:** `id`, `correctAnswer` (índice), `domain`, ordem das alternativas. Nunca troque
   a alternativa correta de posição sem ajustar `correctAnswer`.

---

## 1. DIAGNÓSTICO (verificado em 2026-06-24)

| Cert | Qtd | Erros | Avisos | Problema dominante |
|------|----:|------:|-------:|--------------------|
| **mo101/pt** | 200 | 200 | 1 | **100% explicações template genéricas** → reescrita total |
| **mo201/pt** | 200 | 200 | 9 | **100% explicações template genéricas** → reescrita total |
| **mo500/pt** | 200 | 200 | 45 | **100% explicações template genéricas** → reescrita total |
| **dp600/pt** | 300 | 0 | 228 | **Bloco q149–q215 com explicação trocada** (papoReto não corresponde à pergunta) + tamanho |
| **dp700/pt** | 300 | 0 | 1015 | **Tamanho extremo** (média 895, máx 1675); conteúdo alinhado |
| **pl300/pt** | 300 | 0 | 1450 | **Tamanho catastrófico** (média 1451, 289/300 muito longas); conteúdo bom |
| **ms721/pt** | 325 | 0 | 378 | Tamanho (211 longas); **conteúdo de boa qualidade** |
| **pl200/pt** | 300 | 1 | 507 | Tamanho + cascatas incompletas (cobrem só 2 de 3 distratores em ~210 q) + 1 frase genérica |
| **ms700/pt** | 300 | 0 | 57 | Tamanho moderado (59 longas) |
| **ab900/pt** | 300 | 0 | 44 | Tamanho leve (30 longas) |
| **az900/pt** | 300 | 3 | 1 | 3 questões com frase genérica (q4, q48, q56) |
| **ai900/pt** | 300 | 0 | 0 | ✅ Referência de qualidade — use como modelo |

**Não-problemas (descartados após verificação):**
- ❌ Encoding/mojibake: **NÃO existe**. Os "Ã" são apenas "NÃO/REGIÃO/COVARIÂNCIA" em maiúsculas (UTF-8 válido).
- ❌ `correctAnswer` inválido: zero ocorrências.
- ❌ ids/enunciados duplicados: zero.
- EN: praticamente ausente (stubs vazios; loader faz fallback p/ PT). Fora do escopo principal (Fase E opcional).

---

## 2. PADRÃO DE QUALIDADE PREMIUM

### 2.1 Schema (não alterar a forma)
```js
{
  id: 'mo201_q42',                 // PRESERVAR
  text: '...',                     // enunciado curto e realista
  options: ['...', '...', '...', '...'],  // normalmente 4; PRESERVAR ordem
  correctAnswer: 2,                // índice 0-based; PRESERVAR salvo se mover a correta
  difficulty: 'iniciante'|'intermediario'|'avancado',
  domain: '...',                   // PRESERVAR exatamente (usado na ponderação)
  explanation: {
    intro: '...',                  // 1 frase: contextualiza o conceito (sem citar "a certificação X")
    papoReto: '...',               // explicação direta do PORQUÊ a correta é correta (linguagem clara)
    respostaCerta: '...',          // (opcional, mas recomendado) reafirma a alternativa correta
    puloDoGato: '...',             // a dica/insight que separa quem sabe de quem chuta
    cascasDeBanana: ['...','...','...'],  // 1 entrada POR DISTRATOR, citando-o e dizendo por que erra
    dicaOuro: '...'                // mnemônico/regra prática para a prova
  }
}
```

### 2.2 Regras de conteúdo (premium, único, exam-like)
- **Único:** cada explicação fala do caso concreto da questão. Proibido texto genérico reutilizável.
- **Exam-like Microsoft:** enunciado = 1 cenário curto + 1 pergunta objetiva. Sem "história" longa.
- **Tecnicamente correto:** nomes reais de menus/funções/recursos (ex.: `XLOOKUP`, `Operator Connect`,
  `Change Data Feed`, "Arquivo → Opções → Avançado"). Sem inventar recursos.
- **`cascasDeBanana` = 1 por distrator**, cada uma citando o texto (ou termo-chave) do distrator e
  explicando o erro específico. Nada de "alternativa incorreta" solto.
- **Tom:** didático e direto ("papo reto"), em PT-BR. `puloDoGato` e `dicaOuro` agregam valor real,
  não repetem o `papoReto`.

### 2.3 Golden example (siga este nível — MO-201/Excel)
```js
{
  id: 'mo201_q42',
  text: 'Você tem uma planilha onde a coluna A traz códigos de produto e precisa retornar o preço da coluna D, mesmo que novas colunas sejam inseridas no meio. Qual função é a mais robusta?',
  options: ['PROCV (VLOOKUP) com índice de coluna fixo', 'XLOOKUP (PROCX)', 'ÍNDICE sozinho', 'DESLOC (OFFSET) com referência fixa'],
  correctAnswer: 1,
  difficulty: 'intermediario',
  domain: 'Fórmulas Avançadas',
  explanation: {
    intro: 'PROCX (XLOOKUP) é a função de busca moderna do Excel 365 que resolve as limitações do PROCV.',
    papoReto: 'O PROCX busca pelo valor e retorna de um intervalo de resultado independente — ele não usa número de coluna. Por isso, inserir colunas no meio não quebra a fórmula, ao contrário do PROCV que depende de um índice numérico fixo.',
    respostaCerta: 'XLOOKUP (PROCX) — busca por valor e referencia o intervalo de retorno diretamente.',
    puloDoGato: 'Sempre que a estrutura da planilha pode mudar, prefira PROCX: ele referencia intervalos, não posições numéricas.',
    cascasDeBanana: [
      'PROCV com índice fixo: quebra ao inserir colunas, pois o índice numérico passa a apontar para a coluna errada.',
      'ÍNDICE sozinho: precisa de CORRESP para localizar a linha; sozinho não faz a busca.',
      'DESLOC com referência fixa: é volátil (recalcula sempre) e também depende de deslocamento numérico frágil.'
    ],
    dicaOuro: 'Decore: PROCV conta colunas (frágil), PROCX referencia intervalos (robusto).'
  }
}
```

---

## 3. ORÇAMENTO DE TAMANHO ("2 minutos" — ler, compreender e responder)

Aplicado ao **enunciado + alternativas** (a explicação não conta para o tempo, mas deve ser concisa).

| Campo | Ideal | Máximo (aviso acima disso) |
|-------|------:|---------------------------:|
| `text` (prosa) | ≤ 250 | 350 |
| cada `option` | ≤ 110 | 160 |
| total `text`+`options` | ≤ 500 | 700 |
| questões com bloco de código (DAX/PySpark/M) | — | 1000 (code isento do limite de prosa) |

Encurtar = remover redundância e "encheção", **preservando o fato testado e a resposta correta**.
Nunca encurte ao ponto de tornar a questão ambígua ou mudar o que está sendo avaliado.

---

## 4. FRASES PROIBIDAS (o validador bloqueia — lista em `scripts/validate-questions.mjs`)
Exemplos do que NÃO pode aparecer: "não é a opção correta para resolver o problema apresentado ou não
existe com essa finalidade", "Esta questão avalia conhecimentos sobre a certificação", "Memorize:",
"Alternativa incorreta:", "Diferencial técnico:", "implementa comportamento esperado segundo padrão técnico".

---

## 5. FASES DE EXECUÇÃO (em ordem de prioridade)

> Cada fase = vários lotes de **10 questões**. Após cada lote: salvar → validar → registrar progresso.

### Fase A — Reescrita total (conteúdo é template) — **600 questões**
Bancos: `mo101` (200), `mo201` (200), `mo500` (200).
Ação: reescrever **explanation** inteira de cada questão no padrão da seção 2. Enunciado/alternativas
geralmente já são aceitáveis — ajuste só se violarem o orçamento de tamanho ou se estiverem incorretos.
Meta de saída: `node scripts/validate-questions.mjs mo101` → 0 erros (idem mo201, mo500).

### Fase B — Bloco corrompido do DP-600 — **~67 questões**
Banco: `dp600`, questões **q149 a q215** (explicação trocada: o `papoReto`/`cascasDeBanana` não
corresponde ao enunciado). Ação: reescrever a `explanation` para corresponder de fato à pergunta e à
alternativa correta já existentes. Verifique uma a uma (não confie no texto antigo da explicação).
Conferir também q126 e q128 (suspeitas). Meta: explicação coerente com a pergunta.

### Fase C — Encurtamento preservando conteúdo — ordem por gravidade
1. `pl300` (1450 avisos — pior caso)
2. `dp700` (1015)
3. `pl200` (507)
4. `ms721` (378)
5. `dp600` (228 — fazer junto/após a Fase B)
6. `ms700` (57)
7. `ab900` (44)
Ação: para cada questão acima do orçamento (seção 3), encurtar enunciado e alternativas. **Não reescrever
a explicação** se ela já for boa (ms721, pl300, dp700 têm conteúdo bom) — só enxugar tamanho.
Meta: `node scripts/validate-questions.mjs <cert> --strict-length` → 0 erros e avisos próximos de 0.

### Fase D — Limpezas pontuais
- `az900`: reescrever explanation de q4, q48, q56 (frases genéricas).
- `pl200`: a questão com frase genérica + completar `cascasDeBanana` faltantes (1 por distrator) nas ~210
  questões que hoje só explicam 2 de 3 distratores.

### Fase E — (Opcional) EN
Popular `en.js` traduzindo/adaptando o PT já saneado. Só após Fases A–D aprovadas pelo humano.

---

## 6. PROTOCOLO POR LOTE (passo a passo para o executor)

Para cada lote de 10 questões:
1. **Ler** as 10 questões alvo no `pt.js` (use Read com offset/limit; não carregue o arquivo todo se grande).
2. **Reescrever/encurtar** conforme a fase, respeitando seções 2–4.
3. **Aplicar** com a ferramenta Edit (um Edit por questão, `old_string` único).
4. **Validar:** `node scripts/validate-questions.mjs <cert>` → precisa dar **0 erros**.
5. **Registrar** em `docs/progress/<cert>.md`: data, ids do lote, "OK".
6. Repetir para o próximo lote. **Não** commitar.
7. Ao terminar a cert inteira: avisar o humano para revisão e commit.

Se um Edit falhar (old_string não único/não encontrado): reabra a questão, copie o trecho exato e refaça.
Nunca use `replace_all` em conteúdo de questões.

---

## 7. COMANDOS DE VALIDAÇÃO

```bash
# valida uma cert (porta de qualidade — rodar após cada lote)
node scripts/validate-questions.mjs dp600

# valida todas
node scripts/validate-questions.mjs

# também falha em avisos de tamanho (usar ao fechar a Fase C)
node scripts/validate-questions.mjs pl300 --strict-length

# build de fumaça (garante que a app ainda compila) — rodar ao fim de cada cert
npm run build
```

**Definição de pronto (por cert):** `validate-questions.mjs <cert>` com 0 erros; Fase C também com
avisos de tamanho zerados; `npm run build` passa; humano revisou e autorizou o commit.
