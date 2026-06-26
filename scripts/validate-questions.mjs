#!/usr/bin/env node
/**
 * Validador de bancos de questões — Montreal Certificações
 * Uso:
 *   node scripts/validate-questions.mjs            # valida todas as certs (PT)
 *   node scripts/validate-questions.mjs dp600      # valida apenas uma cert
 *   node scripts/validate-questions.mjs dp600 --strict-length   # falha se exceder orçamento de tamanho
 *
 * Saída: relatório por cert + código de saída 1 se houver ERRO (bloqueante).
 * AVISOS (length/cascatas) não bloqueiam salvo --strict-length.
 *
 * É a porta de qualidade (quality gate) do plano de remediação. Rode após CADA lote.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QBASE = path.resolve(__dirname, '..', 'src', 'data', 'questions');

// ---- Orçamento de tamanho (sinal SUAVE, não-bloqueante) ----
// Calibrado em ~p99 da distribuição real do banco: avisos só em outliers genuínos,
// não em questões de certificação legitimamente detalhadas. Conteúdo completo e
// correto é o requisito; o tamanho é guia, não regra. NUNCA encurtar text/options
// mecanicamente para zerar estes avisos (ver docs/AUDITORIA-2026-06-25-v2.md).
const LEN = {
  textMax: 550,        // enunciado em prosa (p99≈522); code blocks contam à parte
  optMax: 350,         // cada alternativa (p99≈346)
  totalIdeal: 500,     // referência informativa
  totalMax: 1100,      // text + soma das options (p99≈1102); acima = AVISO
};

// Frases genéricas de respostaCerta (placeholder gerado automaticamente)
const GENERIC_RC = [
  'reflete o conceito ou prática',
  'adequada para o cenário',
  'a opção correta reflete',
  'reflete a melhor prática',
  'é a abordagem correta para o cenário',
  'reflete o conceito ou prática warehouse',
];

// Frases-template proibidas (conteúdo automatizado de baixa qualidade)
const BANNED = [
  'não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade',
  'atende perfeitamente ao que foi solicitado no enunciado',
  'Cuidado com os distratores que parecem corretos',
  'implementa comportamento esperado segundo padrão técnico',
  'Identifique recurso correto conforme contexto',
  'Detalhe crítico segundo documentação',
  'está errada porque não suporta este contexto específico',
  'está errada porque altera propriedade incorreta',
  'está errada porque ativa contexto/estrutura XML',
  'está errada porque manipula propriedade errada',
  'Esta questão avalia conhecimentos sobre a certificação',
  'Memorize:',
  'Alternativa incorreta:',
  'esta é a solução padrão para',
  'Esta é a abordagem técnica apropriada para',
  'Diferencial técnico:',
  'este recurso não está disponível ou comporta-se diferentemente',
];

const REQUIRED_EXPLANATION_FIELDS = ['intro', 'papoReto', 'respostaCerta', 'puloDoGato', 'cascasDeBanana', 'dicaOuro'];

function len(s) { return (s || '').length; }
function hasCodeBlock(s) { return /```|=[A-ZÁ]{2,}\(|VAR\s|RETURN\s|df\.|CALCULATE\(/.test(s || ''); }

// Detecta código em opções (mais permissivo que hasCodeBlock — opções com chamadas de função,
// SQL, PySpark, Power Fx etc. não devem ser limitadas a 160 chars)
function hasOptionCode(s) {
  return /`|=[A-ZÁ]{2,}\(|VAR\s|RETURN\s|df\.|CALCULATE\(|\bSELECT\b|\bFROM\b|\bWHERE\b|\bGROUP\s+BY\b|\bCREATE\b|\bINSERT\b|\bUPDATE\s+\w|\bMERGE\b|\bDROP\b|spark\.|\.option\(|\.format\(|\.schema\(|\.load\(|\.save\(|\bimport\s+[a-z]|\bfrom\s+[a-z]|\bdef\s+[a-z]|pyspark|checkpointLocation|\.partial\(|datetime\(|window\.|\.collect\(|Collect\(|\{[A-Za-z]+:|\bCONFIGURE\b|\.withColumn|\.orderBy|\.groupBy|\.agg\(|\.filter\(|\.join\(|\.show\(|\.count\(|\.write\.|\.read\.|dbutils\.|DeltaTable\.|\.toPandas\(|\.toDF\(|\.repartition\(|\.coalesce\(|ingestion_time\(|\.forPath\(|\bOVER\s*\(|\bPARTITION\s+BY\b|\bORDER\s+BY\b|\bLAG\s*\(|\bLEAD\s*\(|\bROW_NUMBER\s*\(/i.test(s || '');
}

// Opção multi-parte (lista numerada) — não deve ser cortada em 160 chars
function isMultiPart(s) {
  return /\|\s*\d+\.|[-–>]+\s*\d+\.|(?:^|\n)E\s+\d+\.\s/i.test(s || '');
}

// Indícios de truncamento no texto da opção
function looksLikeTruncated(s) {
  const t = (s || '').trim();
  // Backtick ímpar: só avisa se houver ≥3 (1 sozinho pode ser atalho de teclado Ctrl+`)
  if ((t.match(/`/g) || []).length >= 3 && (t.match(/`/g) || []).length % 2 === 1) return 'backtick-impar';
  if (/[,(\[]$/.test(t)) return 'corte-em-expressao';
  if (/\|\s*\d+\.$/.test(t)) return 'multi-parte-cortada';
  // Requer espaço antes do número para evitar false positive em "UTF-8.", "v2.0."
  if (/[-–>]+\s+\d+\.$/.test(t)) return 'multi-parte-cortada';
  return null;
}

async function loadCert(cert, lang = 'pt') {
  const p = path.join(QBASE, cert, lang + '.js');
  if (!fs.existsSync(p)) return null;
  const url = 'file:///' + p.replaceAll('\\', '/');
  const mod = await import(url);
  return mod.questions || [];
}

function validateCert(cert, qs) {
  const errors = [];
  const warns = [];
  const ids = new Set();
  const texts = new Set();

  for (const q of qs) {
    const id = q.id || '(sem id)';
    // --- ERROS bloqueantes ---
    if (!q.id) errors.push(`${cert}: questão sem id`);
    if (ids.has(q.id)) errors.push(`${cert}/${id}: id duplicado`);
    ids.add(q.id);

    const tnorm = (q.text || '').trim().toLowerCase();
    if (tnorm && texts.has(tnorm)) errors.push(`${cert}/${id}: enunciado duplicado`);
    texts.add(tnorm);

    if (!Array.isArray(q.options) || q.options.length < 2)
      errors.push(`${cert}/${id}: precisa de >=2 alternativas`);
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 ||
        !q.options || q.correctAnswer >= q.options.length)
      errors.push(`${cert}/${id}: correctAnswer inválido (${q.correctAnswer})`);

    const ex = q.explanation || {};
    const missing = REQUIRED_EXPLANATION_FIELDS.filter(f => !(f in ex));
    if (missing.length) errors.push(`${cert}/${id}: explanation faltando [${missing.join(', ')}]`);

    if (!q.difficulty) errors.push(`${cert}/${id}: difficulty ausente`);
    if (!q.domain) errors.push(`${cert}/${id}: domain ausente`);

    // opções duplicadas dentro da mesma questão
    const normOpts = (q.options || []).map(o => (o || '').trim().toLowerCase());
    if (new Set(normOpts).size !== normOpts.length)
      errors.push(`${cert}/${id}: opções duplicadas na mesma questão`);

    // cascatas devem cobrir todos os distratores
    if (Array.isArray(ex.cascasDeBanana) && Array.isArray(q.options)) {
      const expected = q.options.length - 1;
      if (ex.cascasDeBanana.length !== expected)
        warns.push(`${cert}/${id}: cascatas=${ex.cascasDeBanana.length}, esperado=${expected}`);
    }

    // frases proibidas
    const blob = JSON.stringify(ex);
    for (const b of BANNED) if (blob.includes(b)) {
      errors.push(`${cert}/${id}: frase-template proibida ("${b.slice(0, 40)}...")`);
      break;
    }

    // respostaCerta genérica/placeholder
    const rcText = (ex.respostaCerta || '').toLowerCase();
    if (rcText && GENERIC_RC.some(g => rcText.includes(g)))
      warns.push(`${cert}/${id}: respostaCerta é placeholder genérico`);

    // --- AVISOS de tamanho ---
    const tl = len(q.text);
    const ol = (q.options || []).reduce((a, o) => a + len(o), 0);
    const total = tl + ol;
    const codeQ = hasCodeBlock(q.text);
    if (!codeQ && tl > LEN.textMax) warns.push(`${cert}/${id}: enunciado ${tl} > ${LEN.textMax}`);
    for (let i = 0; i < (q.options || []).length; i++) {
      const optLen = len(q.options[i]);
      const optExempt = hasOptionCode(q.options[i]) || isMultiPart(q.options[i]);
      if (!optExempt && optLen > LEN.optMax)
        warns.push(`${cert}/${id}: alternativa[${i}] ${optLen} > ${LEN.optMax}`);
      // opção que parece truncada
      const truncReason = looksLikeTruncated(q.options[i]);
      if (truncReason)
        warns.push(`${cert}/${id}: alternativa[${i}] parece truncada (${truncReason})`);
    }
    const anyOptCode = (q.options || []).some(o => hasOptionCode(o));
    const anyOptMulti = (q.options || []).some(o => isMultiPart(o));
    // Orçamento expandido: código (PySpark/DAX extenso) ou multi-parte legitimamente longos
    let totalBudget = LEN.totalMax;
    if (codeQ || anyOptCode) totalBudget = LEN.totalMax + 700;       // code: até 1400
    else if (anyOptMulti) totalBudget = LEN.totalMax + 300;           // multi-parte: até 1000
    if (total > totalBudget) warns.push(`${cert}/${id}: total ${total} > ${totalBudget}${(codeQ || anyOptCode) ? ' (code)' : anyOptMulti ? ' (multi)' : ''}`);
  }

  return { errors, warns, count: qs.length };
}

async function main() {
  const args = process.argv.slice(2);
  const strictLength = args.includes('--strict-length');
  const langArg = args.find(a => a.startsWith('--lang='));
  const allLangs = args.includes('--all-langs');
  // Idiomas a validar: --all-langs = pt+en; --lang=xx = só xx; padrão = pt
  const langs = allLangs ? ['pt', 'en'] : [langArg ? langArg.split('=')[1] : 'pt'];
  const only = args.filter(a => !a.startsWith('--'));
  const certs = only.length ? only :
    fs.readdirSync(QBASE).filter(d => fs.statSync(path.join(QBASE, d)).isDirectory());

  let totalErrors = 0, totalWarns = 0;
  for (const lang of langs) {
    if (langs.length > 1) console.log(`\n===== Idioma: ${lang.toUpperCase()} =====`);
    for (const cert of certs) {
      let qs;
      try { qs = await loadCert(cert, lang); }
      catch (e) { console.log(`❌ ${cert}/${lang}: ERRO DE SINTAXE/IMPORT — ${e.message.split('\n')[0]}`); totalErrors++; continue; }
      if (qs === null) { if (lang === 'pt') console.log(`⚠️  ${cert}: sem ${lang}.js`); continue; }
      // en.js vazio = idioma não traduzido (fallback p/ pt no app) → pula sem erro
      if (lang !== 'pt' && qs.length === 0) continue;

      const { errors, warns, count } = validateCert(`${cert}/${lang}`, qs);
      const status = errors.length ? '❌' : (warns.length ? '⚠️ ' : '✅');
      console.log(`${status} ${cert}/${lang}: ${count} questões | ${errors.length} erros | ${warns.length} avisos`);
      errors.slice(0, 20).forEach(e => console.log('   ERRO: ' + e));
      if (errors.length > 20) console.log(`   ... +${errors.length - 20} erros`);
      warns.slice(0, 20).forEach(w => console.log('   aviso: ' + w));
      if (warns.length > 20) console.log(`   ... +${warns.length - 20} avisos`);
      totalErrors += errors.length;
      totalWarns += warns.length;
    }
  }

  console.log(`\nTOTAL: ${totalErrors} erros, ${totalWarns} avisos`);
  if (totalErrors > 0) process.exit(1);
  if (strictLength && totalWarns > 0) process.exit(1);
}

main();
