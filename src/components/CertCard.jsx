import React from 'react';
import { ChevronRight, Lock } from 'lucide-react';

export default function CertCard({ cert, onClick, t }) {
  const disabled = !cert.available;
  return (
    <button
      onClick={() => !disabled && onClick(cert.id)}
      disabled={disabled}
      className={`relative overflow-hidden rounded-3xl shadow-lg border border-slate-200 text-left transition-all w-full
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-2xl cursor-pointer'}`}
      aria-label={`${cert.name} ${cert.fullName}`}
    >
      <div className={`bg-gradient-to-br ${cert.gradient} p-7 text-white relative`}>
        {disabled && (
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
            <Lock size={10} /> {t ? t('coming_soon') : 'Em breve'}
          </div>
        )}
        <p className="text-xs font-black uppercase tracking-widest text-white/80 mb-2">
          Microsoft Certified
        </p>
        <h3 className="text-3xl font-black tracking-tight mb-2">{cert.name}</h3>
        <p className="text-white/90 text-sm font-medium mb-6">{cert.fullName}</p>
        <div className="flex items-center justify-between border-t border-white/20 pt-4">
          <span className="text-xs font-bold text-white/80">{cert.shortDescription}</span>
          {!disabled && <ChevronRight size={18} className="text-white" />}
        </div>
      </div>
    </button>
  );
}
