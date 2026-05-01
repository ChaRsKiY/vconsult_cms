import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function getEnv() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return { url, key }
}

export function createSupabaseClient() {
  const { url, key } = getEnv()
  return createClient(url, key)
}

export async function createSupabaseServerClient() {
  const { url, key } = getEnv()
  const cookieStore = await cookies()
  return createServerClient(url, key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
      },
    },
  })
}
