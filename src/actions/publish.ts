'use server'
import { createSupabaseServerClient } from '@/lib/supabase'
import type { BothLangs, ContentRow } from '@/types/content'

export async function saveContent(content: BothLangs) {
  const supabase = await createSupabaseServerClient()
  const rows: ContentRow[] = []

  for (const lang of ['de', 'en'] as const) {
    const c = content[lang]
    for (const [section, fields] of Object.entries(c)) {
      for (const [key, value] of Object.entries(fields as Record<string, string>)) {
        rows.push({ section, key, lang, value: String(value) })
      }
    }
  }

  const { error } = await supabase
    .from('content')
    .upsert(rows, { onConflict: 'section,key,lang' })

  if (error) throw new Error(error.message)
}

export async function triggerPublish(content: BothLangs) {
  await saveContent(content)

  const hookUrl = process.env.CMS_DEPLOY_HOOK_URL
  if (!hookUrl) throw new Error('CMS_DEPLOY_HOOK_URL not set')

  const res = await fetch(hookUrl, { method: 'POST' })
  if (!res.ok) throw new Error(`Deploy hook failed: ${res.status}`)
}
