import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export function useReview(session, certId) {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQueue = useCallback(async () => {
    if (!session?.user?.id || !certId) { setQueue([]); setLoading(false); return; }
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('montreal_review_queue')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('cert_id', certId)
        .lte('next_review_date', new Date().toISOString())
        .order('next_review_date', { ascending: true });
      if (error) throw error;
      setQueue(data || []);
    } catch (e) {
      console.error('[useReview] erro ao buscar fila:', e);
      setQueue([]);
    } finally {
      setLoading(false);
    }
  }, [session, certId]);

  useEffect(() => { fetchQueue(); }, [fetchQueue]);

  const processReview = useCallback(async (questionId, isCorrect) => {
    if (!session?.user?.id || !certId) return;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + (isCorrect ? 3 : 1));
    try {
      await supabase.from('montreal_review_queue').upsert({
        user_id: session.user.id,
        cert_id: certId,
        question_id: questionId,
        next_review_date: nextDate.toISOString(),
        status: isCorrect ? 'reviewing' : 'learning',
      }, { onConflict: 'user_id, cert_id, question_id' });
      setQueue(prev => prev.filter(item => item.question_id !== questionId));
    } catch (e) {
      console.error('[useReview] erro ao atualizar fila:', e);
    }
  }, [session, certId]);

  const addToQueue = useCallback(async (questionId) => {
    if (!session?.user?.id || !certId) return;
    const next = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    try {
      await supabase.from('montreal_review_queue').upsert({
        user_id: session.user.id,
        cert_id: certId,
        question_id: questionId,
        next_review_date: next,
        status: 'learning',
      }, { onConflict: 'user_id, cert_id, question_id' });
    } catch (e) {
      console.warn('[useReview] addToQueue falhou:', e);
    }
  }, [session, certId]);

  return { queue, loading, processReview, addToQueue, refreshQueue: fetchQueue };
}

export default useReview;
