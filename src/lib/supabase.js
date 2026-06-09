import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are missing or default placeholders
const isMockMode = !supabaseUrl || 
                   supabaseUrl.includes('YOUR_MS_PROJECT_ID') || 
                   supabaseUrl === '' ||
                   !supabaseAnonKey || 
                   supabaseAnonKey.includes('YOUR_MS_ANON_KEY') ||
                   supabaseAnonKey === '';

// --- MOCK SUPABASE IMPLEMENTATION FOR SEAMLESS LOCAL DEV ---
const authListeners = new Set();

class MockQueryBuilder {
  constructor(table) {
    this.table = table;
    this.filters = [];
    this.orderConfig = null;
  }

  select(fields = '*') {
    return this;
  }

  eq(column, value) {
    this.filters.push({ column, value });
    return this;
  }

  order(column, options = {}) {
    this.orderConfig = { column, ...options };
    return this;
  }

  single() {
    return this.then(
      (result) => {
        if (result.error) return { data: null, error: result.error };
        return { data: Array.isArray(result.data) ? result.data[0] || null : result.data, error: null };
      }
    );
  }

  insert(data) {
    const tableData = JSON.parse(localStorage.getItem(`sb-mock-db-${this.table}`) || '[]');
    const itemsToInsert = Array.isArray(data) ? data : [data];
    const newItems = itemsToInsert.map(item => ({
      id: Math.random().toString(36).substring(2, 11),
      created_at: new Date().toISOString(),
      ...item
    }));
    localStorage.setItem(`sb-mock-db-${this.table}`, JSON.stringify([...tableData, ...newItems]));
    
    if (this.table === 'profiles') {
      const currentProfile = JSON.parse(localStorage.getItem('sb-mock-profile') || '{}');
      localStorage.setItem('sb-mock-profile', JSON.stringify({ ...currentProfile, ...newItems[0] }));
    }

    return Promise.resolve({ data: Array.isArray(data) ? newItems : newItems[0], error: null });
  }

  update(data) {
    if (this.table === 'profiles') {
      const currentProfile = JSON.parse(localStorage.getItem('sb-mock-profile') || '{}');
      const updated = { ...currentProfile, ...data };
      localStorage.setItem('sb-mock-profile', JSON.stringify(updated));
      return Promise.resolve({ data: updated, error: null });
    }
    return Promise.resolve({ data, error: null });
  }

  then(onfulfilled, onrejected) {
    try {
      let data = [];
      if (this.table === 'profiles') {
        const profile = JSON.parse(localStorage.getItem('sb-mock-profile') || '{}');
        data = Object.keys(profile).length > 0 ? [profile] : [];
      } else {
        data = JSON.parse(localStorage.getItem(`sb-mock-db-${this.table}`) || '[]');
      }

      // Apply filters
      this.filters.forEach(filter => {
        data = data.filter(item => item[filter.column] === filter.value);
      });

      // Apply ordering
      if (this.orderConfig) {
        const { column, ascending } = this.orderConfig;
        data.sort((a, b) => {
          if (a[column] < b[column]) return ascending ? -1 : 1;
          if (a[column] > b[column]) return ascending ? 1 : -1;
          return 0;
        });
      }

      return Promise.resolve({ data, error: null }).then(onfulfilled, onrejected);
    } catch (err) {
      return Promise.resolve({ data: null, error: err }).then(onfulfilled, onrejected);
    }
  }
}

const mockAuth = {
  getSession: async () => {
    const sessionStr = localStorage.getItem('sb-mock-session');
    const session = sessionStr ? JSON.parse(sessionStr) : null;
    return { data: { session }, error: null };
  },
  
  onAuthStateChange: (callback) => {
    authListeners.add(callback);
    const sessionStr = localStorage.getItem('sb-mock-session');
    const session = sessionStr ? JSON.parse(sessionStr) : null;
    
    // Call callback immediately with initial state
    setTimeout(() => {
      callback(session ? 'SIGNED_IN' : 'SIGNED_OUT', session);
    }, 0);
    
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            authListeners.delete(callback);
          }
        }
      }
    };
  },

  signUp: async ({ email, password, options = {} }) => {
    const nickname = options.data?.nickname || `Aluno_${Math.floor(Math.random() * 9000) + 1000}`;
    const user = {
      id: 'mock-user-id-' + Math.random().toString(36).substring(2, 9),
      email,
      user_metadata: { nickname }
    };
    const session = { user, expires_at: Date.now() + 3600000 };
    
    localStorage.setItem('sb-mock-session', JSON.stringify(session));
    localStorage.setItem('sb-mock-profile', JSON.stringify({
      id: user.id,
      email,
      nickname,
      ms_is_premium: true // Premium status enabled by default for perfect local testing
    }));

    authListeners.forEach(cb => cb('SIGNED_IN', session));
    return { data: { session, user }, error: null };
  },

  signInWithPassword: async ({ email, password }) => {
    const user = {
      id: 'mock-user-id-' + Math.random().toString(36).substring(2, 9),
      email,
      user_metadata: { nickname: email.split('@')[0] }
    };
    const session = { user, expires_at: Date.now() + 3600000 };

    localStorage.setItem('sb-mock-session', JSON.stringify(session));
    localStorage.setItem('sb-mock-profile', JSON.stringify({
      id: user.id,
      email,
      nickname: user.user_metadata.nickname,
      ms_is_premium: true
    }));

    authListeners.forEach(cb => cb('SIGNED_IN', session));
    return { data: { session, user }, error: null };
  },

  signOut: async () => {
    localStorage.removeItem('sb-mock-session');
    localStorage.removeItem('sb-mock-profile');
    authListeners.forEach(cb => cb('SIGNED_OUT', null));
    return { error: null };
  },

  resetPasswordForEmail: async (email) => {
    return { data: {}, error: null };
  },

  updateUser: async ({ password }) => {
    return { data: {}, error: null };
  }
};

const mockFunctions = {
  invoke: async (functionName, options = {}) => {
    console.log(`[Mock Supabase Edge Function] ${functionName}`, options);
    if (functionName === 'create-checkout-session') {
      // Simulate upgrading to Premium
      const profile = JSON.parse(localStorage.getItem('sb-mock-profile') || '{}');
      profile.ms_is_premium = true;
      localStorage.setItem('sb-mock-profile', JSON.stringify(profile));
      alert("Simulação de Checkout Premium realizada com sucesso!");
      window.location.reload();
      return { data: { url: window.location.href }, error: null };
    }
    return { data: {}, error: null };
  }
};

if (isMockMode) {
  console.info('🛡️ [Supabase Client] Running in DEMO/OFFLINE mode. No real API calls will be made.');
}

export const supabase = isMockMode ? {
  auth: mockAuth,
  from: (table) => new MockQueryBuilder(table),
  functions: mockFunctions
} : createClient(supabaseUrl, supabaseAnonKey);

