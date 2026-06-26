# Auditoria de conteúdo (2ª passada) — 2026-06-25

**Escopo:** 12 certificações, 3.625 questões. Auditoria **de conteúdo** (não só estrutural):
sentido preservado, perguntas completas, respostas íntegras, comparação byte-a-byte com `git HEAD`
(estado pristino, anterior a todo trim).

## Conclusão central
A **Fase 3.3** (encurtamento de prosa/enunciados para zerar avisos de tamanho) **danificou conteúdo**.
Os avisos de tamanho do validador são uma heurística de "leitura em 2 min" — **não-bloqueantes por design**
(o validador só sai com erro em ERROS, não em avisos). Ao persegui-los cortando texto, repeti a mesma
classe de erro da Fase C original que eu vim corrigir. Questões de certificação são legitimamente longas;
completude > orçamento arbitrário de caracteres.

### Evidência (dano confirmado)
- `dp700_q300`: enunciado cortado para `"...processa 500 GB diários com SLA…"` — **a pergunta
  "Qual é a abordagem sistemática de diagnóstico e otimização?" desapareceu**.
- `q22_topic1` (pl200): cortado para `"...em dispositivos…"` — **perdeu o cenário inteiro E a pergunta**.
- 109 campos terminam em `…` (corte forçado sem ponto de quebra), muitos em **respostas corretas**
  (ex.: `mo201_q154:opt[CORR]`, `mo500_q200`).

### Quantificação (atual vs HEAD)
| Item | Qtd danificada |
|---|---|
| Enunciados (`text`) encurtados/truncados vs HEAD | **173** |
| Opções encurtadas/truncadas vs HEAD | **715** |
| — destes, terminando em `…` (corte forçado) | 109 |

Pior concentração: `dp700` (19 textos + 264 opções), `pl200` (118 textos), `pl300` (21+106),
`ms721` (4+155). HEAD contém as versões **completas e corretas**.

## Falsos positivos descartados (NÃO são problema)
- **C — 1.720 "opções curtas <25 chars":** alternativas de múltipla escolha são naturalmente curtas
  (nomes de produto: "Exchange Online", "Teams admin center"; ações: "Desativar MFA"). Normal.
- **A — 93 "enunciados sem pergunta":** maioria são prompts de completar (terminam em `:` ou `é um exemplo de:`),
  formato válido. (Alguns coincidem com dano de B/F — esses sim entram no reparo.)
- **E — 68 "respostaCerta não bate":** `respostaCerta` parafraseia a opção correta de forma mais rica
  (ex.: opção `"1. Sim | 2. Sim..."` ↔ respostaCerta `"1. Agrupar: Sim | 2. Regras: Sim..."`). Design correto.
- **D — opções duplicadas:** 0. Limpo.

## O que do trabalho desta sessão está CORRETO (preservar)
- **Fase 1 — validador:** novas regras (respostaCerta obrigatória, detecção de duplicatas/truncamento,
  isenção de código nas opções) pegam ERROS reais. Manter.
- **Fase 2 — restauração de código:** 783 opções de código restauradas do HEAD. Correto.
- **Fase 3.1 — `dp600_q125`:** reescrita real (LAG/LEAD/SUM). Diverge do HEAD **de propósito**. Não reverter.
- **Fase 3.2 — backfill respostaCerta:** 281 campos (mo101+pl200). Campo separado, não afetado pelo reparo. Manter.

## Plano de implementação

### Fase R1 — Restaurar conteúdo íntegro do HEAD (prioridade máxima)
Restaurar `q.text` e `q.options` a partir do HEAD para toda questão onde o atual é uma truncagem do HEAD
(prefixo / termina em `…` / HEAD mais longo e válido). Só toca em `text`/`options`; preserva `explanation`
(logo, respostaCerta backfill e demais campos ficam intactos). **Exceção:** `dp600_q125` (rewrite intencional).
Resultado: recupera as ~173 perguntas e ~715 opções para suas versões completas e corretas.

### Fase R2 — Validador: tratar tamanho como sinal suave
Avisos de tamanho são informativos e não-bloqueantes. Opções:
- (a) Elevar/relaxar os orçamentos para conteúdo de certificação (recomendado), **ou**
- (b) Manter os avisos e documentar que são aceitáveis (não falham build; só `--strict-length` falha).
Em ambos os casos, **manter** as checagens de ERRO (duplicatas, respostaCerta, truncamento real de código).
Meta realista: **0 ERROS**. Avisos de tamanho em questões legitimamente detalhadas são aceitáveis.

### Fase R3 — Revalidação
`node scripts/validate-questions.mjs` → 0 erros. Re-rodar a auditoria de conteúdo (este script):
0 itens terminando em `…`, 0 enunciados sem pergunta reais, 0 respostas truncadas.

## Lição registrada
Nunca encurtar `text`/`options` mecanicamente para silenciar **avisos** (não-bloqueantes). Avisos de
tamanho ≠ defeito. Conteúdo completo e correto é o requisito; o orçamento de caracteres é guia, não regra.

---

## RESULTADO DA EXECUÇÃO (R1–R3) — concluída

### R1 — Restauração de conteúdo do HEAD
- **173 enunciados + 718 opções** restaurados às versões completas do HEAD. 0 falhas.
- `q165_topic1` (pl200): corrigido manualmente (truncagem corrompida `"(de."` → texto completo do HEAD;
  não casava o padrão de prefixo automático).
- Preservados: Fase 3.1 (`dp600_q125` rewrite), Fase 3.2 (281 respostaCerta), Fase 2 (código).

### R2 — Validador: orçamento de tamanho recalibrado
- `textMax 350→550`, `optMax 160→350`, `totalMax 700→1100` (≈p99 da distribuição real).
- Mantidas todas as checagens de ERRO (duplicatas, respostaCerta obrigatória, truncamento de código,
  placeholder genérico). Avisos de tamanho documentados como sinal suave não-bloqueante.

### R3 — Revalidação final
- **Validador: 0 ERROS** nas 12 certs. 125 avisos — todos puramente de tamanho em conteúdo
  completo/correto (0 de truncamento, 0 de placeholder).
- **Auditoria de conteúdo: B=0** (nenhum corte forçado `…`), **D=0** (nenhuma duplicata).
  A/C/E/F remanescentes confirmados como falsos positivos (prompts de completar, opções curtas de
  múltipla escolha, respostaCerta parafraseada, reescritas limpas mais curtas).

**Estado final: 3.625 questões, 12 certs, conteúdo íntegro, 0 erros bloqueantes.** Sem commits.
