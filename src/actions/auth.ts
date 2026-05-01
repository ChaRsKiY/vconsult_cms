'use server'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase'

export async function loginWithAzure() {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'

  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: `${origin}/auth/callback`,
    },
  })
  if (error || !data.url) return
  redirect(data.url)
}

export async function logout() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect('/login')
}
