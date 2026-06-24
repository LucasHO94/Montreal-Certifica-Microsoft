import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { useCert } from '../contexts/CertContext';
import { CERTS_LIST } from '../data/certifications';
import { supabase } from '../lib/supabase';
import { LogOut } from 'lucide-react';
import CertCard from './CertCard';
import LanguageSwitcher from './LanguageSwitcher';
import montrealLogo from '../assets/montreal-logo.png';

export default function CertHub({ session }) {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const { clearCert } = useCert();

  useEffect(() => { clearCert(); }, [clearCert]);

  if (!session) { navigate('/'); return null; }

  const userEmail = session?.user?.email || 'Aluno';
  const userInitial = userEmail.charAt(0).toUpperCase();

  const handleSelect = (certId) => navigate(`/cert/${certId}/dashboard`);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#080A1F]">
      <header className="bg-[#080A1F] border-b border-[#1A2444] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={montrealLogo} alt="Montreal" className="w-9 h-9 rounded-lg object-cover" />
            <div className="leading-tight hidden sm:block">
              <span className="font-black tracking-widest text-white text-sm block">MONTREAL</span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Certificações Microsoft</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 bg-[#1A2444] text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md hover:scale-105 transition-transform border border-cyan-500/20"
              title={t('menu_profile', 'Meu Perfil')}
            >
              {userInitial}
            </button>
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 font-bold text-sm transition-colors"
            >
              <LogOut size={16} /> {t('menu_logout', 'Sair')}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase mb-6">
            Plataforma Corporativa Montreal
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t('cert_hub_title', 'Escolha sua Certificação Microsoft')}
          </h1>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            {t('cert_hub_subtitle', 'Selecione uma certificação para começar a estudar. Cada simulado é independente — você pode alternar a qualquer momento.')}
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS_LIST.map(cert => (
            <CertCard key={cert.id} cert={cert} onClick={handleSelect} t={t} />
          ))}
        </section>
      </main>
    </div>
  );
}
