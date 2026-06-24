import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { CERTS_CONFIG, getCert } from '../data/certifications';

const SESSION_KEY = 'ms_active_cert';

export const CertContext = createContext(null);

export const useCert = () => {
  const ctx = useContext(CertContext);
  if (!ctx) throw new Error('useCert deve ser usado dentro de <CertProvider>.');
  return ctx;
};

export const CertProvider = ({ children }) => {
  const [certId, setCertIdState] = useState(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY);
      return stored && CERTS_CONFIG[stored] ? stored : null;
    } catch { return null; }
  });

  useEffect(() => {
    try {
      if (certId) sessionStorage.setItem(SESSION_KEY, certId);
      else sessionStorage.removeItem(SESSION_KEY);
    } catch { /* sessionStorage indisponível */ }
  }, [certId]);

  const setCertId = useCallback((newId) => {
    if (!newId) { setCertIdState(null); return; }
    if (!CERTS_CONFIG[newId]) { console.warn(`[CertContext] cert "${newId}" não encontrada.`); return; }
    setCertIdState(newId);
  }, []);

  const clearCert = useCallback(() => setCertIdState(null), []);
  const certConfig = useMemo(() => getCert(certId), [certId]);

  const value = useMemo(() => ({ certId, certConfig, setCertId, clearCert }), [certId, certConfig, setCertId, clearCert]);

  return <CertContext.Provider value={value}>{children}</CertContext.Provider>;
};

export default CertProvider;
