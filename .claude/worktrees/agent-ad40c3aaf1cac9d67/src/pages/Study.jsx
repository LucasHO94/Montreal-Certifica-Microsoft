import React, { useState, useMemo, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen, Clock, Layers, ChevronRight, Zap, TrendingUp } from 'lucide-react';
import { getQuestions, countQuestions } from '../data/questions';
import { LanguageContext } from '../contexts/LanguageContext';
import { getCert } from '../data/certifications';

export default function Study({ session }) {
  const navigate = useNavigate();
  const { certId } = useParams();
  const { t, language } = useContext(LanguageContext);
  const certConfig = getCert(certId);
  const [showDiffModal, setShowDiffModal] = useState(false);

  if (!certConfig) { navigate('/hub'); return null; }

  const startSim = (type, mode = 'tutorial', domain = '') => {
    let url = `/cert/${certId}/simulator/${type}?mode=${mode}`;
    if (domain) url += `&domain=${encodeURIComponent(domain)}`;
    navigate(url);
  };

  const studyModes = [
    {
      id: 'free', title: t('study_free_title', 'Simulado Livre'),
      desc: t('study_free_desc', 'Questões aleatórias com feedback imediato após cada resposta.'),
      icon: <BookOpen size={24} />, color: certConfig.accentText, bg: 'bg-blue-50',
      action: () => setShowDiffModal(true),
    },
    {
      id: 'exam', title: t('study_exam_title', 'Prova Real'),
      desc: t('study_exam_desc', 'Formato oficial Microsoft. Cronômetro real e nota de corte 700.'),
      icon: <Clock size={24} />, color: 'text-amber-600', bg: 'bg-amber-50',
      action: () => startSim('exam', 'exam'),
    },
    {
      id: 'flashcard', title: t('study_flash_title', 'Flashcards'),
      desc: t('study_flash_desc', 'Memorização ativa. Vire a carta para ver a resposta e a explicação.'),
      icon: <Zap size={24} />, color: 'text-purple-600', bg: 'bg-purple-50',
      action: () => startSim('flashcard', 'flashcard'),
    },
    {
      id: 'review', title: t('study_review_title', 'Revisão Inteligente'),
      desc: t('study_review_desc', 'Repetição espaçada das questões que você errou.'),
      icon: <TrendingUp size={24} />, color: 'text-emerald-600', bg: 'bg-emerald-50',
      action: () => navigate(`/cert/${certId}/review`),
    },
  ];

  const domainTopics = useMemo(() => {
    const counts = {};
    getQuestions(certId, language).forEach(q => { if (q.domain) counts[q.domain] = (counts[q.domain] || 0) + 1; });
    return Object.entries(counts).map(([domain, count]) => ({ domain, count })).sort((a, b) => b.count - a.count);
  }, [certId, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10 pb-24 md:pb-8">
      <div>
        <h1 className="text-3xl font-black text-slate-800 mb-2 flex items-center gap-3">
          <BookOpen className={certConfig.accentText} /> {t('menu_study', 'Estudar')} — {certConfig.name}
        </h1>
        <p className="text-slate-500 font-medium">
          {certConfig.fullName} · {countQuestions(certId, language)} questões disponíveis
        </p>
      </div>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {studyModes.map(mode => (
            <button key={mode.id} onClick={mode.action}
              className="p-6 rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col h-full group border-slate-200 hover:border-slate-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${mode.bg} ${mode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {mode.icon}
              </div>
              <h3 className="font-black text-slate-800 text-base mb-2">{mode.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{mode.desc}</p>
              <div className={`font-bold text-sm flex items-center gap-1 mt-4 ${mode.color}`}>
                {t('start', 'Iniciar')} <ChevronRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {domainTopics.length > 0 && (
        <section>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-black text-slate-800 mb-2 flex items-center gap-3">
              <Layers className={certConfig.accentText} /> {t('study_select_domain', 'Estudar por Domínio')}
            </h2>
            <p className="text-slate-500 font-medium mb-6 text-sm">Foque em um domínio específico de <strong>{certConfig.name}</strong>.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {domainTopics.map(({ domain, count }) => (
                <button key={domain} onClick={() => startSim('topic', 'tutorial', domain)}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all text-left group"
                >
                  <span className="font-bold text-slate-700 text-sm truncate pr-2">{domain}</span>
                  <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2 py-1 rounded-lg shrink-0">{count} q</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {showDiffModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-black text-slate-800 mb-2">Nível de Dificuldade</h3>
            <p className="text-slate-500 font-medium mb-6">Escolha o nível do simulado livre.</p>
            <div className="space-y-3 mb-8">
              <button onClick={() => { setShowDiffModal(false); startSim('free', 'iniciante'); }} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <div className="font-black text-slate-700 text-lg">🌱 Iniciante</div>
                <div className="font-medium text-xs text-slate-500 mt-1">Fundamentos e teoria básica.</div>
              </button>
              <button onClick={() => { setShowDiffModal(false); startSim('free', 'intermediario'); }} className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <div className="font-black text-slate-700 text-lg">🚀 Intermediário</div>
                <div className="font-medium text-xs text-slate-500 mt-1">Conceitos práticos e aplicados.</div>
              </button>
              <button onClick={() => { setShowDiffModal(false); startSim('free', 'avancado'); }} className="w-full text-left p-4 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all">
                <div className="font-black text-slate-800 text-lg">🔥 Avançado <span className="text-[10px] text-green-600 ml-2">(Padrão Ouro)</span></div>
                <div className="font-medium text-xs text-slate-600 mt-1">Questões complexas no padrão da prova real.</div>
              </button>
            </div>
            <button onClick={() => setShowDiffModal(false)} className="w-full py-4 text-slate-500 font-black hover:bg-slate-50 rounded-2xl transition-colors">CANCELAR</button>
          </div>
        </div>
      )}
    </div>
  );
}
