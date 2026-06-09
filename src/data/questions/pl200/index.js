import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

export default function loadPl200(language = 'pt') {
  return language === 'en' ? questionsEn : questionsPt;
}
