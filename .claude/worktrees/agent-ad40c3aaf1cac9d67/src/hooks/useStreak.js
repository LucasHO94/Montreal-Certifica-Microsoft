import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useStreak(session, certId) {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!session?.user?.id || !certId) { setStreak(0); return; }
    let cancelled = false;
    const run = async () => {
      try {
        const { data, error } = await supabase
          .from('montreal_simulator_history')
          .select('created_at')
          .eq('user_id', session.user.id)
          .eq('cert_id', certId)
          .order('created_at', { ascending: false })
          .limit(120);
        if (error) throw error;
        if (cancelled) return;

        const days = new Set((data || []).map(r => new Date(r.created_at).toISOString().slice(0, 10)));
        let count = 0;
        const cursor = new Date();
        if (!days.has(cursor.toISOString().slice(0, 10))) cursor.setDate(cursor.getDate() - 1);
        while (days.has(cursor.toISOString().slice(0, 10))) {
          count++;
          cursor.setDate(cursor.getDate() - 1);
        }
        setStreak(count);
      } catch (e) {
        console.warn('[useStreak] falhou:', e);
        setStreak(0);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [session, certId]);

  return streak;
}

export default useStreak;
