import { questions as ptQuestions } from './pt.js';
import { questions as enQuestions } from './en.js';

export default function loadQuestions(lang = 'pt') {
  return lang === 'en' ? enQuestions : ptQuestions;
}
