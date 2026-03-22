import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface Lead {
  id?: string
  name: string
  restaurant: string
  email: string
  phone: string
  created_at?: string
}

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>) {
  if (!supabase) {
    console.warn('Supabase not configured - lead submission skipped in dev mode')
    return { mock: true, ...lead }
  }

  const { data, error } = await supabase
    .from('restopos_leads')
    .insert([lead])
    .select()

  if (error) {
    console.error('Error submitting lead:', error)
    throw error
  }

  return data
}