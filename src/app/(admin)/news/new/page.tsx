import { createArticle } from '@/actions/news'
import { ArticleForm } from '@/components/news/ArticleForm'
import { EditorHeader } from '@/components/editor/EditorHeader'
export default async function NewArticlePage() {
  return (
    <>
      <EditorHeader />
      <div className="p-4 sm:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-carbon mb-6">Neuer Artikel</h1>
        <div className="card-light p-6">
          <ArticleForm action={createArticle} submitLabel="Artikel erstellen" />
        </div>
      </div>
    </>
  )
}
