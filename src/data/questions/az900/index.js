import { questions as questionsPt } from './pt.js';
import { questions as questionsEn } from './en.js';

export default function loadAz900(language = 'pt') {
  return language === 'en' ? questionsEn : questionsPt;
}
