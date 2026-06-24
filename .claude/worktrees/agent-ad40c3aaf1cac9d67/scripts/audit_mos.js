import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function auditExam(examId, expectedDomains) {
  console.log(`\n=== INICIANDO AUDITORIA SIMULADO ${examId.toUpperCase()} ===`);
  
  const ptPath = path.join(__dirname, `../src/data/questions/${examId}/pt.js`);
  if (!fs.existsSync(ptPath)) {
    console.error(`ERRO: Arquivo pt.js não encontrado para ${examId}.`);
    return false;
  }
  
  const module = await import(pathToFileURL(ptPath).href);
  const questions = module.questions;
  
  console.log(`Total de questões encontradas: ${questions.length}`);
  
  if (questions.length !== 200) {
    console.error(`ERRO: Total de questões é ${questions.length}, esperado exatamente 200.`);
    return false;
  }
  
  let errors = 0;
  let warnings = 0;
  const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const domains = {};
  const difficulties = { iniciante: 0, intermediario: 0, avancado: 0 };
  const ids = new Set();
  
  questions.forEach((q, idx) => {
    // Check ID
    if (!q.id) {
      console.error(`ERRO: Questão no índice ${idx} não possui ID.`);
      errors++;
    } else {
      if (ids.has(q.id)) {
        console.error(`ERRO: ID duplicado: ${q.id}`);
        errors++;
      }
      ids.add(q.id);
      
      const expectedId = `${examId}_q${idx + 1}`;
      if (q.id !== expectedId) {
        console.error(`ERRO: ID ${q.id} fora de sequência. Esperado: ${expectedId}`);
        errors++;
      }
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
      const uniqueOpts = new Set(q.options);
      if (uniqueOpts.size !== 4) {
        console.error(`ERRO [${q.id || idx}]: Opções duplicadas encontradas.`);
        errors++;
      }
      q.options.forEach((opt, optIdx) => {
        if (!opt || opt.trim() === "") {
          console.error(`ERRO [${q.id || idx}]: Opção no índice ${optIdx} está vazia.`);
          errors++;
        }
      });
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
      if (!expectedDomains.includes(q.domain)) {
        console.error(`ERRO [${q.id || idx}]: Domínio desconhecido: "${q.domain}". Esperados: ${JSON.stringify(expectedDomains)}`);
        errors++;
      }
      domains[q.domain] = (domains[q.domain] || 0) + 1;
    }
    
    // Check difficulty
    if (!q.difficulty || !['iniciante', 'intermediario', 'avancado'].includes(q.difficulty)) {
      console.error(`ERRO [${q.id || idx}]: Campo 'difficulty' inválido ou ausente: ${q.difficulty}`);
      errors++;
    } else {
      difficulties[q.difficulty]++;
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
        q.explanation.cascasDeBanana.forEach((banana, bIdx) => {
          if (!banana || banana.trim() === "") {
            console.error(`ERRO [${q.id || idx}]: Casca de banana no índice ${bIdx} está vazia.`);
            errors++;
          }
        });
      }
    }
  });
  
  console.log("\n--- Distribuição das Respostas Corretas (Gabarito) ---");
  for (let i = 0; i < 4; i++) {
    const qty = counts[i];
    const pct = ((qty / questions.length) * 100).toFixed(1);
    console.log(`Alternativa ${String.fromCharCode(65 + i)} (Índice ${i}): ${qty} questões (${pct}%)`);
  }
  
  console.log("\n--- Distribuição por Nível de Dificuldade ---");
  Object.keys(difficulties).forEach(diff => {
    console.log(`* ${diff}: ${difficulties[diff]} questões`);
  });
  
  if (difficulties.iniciante !== 55 || difficulties.intermediario !== 85 || difficulties.avancado !== 60) {
    console.error(`ERRO: Distribuição de dificuldades incorreta. Esperado: 55 iniciante, 85 intermediario, 60 avancado. Encontrado: ${JSON.stringify(difficulties)}`);
    errors++;
  }
  
  console.log("\n--- Distribuição por Domínio ---");
  Object.keys(domains).sort().forEach(dom => {
    console.log(`* ${dom}: ${domains[dom]} questões`);
  });
  
  console.log(`\nAuditoria de ${examId.toUpperCase()} finalizada com ${errors} erros e ${warnings} avisos.`);
  
  return errors === 0;
}

async function run() {
  const domainsMo101 = [
    'Gerenciar Documento',
    'Estilos e Modelos',
    'Referências',
    'Formulários e Macros',
    'Mala Direta'
  ];
  
  const domainsMo201 = [
    'Gerenciar Pastas de Trabalho',
    'Fórmulas Avançadas',
    'Gráficos Avançados',
    'Tabelas Dinâmicas',
    'Análise de Dados',
    'Power Query'
  ];
  
  const domainsMo500 = [
    'Criar e Modificar Bancos de Dados',
    'Criar e Modificar Tabelas',
    'Criar e Modificar Consultas',
    'Criar e Modificar Formulários',
    'Criar e Modificar Relatórios',
    'Criar e Modificar Módulos',
    'Criar e Modificar Macros'
  ];

  const ok101 = await auditExam('mo101', domainsMo101);
  const ok201 = await auditExam('mo201', domainsMo201);
  const ok500 = await auditExam('mo500', domainsMo500);

  if (ok101 && ok201 && ok500) {
    console.log("\n=== SUCESSO: TODAS AS BASES MOS EXPERT ESTÃO PERFEITAS! ===");
    process.exit(0);
  } else {
    console.error("\n=== FALHA: HOUVE ERROS EM UMA OU MAIS BASES! ===");
    process.exit(1);
  }
}

run();
