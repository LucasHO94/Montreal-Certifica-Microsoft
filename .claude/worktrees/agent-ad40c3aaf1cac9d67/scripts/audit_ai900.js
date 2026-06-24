import { questions } from '../src/data/questions/ai900/pt.js';

function audit() {
  console.log("=== INICIANDO AUDITORIA SIMULADO AI-900 ===");
  console.log(`Total de questões encontradas: ${questions.length}`);
  
  if (questions.length === 0) {
    console.error("ERRO: Nenhuma questão carregada.");
    process.exit(1);
  }
  
  const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const domains = {};
  let errors = 0;
  let warnings = 0;
  
  questions.forEach((q, idx) => {
    // Check ID
    if (!q.id) {
      console.error(`ERRO: Questão no índice ${idx} não possui ID.`);
      errors++;
    }
    
    // Check text
    if (!q.text || q.text.trim() === "") {
      console.error(`ERRO [${q.id || idx}]: Enunciado vazio.`);
      errors++;
    }
    
    // Check options
    if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`ERRO [${q.id || idx}]: Campo 'options' inválido (esperado array de 4 itens).`);
      errors++;
    } else {
      // Check duplicated options
      const uniqueOpts = new Set(q.options);
      if (uniqueOpts.size !== 4) {
        console.error(`ERRO [${q.id || idx}]: Opções duplicadas encontradas.`);
        errors++;
      }
    }
    
    // Check correctAnswer
    if (q.correctAnswer === undefined || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`ERRO [${q.id || idx}]: 'correctAnswer' inválido ou ausente: ${q.correctAnswer}`);
      errors++;
    } else {
      counts[q.correctAnswer]++;
    }
    
    // Check domain
    if (!q.domain || q.domain.trim() === "") {
      console.error(`ERRO [${q.id || idx}]: Campo 'domain' vazio ou ausente.`);
      errors++;
    } else {
      domains[q.domain] = (domains[q.domain] || 0) + 1;
    }
    
    // Check difficulty
    if (!q.difficulty || !['iniciante', 'intermediario', 'avancado'].includes(q.difficulty)) {
      console.error(`ERRO [${q.id || idx}]: Campo 'difficulty' inválido ou ausente: ${q.difficulty}`);
      errors++;
    }
    
    // Check explanation fields
    if (!q.explanation) {
      console.error(`ERRO [${q.id || idx}]: Campo de explicação ausente.`);
      errors++;
    } else {
      const expKeys = ['intro', 'papoReto', 'respostaCerta', 'puloDoGato', 'cascasDeBanana', 'dicaOuro'];
      expKeys.forEach(key => {
        if (!q.explanation[key]) {
          console.error(`ERRO [${q.id || idx}]: Campo de explicação ausente: ${key}`);
          errors++;
        }
      });
      
      if (q.explanation.cascasDeBanana && Array.isArray(q.explanation.cascasDeBanana)) {
        if (q.explanation.cascasDeBanana.length !== 3) {
          console.warn(`AVISO [${q.id || idx}]: Esperado 3 cascasDeBanana, encontrado: ${q.explanation.cascasDeBanana.length}`);
          warnings++;
        }
      }
    }
  });
  
  console.log("\n--- Distribuição das Respostas Corretas (Gabarito) ---");
  for (let i = 0; i < 4; i++) {
    const qty = counts[i];
    const pct = ((qty / questions.length) * 100).toFixed(1);
    console.log(`Alternativa ${String.fromCharCode(65 + i)} (Índice ${i}): ${qty} questões (${pct}%)`);
  }
  
  console.log("\n--- Distribuição por Domínio ---");
  Object.keys(domains).sort().forEach(dom => {
    console.log(`* ${dom}: ${domains[dom]} questões`);
  });
  
  console.log(`\nAuditoria finalizada com ${errors} erros e ${warnings} avisos.`);
  
  if (errors > 0) {
    process.exit(1);
  } else {
    console.log("Sucesso: A base de questões está estruturalmente perfeita!");
  }
}

audit();
