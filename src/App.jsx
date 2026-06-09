import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CertHub from './components/CertHub';
import CertLayout from './components/CertLayout';
import { supabase } from './lib/supabase';
import { LanguageProvider } from './contexts/LanguageContext';
import { CertProvider } from './contexts/CertContext';

const Dashboard     = lazy(() => import('./pages/Dashboard'));
const Study         = lazy(() => import('./pages/Study'));
const Review        = lazy(() => import('./pages/Review'));
const Help          = lazy(() => import('./pages/Help'));
const Simulator     = lazy(() => import('./pages/Simulator'));
const Profile       = lazy(() => import('./pages/Profile'));
const Settings      = lazy(() => import('./pages/Settings'));
const Admin         = lazy(() => import('./pages/Admin'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const Loading = () => (
  <div className="h-screen bg-slate-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent" />
  </div>
);

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          if (error.message?.includes('refresh_token_not_found') || error.message?.includes('Invalid Refresh Token')) {
            await supabase.auth.signOut();
            setSession(null);
          } else throw error;
        } else {
          setSession(session);
        }
      } catch (err) {
        console.error('Erro ao carregar sessão:', err);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, sess) => {
      setSession(sess);
      if (event === 'TOKEN_REFRESH_FAILED') { await supabase.auth.signOut(); setSession(null); }
      if (event === 'PASSWORD_RECOVERY') localStorage.setItem('sb-recovery-mode', 'true');
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <Loading />;

  return (
    <LanguageProvider>
      <CertProvider>
        <BrowserRouter basename="/certificacoes-microsoft">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={!session ? <LandingPage setMockSession={setSession} /> : <Navigate to="/hub" replace />}
              />
              <Route path="/reset-password" element={<ResetPassword />} />

              <Route
                path="/hub"
                element={session ? <CertHub session={session} /> : <Navigate to="/" replace />}
              />

              <Route path="/profile"  element={session ? <Profile  session={session} /> : <Navigate to="/" replace />} />
              <Route path="/settings" element={session ? <Settings session={session} /> : <Navigate to="/" replace />} />
              <Route path="/admin"    element={session ? <Admin    session={session} /> : <Navigate to="/" replace />} />

              {/* Simulator fora do CertLayout (full-screen) */}
              <Route
                path="/cert/:certId/simulator/:type"
                element={session ? <Simulator session={session} /> : <Navigate to="/" replace />}
              />

              {/* Páginas dentro do CertLayout */}
              <Route element={<CertLayout session={session} />}>
                <Route path="/cert/:certId/dashboard" element={session ? <Dashboard session={session} /> : <Navigate to="/" replace />} />
                <Route path="/cert/:certId/study"     element={session ? <Study     session={session} /> : <Navigate to="/" replace />} />
                <Route path="/cert/:certId/review"    element={session ? <Review    session={session} /> : <Navigate to="/" replace />} />
                <Route path="/cert/:certId/help"      element={session ? <Help      session={session} /> : <Navigate to="/" replace />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CertProvider>
    </LanguageProvider>
  );
}
