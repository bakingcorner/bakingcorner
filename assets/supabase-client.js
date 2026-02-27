const SUPABASE_URL = 'https://lvgeiviktjjycxshdrnw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jwYinUXjJgecitVI_ISOdg_dkaW8Y-M';

// Initialize Supabase Client correctly using the global SDK object
const supabaseInstance = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
window.supabaseClient = supabaseInstance;
