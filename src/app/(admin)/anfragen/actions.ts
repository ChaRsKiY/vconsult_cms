'use server'

import { createSupabaseServerClient } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function markRead(id: string) {
  const supabase = await createSupabaseServerClient()
  await supabase.from('contact_submissions').update({ read: true }).eq('id', id)
  revalidatePath('/anfragen')
}

export async function markUnread(id: string) {
  const supabase = await createSupabaseServerClient()
  await supabase.from('contact_submissions').update({ read: false }).eq('id', id)
  revalidatePath('/anfragen')
}

export async function deleteSubmission(id: string) {
  const supabase = await createSupabaseServerClient()
  await supabase.from('contact_submissions').delete().eq('id', id)
  revalidatePath('/anfragen')
}
