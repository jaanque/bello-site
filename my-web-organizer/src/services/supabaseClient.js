import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvivhvivgczbboxkytcy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2aXZodml2Z2N6YmJveGt5dGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NDI4MjMsImV4cCI6MjA2NzUxODgyM30.MNq2k3rhuFkmnKqTuy-Xef2rXNeFlIXivW5df3HgwX4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
