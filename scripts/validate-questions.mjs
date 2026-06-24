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

// ---- Orçamento de tamanho (padrão "2 minutos") ----
const LEN = {
  textMax: 350,        // enunciado em prosa (code blocks contam à parte, ver CODE_EXEMPT)
  optMax: 160,         // cada alternativa
  totalIdeal: 500,     // text + soma das options
  totalMax: 700,       // acima disso = AVISO de tamanho
};

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

const REQUIRED_EXPLANATION_FIELDS = ['intro', 'papoReto', 'puloDoGato', 'cascasDeBanana', 'dicaOuro'];

function len(s) { return (s || '').length; }
function hasCodeBlock(s) { return /```|=[A-ZÁ]{2,}\(|VAR\s|RETURN\s|df\.|CALCULATE\(/.test(s || ''); }

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

    // --- AVISOS de tamanho ---
    const tl = len(q.text);
    const ol = (q.options || []).reduce((a, o) => a + len(o), 0);
    const total = tl + ol;
    const codeQ = hasCodeBlock(q.text);
    if (!codeQ && tl > LEN.textMax) warns.push(`${cert}/${id}: enunciado ${tl} > ${LEN.textMax}`);
    for (let i = 0; i < (q.options || []).length; i++)
      if (len(q.options[i]) > LEN.optMax) warns.push(`${cert}/${id}: alternativa[${i}] ${len(q.options[i])} > ${LEN.optMax}`);
    const totalBudget = codeQ ? LEN.totalMax + 300 : LEN.totalMax;
    if (total > totalBudget) warns.push(`${cert}/${id}: total ${total} > ${totalBudget}${codeQ ? ' (code)' : ''}`);
  }

  return { errors, warns, count: qs.length };
}

async function main() {
  const args = process.argv.slice(2);
  const strictLength = args.includes('--strict-length');
  const only = args.filter(a => !a.startsWith('--'));
  const certs = only.length ? only :
    fs.readdirSync(QBASE).filter(d => fs.statSync(path.join(QBASE, d)).isDirectory());

  let totalErrors = 0, totalWarns = 0;
  for (const cert of certs) {
    let qs;
    try { qs = await loadCert(cert, 'pt'); }
    catch (e) { console.log(`❌ ${cert}: ERRO DE SINTAXE/IMPORT — ${e.message.split('\n')[0]}`); totalErrors++; continue; }
    if (qs === null) { console.log(`⚠️  ${cert}: sem pt.js`); continue; }

    const { errors, warns, count } = validateCert(cert, qs);
    const status = errors.length ? '❌' : (warns.length ? '⚠️ ' : '✅');
    console.log(`${status} ${cert}: ${count} questões | ${errors.length} erros | ${warns.length} avisos`);
    errors.slice(0, 15).forEach(e => console.log('   ERRO: ' + e));
    if (errors.length > 15) console.log(`   ... +${errors.length - 15} erros`);
    warns.slice(0, 8).forEach(w => console.log('   aviso: ' + w));
    if (warns.length > 8) console.log(`   ... +${warns.length - 8} avisos`);
    totalErrors += errors.length;
    totalWarns += warns.length;
  }

  console.log(`\nTOTAL: ${totalErrors} erros, ${totalWarns} avisos`);
  if (totalErrors > 0) process.exit(1);
  if (strictLength && totalWarns > 0) process.exit(1);
}

main();
