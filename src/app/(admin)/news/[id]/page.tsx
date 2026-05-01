import { createSupabaseServerClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { updateArticle } from '@/actions/news'
import { ArticleForm } from '@/components/news/ArticleForm'
import { DeleteArticleButton } from '@/components/news/DeleteArticleButton'
import { EditorHeader } from '@/components/editor/EditorHeader'
import type { Article } from '@/types/database'

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('articles').select('*').eq('id', id).single()
  if (!data) notFound()

  const article = data as Article
  const boundAction = updateArticle.bind(null, id)

  return (
    <>
      <EditorHeader />
      <div className="p-4 sm:p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-carbon">Artikel bearbeiten</h1>
          <DeleteArticleButton id={id} />
        </div>
        <div className="card-light p-6">
          <ArticleForm action={boundAction} defaultValues={article} submitLabel="Änderungen speichern" />
        </div>
      </div>
    </>
  )
}
