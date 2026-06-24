import React, { useContext, useState } from 'react';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useCert } from '../contexts/CertContext';
import { countQuestions } from '../data/questions';

// Certs com tradução EN completa (>= 50 questões)
const CERTS_WITH_EN = ['pl200', 'ab900'];

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { certConfig } = useCert();
  const [showTooltip, setShowTooltip] = useState(false);

  // Fora de uma cert (ex: hub, landing) — mostrar normalmente
  const certId = certConfig?.id;
  const hasEnTranslation = !certId || CERTS_WITH_EN.includes(certId);

  const handleClick = () => {
    if (!hasEnTranslation && language === 'pt') {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }
    toggleLanguage();
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        title={!hasEnTranslation ? 'Tradução EN em breve para esta certificação' : ''}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-bold shadow-sm
          ${language === 'pt'
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            : 'bg-white/20 border-white/30 text-white hover:bg-white/25'
          } ${!hasEnTranslation ? 'opacity-60' : ''}`}
      >
        <Globe size={16} />
        <span className="uppercase tracking-wider">
          {language === 'pt' ? 'PT-BR' : 'EN-US'}
        </span>
      </button>

      {showTooltip && (
        <div className="absolute top-10 right-0 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap z-50 border border-white/10">
          🌐 Tradução EN em breve
        </div>
      )}
    </div>
  );
}
