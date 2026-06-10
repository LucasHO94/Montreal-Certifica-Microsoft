import React from 'react';
import { ChevronRight, Lock } from 'lucide-react';

export default function CertCard({ cert, onClick, t }) {
  const disabled = !cert.available;

  return (
    <button
      onClick={() => !disabled && onClick(cert.id)}
      disabled={disabled}
      className={`relative overflow-hidden rounded-3xl text-left transition-all w-full h-full min-h-[280px]
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-2xl cursor-pointer'}`}
      aria-label={`${cert.name} ${cert.fullName}`}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl" />

      {/* Colored accent strip top */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">

        {/* Header com badge */}
        <div>
          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
              {cert.name.substring(0, 2)}
            </div>
            {disabled && (
              <div className="bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 text-white/80 border border-white/20">
                <Lock size={11} /> {t ? t('coming_soon') : 'Em breve'}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{cert.name}</h3>
          <p className="text-white/70 text-sm font-medium mb-1">{cert.fullName}</p>
          <p className="text-white/60 text-xs font-medium">{cert.shortDescription}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-[11px] font-black text-white/50 uppercase tracking-widest">
            {cert.questionCount} questões
          </span>
          {!disabled && (
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ChevronRight size={16} className="text-white/70" />
            </div>
          )}
        </div>
      </div>

      {/* Overlay gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none rounded-3xl" />
    </button>
  );
}
