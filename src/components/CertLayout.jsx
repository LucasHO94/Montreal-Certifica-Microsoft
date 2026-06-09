import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import {
  BookOpen, LogOut, User, Settings, PieChart, Shield, Zap,
  TrendingUp, RefreshCw, Flame,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LanguageContext } from '../contexts/LanguageContext';
import { useCert } from '../contexts/CertContext';
import { CERTS_CONFIG } from '../data/certifications';
import { isAdminEmail } from '../lib/auth';
import LanguageSwitcher from './LanguageSwitcher';
import { useReview } from '../hooks/useReview';
import { useStreak } from '../hooks/useStreak';

export default function CertLayout({ session }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { certId: routeCertId } = useParams();
  const { t } = useContext(LanguageContext);
  const { certConfig, setCertId } = useCert();
  const [menuAberto, setMenuAberto] = useState(false);

  // Hooks sempre antes de qualquer return condicional (Rules of Hooks)
  const { queue } = useReview(session, routeCertId);
  const streak = useStreak(session, routeCertId);

  useEffect(() => {
    if (routeCertId && CERTS_CONFIG[routeCertId]) setCertId(routeCertId);
  }, [routeCertId, setCertId]);

  if (!session) return <Outlet />;
  if (!routeCertId || !CERTS_CONFIG[routeCertId]) return <Navigate to="/hub" replace />;
  if (!CERTS_CONFIG[routeCertId].available) return <Navigate to="/hub" replace />;

  const cert = certConfig || CERTS_CONFIG[routeCertId];

  const userEmail = session?.user?.email || 'Aluno';
  const isAdmin = isAdminEmail(userEmail);
  const userInitial = userEmail.charAt(0).toUpperCase();

  const handleLogout = async () => { await supabase.auth.signOut(); navigate('/'); };

  const base = `/cert/${routeCertId}`;
  const accentStyle = { color: cert.accentColor };

  const navLinks = [
    { path: `${base}/dashboard`, label: t('menu_dashboard', 'Dashboard'), icon: <PieChart size={18} /> },
    { path: `${base}/study`,     label: t('menu_study',     'Estudar'),   icon: <BookOpen size={18} /> },
    { path: `${base}/review`,    label: t('menu_review',    'Revisar'),   icon: <TrendingUp size={18} />, badge: queue.length },
    { path: `${base}/help`,      label: t('menu_help',      'Ajuda'),     icon: <Shield size={18} /> },
  ];
  if (isAdmin) navLinks.push({ path: '/admin', label: t('menu_admin', 'Gestor'), icon: <Zap size={18} /> });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">

      {/* NAVBAR DESKTOP */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          <div className="flex items-center gap-6">
            {/* Logo cert */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate(`${base}/dashboard`)}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform bg-gradient-to-br ${cert.gradient}`}>
                <span className="text-white text-[10px] font-black">{cert.name.replace('-', '')}</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="font-black text-sm text-slate-800 block">{cert.name}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.shortDescription}</span>
              </div>
            </div>

            {/* Links desktop */}
            <div className="hidden md:flex gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
              {navLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg flex items-center gap-2 transition-all relative ${
                    location.pathname === link.path
                      ? 'bg-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                  style={location.pathname === link.path ? accentStyle : undefined}
                >
                  {link.icon} {link.label}
                  {link.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Direita: switch + streak + lang + user */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => navigate('/hub')}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <RefreshCw size={13} /> {t('switch_cert', 'Trocar Cert.')}
            </button>

            {streak > 0 && (
              <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-xl">
                <Flame size={14} className="text-orange-500" fill="currentColor" />
                <span className="text-xs font-black text-orange-700">{streak}</span>
              </div>
            )}

            <div className="hidden sm:block"><LanguageSwitcher /></div>

            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg hover:scale-105 transition-transform shadow-md"
            >
              {userInitial}
            </button>

            {menuAberto && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setMenuAberto(false)} />
                <div className="absolute top-14 right-0 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-100 mb-2">
                    <p className="text-xs text-slate-400 uppercase font-black tracking-wider">{t('connected_account', 'Conta')}</p>
                    <p className="font-bold text-slate-800 truncate text-sm">{userEmail}</p>
                  </div>
                  <button onClick={() => { navigate('/hub'); setMenuAberto(false); }} className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-3">
                    <RefreshCw size={16} /> {t('switch_cert', 'Trocar Certificação')}
                  </button>
                  <button onClick={() => { navigate('/profile'); setMenuAberto(false); }} className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-3">
                    <User size={16} /> {t('menu_profile', 'Meu Perfil')}
                  </button>
                  <button onClick={() => { navigate('/settings'); setMenuAberto(false); }} className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-3">
                    <Settings size={16} /> {t('menu_settings', 'Configurações')}
                  </button>
                  <div className="h-px bg-slate-100 my-2" />
                  <button onClick={handleLogout} className="w-full text-left px-5 py-2.5 font-bold text-sm text-red-500 hover:bg-red-50 flex items-center gap-3">
                    <LogOut size={16} /> {t('menu_logout', 'Sair')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* TAB-BAR MOBILE */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 z-40 px-2 py-2 flex justify-around">
        {navLinks.slice(0, 4).map(link => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex flex-col items-center p-2 rounded-xl transition-all relative min-w-[56px] ${
              location.pathname === link.path ? '' : 'text-slate-400'
            }`}
            style={location.pathname === link.path ? accentStyle : undefined}
          >
            {link.icon}
            <span className="text-[10px] font-black mt-1">{link.label}</span>
            {link.badge > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {link.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
}
