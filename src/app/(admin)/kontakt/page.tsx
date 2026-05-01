import { createSupabaseServerClient } from '@/lib/supabase'
import { buildContent } from '@/lib/content-keys'
import { KontaktCanvas } from '@/components/editor/KontaktCanvas'
import type { BothLangs } from '@/types/content'

export default async function KontaktPage() {
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase.from('content').select('section,key,lang,value')
  if (error) throw error

  const initialContent: BothLangs = {
    de: buildContent(data ?? [], 'de'),
    en: buildContent(data ?? [], 'en'),
  }

  return <KontaktCanvas initialContent={initialContent} />
}
