import { createSupabaseServerClient } from '@/lib/supabase'
import { buildContent } from '@/lib/content-keys'
import { KundenSeiteCanvas } from '@/components/editor/KundenSeiteCanvas'
import type { BothLangs } from '@/types/content'
import type { Kunde } from '@/types/database'

export default async function KundenSeitePage() {
  const supabase = await createSupabaseServerClient()
  const [{ data: contentData, error }, { data: kundenData }] = await Promise.all([
    supabase.from('content').select('section,key,lang,value'),
    supabase.from('kunden').select('*').eq('active', true).order('display_order'),
  ])
  if (error) throw error

  const initialContent: BothLangs = {
    de: buildContent(contentData ?? [], 'de'),
    en: buildContent(contentData ?? [], 'en'),
  }

  return <KundenSeiteCanvas initialContent={initialContent} kunden={(kundenData ?? []) as Kunde[]} />
}
