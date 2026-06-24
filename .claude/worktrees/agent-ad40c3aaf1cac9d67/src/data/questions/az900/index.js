import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

export default function loadAz900(language = 'pt') {
  if (language === 'en' && questionsEn.length >= 50) return questionsEn;
  return questionsPt;
}
