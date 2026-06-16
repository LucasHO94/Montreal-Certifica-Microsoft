import loadAz900 from './az900/index.js';
import loadPl200 from './pl200/index.js';
import loadAb900 from './ab900/index.js';
import loadAi900 from './ai900/index.js';
import loadMs700 from './ms700/index.js';
import loadMs721 from './ms721/index.js';
import loadMo101 from './mo101/index.js';
import loadMo201 from './mo201/index.js';
import loadMo500 from './mo500/index.js';

const LOADERS = {
  az900: loadAz900,
  pl200: loadPl200,
  ab900: loadAb900,
  ai900: loadAi900,
  ms700: loadMs700,
  ms721: loadMs721,
  mo101: loadMo101,
  mo201: loadMo201,
  mo500: loadMo500,
};

const CACHE = new Map();

export function getQuestions(certId, language = 'pt') {
  const key = `${certId}:${language}`;
  if (CACHE.has(key)) return CACHE.get(key);
  const loader = LOADERS[certId];
  if (!loader) { CACHE.set(key, []); return []; }
  const data = loader(language) || [];
  CACHE.set(key, data);
  return data;
}

export function countQuestions(certId, language = 'pt') {
  return getQuestions(certId, language).length;
}

export function getQuestionsByDomain(certId, domain, language = 'pt') {
  return getQuestions(certId, language).filter(q => q.domain === domain);
}

export function sampleQuestionsWeighted(certId, totalCount, domains, language = 'pt') {
  const all = getQuestions(certId, language);
  if (!all.length || !domains || !domains.length) return shuffle(all).slice(0, totalCount);

  const result = [];
  domains.forEach(d => {
    const slice = Math.round(totalCount * (d.weight || 0));
    const pool = all.filter(q => q.domain === d.name);
    result.push(...shuffle(pool).slice(0, slice));
  });

  while (result.length < totalCount && result.length < all.length) {
    const candidate = all[Math.floor(Math.random() * all.length)];
    if (!result.find(q => q.id === candidate.id)) result.push(candidate);
  }
  return result.slice(0, totalCount);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
