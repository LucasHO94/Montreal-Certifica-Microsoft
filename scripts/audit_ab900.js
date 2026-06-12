import { questions } from '../src/data/questions/ab900/pt.js';

function audit() {
  console.log("=== INICIANDO AUDITORIA SIMULADO AB-900 ===");
  console.log(`Total de questões encontradas: ${questions.length}`);
  
  if (questions.length === 0) {
    console.error("ERRO: Nenhuma questão carregada.");
    process.exit(1);
  }
  
  const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const domains = {};
  let errors = 0;
  
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
    if (!q.options || q.options.length !== 4) {
      console.error(`ERRO [${q.id || idx}]: Deve possuir exatamente 4 opções.`);
      errors++;
    } else {
      q.options.forEach((opt, oidx) => {
        if (!opt || opt.trim() === "") {
          console.error(`ERRO [${q.id || idx}]: Opção ${oidx} está vazia.`);
          errors++;
        }
      });
      
      // Check duplicate options
      const uniqueOpts = new Set(q.options);
      if (uniqueOpts.size !== 4) {
        console.error(`ERRO [${q.id || idx}]: Opções duplicadas detectadas: ${q.options}`);
        errors++;
      }
    }
    
    // Check correctAnswer index range
    if (q.correctAnswer === undefined || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`ERRO [${q.id || idx}]: correctAnswer deve ser entre 0 e 3. Valor encontrado: ${q.correctAnswer}`);
      errors++;
    } else {
      counts[q.correctAnswer] += 1;
    }
    
    // Check explanation fields
    if (!q.explanation) {
      console.error(`ERRO [${q.id || idx}]: Sem objeto de explicação.`);
      errors++;
    } else {
      const requiredExp = ['intro', 'papoReto', 'respostaCerta', 'puloDoGato', 'cascasDeBanana', 'dicaOuro'];
      requiredExp.forEach(field => {
        if (!q.explanation[field]) {
          console.error(`ERRO [${q.id || idx}]: Campo de explicação ausente: ${field}`);
          errors++;
        }
      });
      if (q.explanation.cascasDeBanana && q.explanation.cascasDeBanana.length !== 3) {
        console.warn(`AVISO [${q.id || idx}]: Esperado 3 cascasDeBanana, encontrado: ${q.explanation.cascasDeBanana.length}`);
      }
    }
    
    // Check domain
    if (!q.domain || q.domain.trim() === "") {
      console.error(`ERRO [${q.id || idx}]: Domínio ausente ou vazio.`);
      errors++;
    } else {
      domains[q.domain] = (domains[q.domain] || 0) + 1;
    }
    
    // Check difficulty
    const validDiff = ["iniciante", "intermediario", "avancado"];
    if (!q.difficulty || !validDiff.includes(q.difficulty)) {
      console.error(`ERRO [${q.id || idx}]: Dificuldade inválida ou ausente: ${q.difficulty}`);
      errors++;
    }
  });
  
  console.log("\n--- Distribuição das Respostas Corretas (Gabarito) ---");
  for (let key in counts) {
    const percentage = ((counts[key] / questions.length) * 100).toFixed(1);
    console.log(`Alternativa ${String.fromCharCode(65 + parseInt(key))} (Índice ${key}): ${counts[key]} questões (${percentage}%)`);
  }
  
  console.log("\n--- Distribuição por Domínio ---");
  for (let dom in domains) {
    console.log(`* ${dom}: ${domains[dom]} questões`);
  }
  
  console.log(`\nAuditoria finalizada com ${errors} erros.`);
  if (errors > 0) {
    process.exit(1);
  } else {
    console.log("Sucesso: A base de questões está estruturalmente perfeita!");
    process.exit(0);
  }
}

audit();
