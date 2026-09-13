const SUPABASE_CONFIG = {
    // Supabase Project URL
    url: 'https://zygbyvnaeoyvkcrcpgxz.supabase.co',

    // Supabase Publishable/Anon Key
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z2J5dm5hZW95dmtjcmNwZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNzM2NjQsImV4cCI6MjEwNDc0OTY2NH0.U8quYQa92relNQ3c9z6tbWR3P8TJJ9bKnZBp6obEfrE',
};

// Make configuration available to the HTML/JavaScript
if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}