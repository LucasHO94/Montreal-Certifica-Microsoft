import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

const DIFFICULTY_MAP = {
  beginner:     'iniciante',
  intermediate: 'intermediario',
  advanced:     'avancado',
};

function normalizeEn(questions) {
  return questions.map(q => ({
    ...q,
    difficulty: DIFFICULTY_MAP[q.difficulty] || q.difficulty,
  }));
}

export default function loadPl200(language = 'pt') {
  if (language === 'en' && questionsEn.length > 0) return normalizeEn(questionsEn);
  return questionsPt;
}
