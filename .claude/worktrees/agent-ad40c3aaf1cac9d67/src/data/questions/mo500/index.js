import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

export default function loadMo500(language = 'pt') {
  if (language === 'en' && questionsEn.length > 0) return questionsEn;
  return questionsPt;
}
