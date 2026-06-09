import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layers, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useReview } from '../hooks/useReview';
import { getQuestions } from '../data/questions';
import { getCert } from '../data/certifications';
import FlashcardMode from '../components/FlashcardMode';

export default function Review({ session }) {
  const navigate = useNavigate();
  const { certId } = useParams();
  const certConfig = getCert(certId);
  const { queue, loading, processReview, refreshQueue } = useReview(session, certId);
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (queue.length > 0) {
      const allQ = getQuestions(certId, 'pt');
      const mapped = queue.map(q => allQ.find(qd => qd.id === q.question_id)).filter(Boolean);
      setReviewQuestions(mapped);
    } else {
      setReviewQuestions([]);
    }
  }, [queue, certId]);

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        <p className="font-black text-slate-400 animate-pulse uppercase tracking-[0.2em] text-xs">Buscando Fila de Revisão...</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Revisão Concluída!</h1>
        <p className="text-slate-500 font-medium mb-8">Você zerou sua fila de repetição espaçada por hoje. Excelente trabalho!</p>
        <button
          onClick={() => { setFinished(false); setStarted(false); refreshQueue(); navigate(`/cert/${certId}/dashboard`); }}
          className="bg-slate-900 hover:bg-black text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all"
        >
          VOLTAR AO PAINEL
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className={`w-24 h-24 bg-gradient-to-br ${certConfig?.gradient || 'from-blue-600 to-blue-800'} text-white rounded-3xl flex items-center justify-center mx-auto mb-6`}>
          <Layers size={40} />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Revisão Inteligente</h1>

        {reviewQuestions.length === 0 ? (
          <>
            <p className="text-slate-500 font-medium mb-8">Nenhuma questão na fila de revisão para hoje. Continue praticando para popular sua fila!</p>
            <button
              onClick={() => navigate(`/cert/${certId}/study`)}
              className={`bg-gradient-to-br ${certConfig?.gradient || 'from-blue-600 to-blue-800'} text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all`}
            >
              IR PARA ESTUDAR
            </button>
          </>
        ) : (
          <>
            <p className="text-slate-500 font-medium mb-4">
              Você tem <strong className="text-slate-800">{reviewQuestions.length}</strong> questão(ões) para revisar hoje.
            </p>
            <p className="text-slate-400 text-sm font-medium mb-8">Questões erradas retornam amanhã. Questões acertadas voltam em 3 dias.</p>
            <button
              onClick={() => setStarted(true)}
              className={`bg-gradient-to-br ${certConfig?.gradient || 'from-blue-600 to-blue-800'} text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all hover:scale-[1.02]`}
            >
              INICIAR REVISÃO ({reviewQuestions.length} questões)
            </button>
          </>
        )}

        <button
          onClick={() => navigate(`/cert/${certId}/dashboard`)}
          className="flex items-center gap-2 text-slate-400 font-bold mx-auto mt-6 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft size={16} /> Voltar
        </button>
      </div>
    );
  }

  return (
    <FlashcardMode
      questions={reviewQuestions}
      onFinish={() => setFinished(true)}
      session={session}
      onAnswer={async (questionId, isCorrect) => {
        await processReview(questionId, isCorrect);
      }}
    />
  );
}
