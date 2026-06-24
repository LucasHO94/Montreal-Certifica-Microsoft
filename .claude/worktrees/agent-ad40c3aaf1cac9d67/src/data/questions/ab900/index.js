import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

// Mapeia valores EN → valores internos (PT) usados pelo sistema
const DIFFICULTY_MAP = {
  beginner:     'iniciante',
  intermediate: 'intermediario',
  advanced:     'avancado',
};

const DOMAIN_MAP = {
  'Microsoft 365 Services':    'Serviços Microsoft 365',
  'Identity and Access':       'Identidade e Acesso',
  'Data Protection and Governance': 'Proteção de Dados e Governança',
  'Copilot and Agents':        'Copilot e Agentes',
  'Administration and Monitoring': 'Administração e Monitoramento',
};

function normalizeEn(questions) {
  return questions.map(q => ({
    ...q,
    difficulty: DIFFICULTY_MAP[q.difficulty] || q.difficulty,
    domain:     DOMAIN_MAP[q.domain]     || q.domain,
  }));
}

export default function loadAb900(language = 'pt') {
  if (language === 'en' && questionsEn.length > 0) return normalizeEn(questionsEn);
  return questionsPt;
}
