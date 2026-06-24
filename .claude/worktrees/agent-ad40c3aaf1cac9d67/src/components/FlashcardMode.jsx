import React, { useState } from 'react';
import { RotateCcw, Check, X, BookOpen } from 'lucide-react';

export default function FlashcardMode({ questions, onFinish, session, onAnswer }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  const question = questions[currentIndex];

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = async (isCorrect) => {
    if (onAnswer) await onAnswer(question.id, isCorrect);

    setAnimatingOut(true);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setIsFlipped(false);
        setAnimatingOut(false);
      } else {
        onFinish();
      }
    }, 300);
  };

  if (!question) return null;

  const correctOptionText = question.options?.[question.correctAnswer] || question.explanation?.respostaCerta || '';

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-slate-900 min-h-[calc(100vh-64px)]">

      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <span className="text-slate-400 font-black tracking-widest text-xs uppercase">
          Flashcards • {currentIndex + 1} / {questions.length}
        </span>
        <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs font-bold border border-slate-700">
          {question.domain}
        </span>
      </div>

      <div
        className={`relative w-full max-w-2xl aspect-square md:aspect-video cursor-pointer perspective-1000 transition-transform duration-300 ${animatingOut ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
        onClick={!isFlipped ? handleFlip : undefined}
      >
        <div className={`w-full h-full preserve-3d transition-transform duration-700 relative ${isFlipped ? 'rotate-y-180' : ''}`}>

          {/* Frente */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border-2 border-slate-100 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-relaxed max-w-xl">
              {question.text}
            </h3>
            <div className="mt-auto pt-8 flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest animate-pulse">
              <RotateCcw size={16} /> Toque para virar
            </div>
          </div>

          {/* Verso */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-50 rounded-[3rem] shadow-2xl p-8 md:p-12 border-2 border-slate-200 flex flex-col overflow-y-auto">
            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-block bg-green-100 text-green-700 font-black text-xs uppercase tracking-widest px-3 py-1 rounded-lg w-max mb-6">
                Resposta Correta
              </div>
              <p className="text-xl md:text-2xl font-black text-slate-800 mb-6 border-l-4 border-green-500 pl-4 py-1">
                {correctOptionText}
              </p>
              {question.explanation?.papoReto && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-slate-600 font-medium leading-relaxed shadow-sm text-sm md:text-base">
                  <strong className="text-slate-800">Explicação:</strong> {question.explanation.papoReto}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full max-w-2xl mt-8 transition-all duration-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(false); }}
            className="flex-1 bg-white hover:bg-red-50 text-red-600 border-2 border-red-100 hover:border-red-300 font-black py-5 rounded-2xl shadow-lg transition-all flex flex-col items-center gap-1 group"
          >
            <X size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs uppercase tracking-widest">Errei (Revisar Depois)</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(true); }}
            className="flex-1 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex flex-col items-center gap-1 group"
          >
            <Check size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs uppercase tracking-widest text-green-100">Acertei (Fácil)</span>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
