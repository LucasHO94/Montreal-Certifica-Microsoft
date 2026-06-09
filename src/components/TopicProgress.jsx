import React, { useMemo, useContext } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { getQuestions } from '../data/questions';

const TopicProgress = ({ history, onStartTopic, certConfig }) => {
  const { t, language } = useContext(LanguageContext);
  if (!certConfig) return null;
  const DOMAINS = (certConfig.domains || []).map(d => d.name);

  const domainTotals = useMemo(() => {
    const totals = {};
    getQuestions(certConfig.id, language).forEach(q => {
      if (!q.domain) return;
      totals[q.domain] = (totals[q.domain] || 0) + 1;
    });
    return totals;
  }, [certConfig.id, language]);

  const domainProgress = useMemo(() => {
    if (!history || history.length === 0) return {};
    const progress = {};
    history.forEach(h => {
      if (!h.domain_stats) return;
      Object.entries(h.domain_stats).forEach(([domain, stats]) => {
        if (!progress[domain]) progress[domain] = { correct: 0, total: 0 };
        progress[domain].correct += stats.correct || 0;
        progress[domain].total += stats.total || 0;
      });
    });
    return progress;
  }, [history]);

  const topicList = useMemo(() => DOMAINS.map(domain => {
    const totalAvailable = domainTotals[domain] || 0;
    const prog = domainProgress[domain];
    const answered = prog?.total || 0;
    const correct  = prog?.correct || 0;
    const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const progressPct = totalAvailable > 0 ? Math.min((answered / totalAvailable) * 100, 100) : 0;

    let status = t ? t('topic_not_started') : 'Ainda não iniciado';
    let statusColor = 'text-slate-400';
    let barColor = 'bg-slate-300';

    if (answered > 0) {
      if (rate >= 80) {
        status = `${t ? t('topic_mastered') : 'Dominado'} (${rate}%)`;
        statusColor = 'text-emerald-600'; barColor = 'bg-emerald-500';
      } else if (rate >= 50) {
        status = `${t ? t('topic_in_progress') : 'Em progresso'} (${rate}%)`;
        statusColor = 'text-amber-600'; barColor = 'bg-amber-400';
      } else {
        status = `${t ? t('topic_needs_review') : 'Precisa reforço'} (${rate}%)`;
        statusColor = 'text-red-500'; barColor = 'bg-red-400';
      }
    }
    return { domain, totalAvailable, answered, progressPct, status, statusColor, barColor };
  }), [domainTotals, domainProgress, DOMAINS, t]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-black text-slate-800 flex items-center gap-3 mb-4">
        <BookOpen className={certConfig.accentText || 'text-blue-600'} size={22} />
        {t ? t('topic_progress_title') : 'Progresso por Domínio'} — {certConfig.name}
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {topicList.map(({ domain, totalAvailable, answered, progressPct, status, statusColor, barColor }) => (
          <button
            key={domain}
            onClick={() => onStartTopic && onStartTopic(domain)}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-left group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 pr-2">
                <p className="font-black text-slate-800 text-sm leading-tight">{domain}</p>
                <p className={`text-[11px] font-bold mt-0.5 ${statusColor}`}>{status}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">{answered}/{totalAvailable}</span>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${progressPct}%` }} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicProgress;
