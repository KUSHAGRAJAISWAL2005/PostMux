import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://myzbqukuqispmcifwfnb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15emJxdWt1cWlzcG1jaWZ3Zm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDI0MDUsImV4cCI6MjA1MDAxODQwNX0.qSAU8gkIrLaKKAz0CvGkU8uSv4fwfYL5H6QQllJ3QSE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)