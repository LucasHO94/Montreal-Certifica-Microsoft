# Fase D — PL-200 (cascatas faltantes)

**Executor:** Claude Sonnet 4.6 · **Início:** 2026-06-25

## Contexto
Fase C (comprimento) já está 100% concluída para pl200 (0 avisos de tamanho).
Restam avisos de `cascasDeBanana` com menos entradas do que distratores
(`cascatas=N, esperado=options.length-1`).

## Escopo
- Total inicial: 286 avisos / ~356 entradas de cascata faltantes (216 questões faltando 1, 70 questões faltando 2).
- 0 erros bloqueantes; build sempre passou durante o processo.

## Abordagem
Para cada questão com cascata incompleta: ler a opção errada ainda não coberta,
escrever uma entrada no padrão `"<texto da opção errada>: <por que está errada>"`,
coerente com `respostaCerta`/`papoReto` já existentes. Inserção via script Node
que localiza o objeto da questão por `id` (bounds por contagem de chaves, já que
a ordem dos campos varia entre arquivos) e injeta a(s) nova(s) string(s) no array
`cascasDeBanana` antes do fechamento.

## Progresso
- Lote 1 (q1–q37_topic1, 30 questões): 30/30 aplicadas. Avisos: 286 → 256. Build OK.
- Lote 2 (q38–q70_topic1, 30 questões): 30/30 aplicadas (1 corrigida manualmente — `q53_topic1` tinha um `{` literal de código Power Fx no campo `text` que confundiu a contagem de chaves do script de inserção). Avisos: 256 → 226. Build OK.
- Lote 3 (q71–q100_topic1, 30 questões): 30/30 aplicadas. Avisos: 226 → 196. Build OK.
- Lote 4 (q101–q131_topic1, 30 questões): 30/30 aplicadas. Avisos: 196 → 166. Build OK.
- Lote 5 (q132–q164_topic1, 30 questões): 30/30 aplicadas. Avisos: 166 → 136. Build OK.
- Lote 6 (q165–q193_topic1 + pl200_oficial_222–292, 30 questões): 30/30 aplicadas. Avisos: 136 → 106. Build OK.
- Lote 7 (pl200_oficial_297 + blocos v2/v3/v4, 30 questões): 30/30 aplicadas. Avisos: 106 → 76. Build OK.
- Lote 8 (pl200_oficial_v4_6047/6048 + pl200_oficial_new_001–028, 30 questões): 30/30 aplicadas. Avisos: 76 → 46. Build OK.
- Lote 9 (pl200_oficial_new_029–058, 30 questões): 30/30 aplicadas. Avisos: 46 → 16. Build OK.
- Lote 10 (pl200_oficial_new_059–074, 16 questões): 16/16 aplicadas. Avisos: 16 → 0. Build OK.

## Nota técnica
O script de inserção (`insert_cascades.mjs`) localiza os limites do objeto de cada questão
contando chaves `{}` no texto bruto. Questões com código (Power Fx, DAX) cujo campo `text`
contenha chaves literais dentro da string podem confundir essa contagem — nesses casos,
a inserção falha com erro `no-cascasDeBanana` e a correção deve ser feita manualmente via Edit.
(Ocorreu uma vez, em `q53_topic1`.)

## Resultado final
**pl200: 0 erros, 0 avisos. Build OK. Fase D concluída.**

Com isso, as 7 certificações do plano de remediação (pl300, dp700, pl200, ms721, dp600, ms700, ab900)
estão todas com 0 erros e 0 avisos no validador, totalizando 2.225 questões.
