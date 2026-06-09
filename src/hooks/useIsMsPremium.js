import { useMemo } from 'react';
import { isAdminEmail } from '../lib/auth';

/**
 * FASE DE LANÇAMENTO: tudo gratuito. Retorna true para todos os logados.
 * Para reativar paywall: remova o "return true" abaixo.
 */
export function useIsMsPremium(session, profile) {
  return useMemo(() => {
    if (!session) return false;

    // ------- RELEASE OVERRIDE (tudo grátis) -------
    return true;
    // ----------------------------------------------

    // eslint-disable-next-line no-unreachable
    return (
      profile?.ms_is_premium === true ||
      session?.user?.user_metadata?.isPremium === true ||
      isAdminEmail(session?.user?.email)
    );
  }, [session, profile]);
}

export default useIsMsPremium;
