import { create } from 'zustand';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';

const useAuthStore = create((set, get) => ({
  session: null,
  user: null,
  loading: true,
  error: null,

  // Fetch initial session
  fetchSession: async () => {
    set({ loading: true, error: null });
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      set({ session, user: session?.user || null, loading: false });
      // No toast needed for initial session fetch unless for specific debug/info
      return session;
    } catch (error) {
      set({ error: error.message, loading: false });
      // toast.error(`Session fetch error: ${error.message}`); // Potentially noisy
      return null;
    }
  },

  // Sign up a new user
  signUp: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        toast.error(error.message);
        throw error;
      }
      // Supabase sends a confirmation email. Session might not be set immediately
      // depending on email verification settings.
      // For now, we assume auto-confirmation or handle session from getSession() or onAuthStateChange.
      // If email confirmation is required, Supabase returns a user object but no session.
      if (data.user && !data.session) {
        toast.success('Sign up successful! Please check your email to confirm your account.');
      } else if (data.session) {
        toast.success('Sign up successful! Welcome!');
      }
      set({ session: data.session, user: data.user, loading: false });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast already shown if it's a Supabase error
      if (!error.message.includes('supabase')) { // Avoid double toast
          // toast.error(`Sign up error: ${error.message}`);
      }
      return null;
    }
  },

  // Sign in an existing user
  signIn: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast.error(error.message);
        throw error;
      }
      set({ session: data.session, user: data.user, loading: false });
      toast.success('Signed in successfully! Welcome back.');
      return data.session;
    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast already shown
      return null;
    }
  },

  // Sign out the current user
  signOut: async () => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
        throw error;
      }
      set({ session: null, user: null, loading: false });
      toast.success('Signed out successfully.');
    } catch (error) {
      set({ error: error.message, loading: false });
      // Toast already shown
    }
  },

  // Listen to auth state changes
  // This should be called once, e.g., in App.jsx useEffect
  listenToAuthStateChange: () => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      set({ session, user: session?.user || null, loading: false });
    });
    return () => {
      authListener?.unsubscribe();
    };
  }
}));

export default useAuthStore;
