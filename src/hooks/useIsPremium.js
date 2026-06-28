import { useMemo } from 'react';
import { isAdminEmail } from '../lib/auth';

export function useIsPremium(session, profile) {
  return useMemo(
    () =>
      profile?.montreal_is_premium ||
      session?.user?.user_metadata?.isPremium ||
      isAdminEmail(session?.user?.email),
    [profile, session]
  );
}
