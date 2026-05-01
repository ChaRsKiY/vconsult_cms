import { createSupabaseServerClient } from '@/lib/supabase'
import { buildContent } from '@/lib/content-keys'
import { EditorCanvas } from '@/components/editor/EditorCanvas'
import type { BothLangs } from '@/types/content'
import type { Article } from '@/types/database'

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient()
  const [{ data: contentData, error }, { data: articles }] = await Promise.all([
    supabase.from('content').select('section,key,lang,value'),
    supabase.from('articles').select('*').order('date', { ascending: false }).limit(4),
  ])
  if (error) throw error

  const initialContent: BothLangs = {
    de: buildContent(contentData ?? [], 'de'),
    en: buildContent(contentData ?? [], 'en'),
  }

  return <EditorCanvas initialContent={initialContent} articles={(articles ?? []) as Article[]} />
}
