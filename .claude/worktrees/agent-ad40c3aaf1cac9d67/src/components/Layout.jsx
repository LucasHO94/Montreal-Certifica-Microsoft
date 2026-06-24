import React, { useContext } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { PieChart, BookOpen, User } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Layout({ session }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useContext(LanguageContext);

  if (!session) return <Outlet />;

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: <PieChart size={20} /> },
    { path: '/study',     label: 'Estudar',   icon: <BookOpen size={20} /> },
    { path: '/profile',   label: 'Perfil',    icon: <User size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">

      {/* CONTEÚDO DAS ROTAS — cada página renderiza sua própria navbar desktop */}
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* TAB-BAR MOBILE (visível somente em telas < md) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 z-40 px-2 py-2 flex justify-around safe-area-pb">
        {navLinks.map(link => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex flex-col items-center p-2 rounded-xl transition-all min-w-[64px] ${
              location.pathname === link.path
                ? 'text-blue-600'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {link.icon}
            <span className="text-[10px] font-black mt-1">{link.label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}
