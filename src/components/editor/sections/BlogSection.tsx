'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'
import type { Article } from '@/types/database'

type Props = {
  articles: Article[]
}

export function BlogSection({ articles }: Props) {
  const { lang } = useEditor()
  const readMore = lang === 'de' ? 'Weiterlesen' : 'Read more'
  const allPosts = lang === 'de' ? 'Alle Beiträge ansehen' : 'View all posts'

  return (
    <section className="py-32 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="blog" field="title" tag="span" />
          </h2>
          <div className="h-1 w-20 bg-[#f29202] mx-auto rounded-full" />
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <p className="text-sm">Noch keine Artikel vorhanden.</p>
            <a href="/news/new" className="mt-4 inline-flex btn-primary text-sm">+ Ersten Artikel erstellen</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {articles.slice(0, 4).map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-[#f8f7f5]">
                  {article.image_url ? (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: '#ed9f7b' }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-slate-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.short_description}</p>
                <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#f29202]" style={{ fontFamily: 'var(--font-display)' }}>
                  {readMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <a href="/news" className="rounded-xl font-bold inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-slate-900 hover:bg-[#f8f7f5] px-8 py-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            {allPosts}
          </a>
        </div>
      </div>
    </section>
  )
}
