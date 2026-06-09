import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { useCert } from '../contexts/CertContext';
import { CERTS_LIST } from '../data/certifications';
import { supabase } from '../lib/supabase';
import { LogOut } from 'lucide-react';
import CertCard from './CertCard';
import LanguageSwitcher from './LanguageSwitcher';

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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg">
              MS
            </div>
            <span className="font-black tracking-tight text-slate-800 hidden sm:block text-lg">
              {t('hub_brand', 'Certificações Microsoft')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md hover:scale-105 transition-transform"
              title={t('menu_profile', 'Meu Perfil')}
            >
              {userInitial}
            </button>
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-100 font-bold text-sm transition-colors"
            >
              <LogOut size={16} /> {t('menu_logout', 'Sair')}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            {t('cert_hub_title', 'Escolha sua Certificação Microsoft')}
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            {t('cert_hub_subtitle', 'Selecione uma certificação para começar a estudar. Cada simulado é independente — você pode alternar a qualquer momento.')}
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS_LIST.map(cert => (
            <CertCard key={cert.id} cert={cert} onClick={handleSelect} t={t} />
          ))}
        </section>
      </main>
    </div>
  );
}
