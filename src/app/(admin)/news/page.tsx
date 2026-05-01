import { createSupabaseServerClient } from '@/lib/supabase'
import Link from 'next/link'
import type { Article } from '@/types/database'
import { SortableArticleList } from '@/components/news/SortableArticleList'
import { EditorHeader } from '@/components/editor/EditorHeader'

export default async function NewsPage() {
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('articles').select('*').order('order_num')
  const articles = (data ?? []) as Article[]

  return (
    <>
      <EditorHeader />
      <div className="p-4 sm:p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-carbon">News & Blog</h1>
          <Link href="/news/new" className="btn-primary">+ Neuer Artikel</Link>
        </div>
        <SortableArticleList articles={articles} />
      </div>
    </>
  )
}
