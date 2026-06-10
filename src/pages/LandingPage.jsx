import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Zap, Trophy, Shield, BarChart3, Loader2, MessageSquare, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SupportModal from '../components/SupportModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import montrealLogo from '../assets/montreal-logo.png';
import { isAuthorizedEmail, getDomainList } from '../lib/emailValidation';

export default function LandingPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      if (isSignUp) {
        // Validação de domínio corporativo
        if (!isAuthorizedEmail(email)) {
          throw new Error(`Email não autorizado. Use um dos domínios: ${getDomainList()}`);
        }

        // Validação de Senha (Mín 6 chars, Letras e Números)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
        if (!passwordRegex.test(password)) {
          throw new Error(t('auth_pass_req'));
        }

        // Gerar apelido aleatório inicial
        const randomNum = Math.floor(Math.random() * 9000) + 1000;
        const generatedNickname = `Aluno_${randomNum}`;

        const { data, error } = await supabase.auth.signUp({ 
            email, 
            password,
            options: {
                emailRedirectTo: window.location.origin + import.meta.env.BASE_URL,
                data: {
                    nickname: generatedNickname
                }
            }
        });
        if (error) throw error;

        // Se a confirmação de e-mail estiver desativada no Supabase, 'data.session' existirá
        if (data.session) {
            navigate('/hub');
        } else {
            alert(t('auth_signup_success'));
            setIsSignUp(false);
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/hub');
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-cyan-200">
      {/* Header Montreal */}
      <header className="bg-[#080A1F] text-white p-4 sticky top-0 z-50 border-b border-[#1A2444]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <img src={montrealLogo} alt="Montreal" className="w-9 h-9 rounded-lg object-cover" />
            <div className="leading-tight">
              <span className="text-base font-black tracking-widest text-white block">MONTREAL</span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Certificações Microsoft</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">{t('lp_nav_features', 'Funcionalidades')}</a>
            <a href="#depoimentos" className="hover:text-cyan-400 transition-colors">{t('lp_nav_reviews', 'Avaliações')}</a>
            <button
              onClick={() => setShowSupport(true)}
              className="hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} /> {t('lp_nav_support', 'Suporte')}
            </button>
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section — Dark Montreal */}
      <div className="relative overflow-hidden bg-[#080A1F] pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Ondas de fundo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(#60A5FA 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase mb-6">
              <Zap size={14} className="text-cyan-400" fill="currentColor" /> {t('lp_hero_badge', 'Plataforma de Alta Performance')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 text-white tracking-tight">
              {t('lp_hero_title_1', 'Aprove de Primeira nas ')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Certificações Microsoft</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl">
              {t('lp_hero_desc')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 font-bold text-slate-200 bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400"><CheckCircle2 size={20} /></div>
                <span>{t('lp_feat_1')}</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-200 bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><BarChart3 size={20} /></div>
                <span>{t('lp_feat_2')}</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-200 bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Shield size={20} /></div>
                <span>{t('lp_feat_3')}</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-200 bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <div className="bg-amber-500/20 p-2 rounded-lg text-amber-400"><Trophy size={20} /></div>
                <span>{t('lp_feat_4')}</span>
              </div>
            </div>
          </div>

          {/* Caixa de Autenticação */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20 animate-pulse"></div>
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-slate-100 relative">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                    {isSignUp ? t('lp_auth_create_title') : t('lp_auth_login_title')}
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                    {isSignUp ? t('lp_auth_create_desc') : t('lp_auth_login_desc')}
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-xl animate-shake">
                    ⚠️ {errorMsg}
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-5">
                {/* Aviso de domínios autorizados (apenas no signup) */}
                {isSignUp && (
                  <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl flex gap-3">
                    <AlertCircle size={18} className="text-cyan-600 shrink-0 mt-0.5" />
                    <div className="text-sm font-medium text-cyan-800">
                      <strong>Apenas colaboradores Montreal:</strong> Use um email corporativo (montreal.com.br, pcservice.com.br ou petrobras.com.br)
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{t('lp_auth_email_label')}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full p-4 bg-slate-50 border rounded-xl focus:ring-4 focus:bg-white outline-none transition-all font-medium text-slate-800 ${
                      isSignUp && email && !isAuthorizedEmail(email)
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-slate-200 focus:ring-cyan-100 focus:border-cyan-500'
                    }`}
                    placeholder={t('email_placeholder')}
                  />
                  {isSignUp && email && !isAuthorizedEmail(email) && (
                    <p className="text-xs text-red-600 font-bold mt-2 flex items-center gap-1">
                      <AlertCircle size={14} /> Email não autorizado para esta plataforma
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{t('lp_auth_pass_label')}</label>
                    <button
                      type="button"
                      onClick={() => navigate('/reset-password')}
                      className="text-xs text-cyan-600 font-bold hover:underline"
                    >
                      {t('lp_auth_forgot')}
                    </button>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                    placeholder="••••••••"
                  />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#080A1F] hover:bg-[#0D1229] text-white font-black text-lg py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl mt-6 disabled:opacity-50 border border-cyan-500/30"
                >
                  {loading ? <Loader2 className="animate-spin" /> : (isSignUp ? t('lp_auth_btn_signup') : t('lp_auth_btn_login'))} <ChevronRight size={22} />
                </button>
                <div className="text-center mt-6 pt-6 border-t border-slate-100">
                  <span className="text-sm text-slate-500 font-medium">
                    {isSignUp ? t('lp_auth_have_account') : t('lp_auth_no_account')}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-cyan-600 font-black hover:underline ml-1"
                  >
                    {isSignUp ? t('lp_auth_do_login') : t('lp_auth_do_signup')}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* Social Proof & Depoimentos */}
      <div id="depoimentos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">{t('lp_proof_title')}</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">{t('lp_proof_desc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex gap-1 mb-4 text-cyan-500"><BookOpen size={20} /><BookOpen size={20} /><BookOpen size={20} /></div>
              <p className="text-slate-700 font-medium italic mb-6">{t('lp_quote_1')}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#080A1F] rounded-full flex items-center justify-center font-bold text-cyan-400 border border-cyan-500/30">CJ</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Carlos Junior</div>
                  <div className="text-xs text-slate-500 font-medium">Consultor de TI — Montreal</div>
                </div>
              </div>
            </div>
            <div className="bg-[#080A1F] p-8 rounded-3xl border border-cyan-500/20 transform md:-translate-y-4 shadow-2xl">
              <div className="flex gap-1 mb-4 text-cyan-400"><TrendingUp size={20} /><TrendingUp size={20} /><TrendingUp size={20} /></div>
              <p className="text-slate-300 font-medium italic mb-6">{t('lp_quote_2')}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center font-bold text-cyan-400">MT</div>
                <div>
                  <div className="font-bold text-white text-sm">Mariana Telles</div>
                  <div className="text-xs text-slate-400 font-medium">Analista de Sistemas — Montreal</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex gap-1 mb-4 text-cyan-500"><BookOpen size={20} /><BookOpen size={20} /><BookOpen size={20} /></div>
              <p className="text-slate-700 font-medium italic mb-6">{t('lp_quote_3')}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#080A1F] rounded-full flex items-center justify-center font-bold text-cyan-400 border border-cyan-500/30">RD</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Rafael Dantas</div>
                  <div className="text-xs text-slate-500 font-medium">Desenvolvedor — Montreal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#080A1F] text-slate-500 py-12 text-center text-sm font-medium border-t border-[#1A2444]">
        <div className="flex justify-center mb-6">
          <img src={montrealLogo} alt="Montreal" className="w-10 h-10 rounded-lg opacity-80" />
        </div>
        <p className="text-slate-400">© {new Date().getFullYear()} Montreal Informática. {t('lp_footer_disclaimer')}</p>
        <div className="mt-4 flex justify-center gap-6 text-slate-600">
          <button onClick={() => setShowSupport(true)} className="hover:text-cyan-400 flex items-center gap-2 transition-colors">
            <MessageSquare size={14} /> {t('lp_nav_support', 'Fale Conosco & Suporte')}
          </button>
          <span>|</span>
          <p>{t('lp_footer_no_affil')}</p>
        </div>
      </footer>

      {/* Modal de Suporte */}
      <SupportModal 
        isOpen={showSupport} 
        onClose={() => setShowSupport(false)} 
        userSession={null} 
      />
    </div>
  );
}
