'use client'
import { useState, useTransition, useEffect } from 'react'
import Link from 'next/link'
import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { updateArticleOrder } from '@/actions/news'
import { DeleteArticleButton } from './DeleteArticleButton'
import type { Article } from '@/types/database'

function SortableArticleItem({ article }: { article: Article }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: article.id })
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.4 : 1 }

  return (
    <div ref={setNodeRef} style={style} className="card-light p-5 flex gap-3">
      <button
        {...attributes}
        {...listeners}
        className="mt-1 p-1 text-ash/40 hover:text-ash cursor-grab active:cursor-grabbing touch-none shrink-0"
        aria-label="Drag to reorder"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[0.6rem] font-semibold tracking-widest text-ash uppercase">#{article.order_num}</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-widest bg-black/5 text-ash px-1.5 py-0.5 rounded">{article.category}</span>
              <span className={`text-[0.6rem] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded ${article.published ? 'bg-green-100 text-green-700' : 'bg-black/5 text-ash'}`}>
                {article.published ? 'Veröffentlicht' : 'Entwurf'}
              </span>
            </div>
            <p className="font-semibold text-carbon text-sm">{article.title}</p>
            <p className="text-ash text-xs mt-0.5">{new Date(article.date).toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/news/${article.id}`}
              className="text-xs border border-black/10 px-3 py-1.5 rounded-lg hover:bg-parchment font-semibold"
            >
              Bearbeiten
            </Link>
            <DeleteArticleButton id={article.id} />
          </div>
        </div>
        {article.short_description && (
          <p className="text-ash text-xs leading-relaxed line-clamp-2">{article.short_description}</p>
        )}
      </div>
    </div>
  )
}

export function SortableArticleList({ articles: initialArticles }: { articles: Article[] }) {
  const [articles, setArticles] = useState(initialArticles)
  const [pending, startTransition] = useTransition()

  useEffect(() => { setArticles(initialArticles) }, [initialArticles])

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) return
    const oldIndex = articles.findIndex((a) => a.id === active.id)
    const newIndex = articles.findIndex((a) => a.id === over.id)
    const reordered = arrayMove(articles, oldIndex, newIndex)
    setArticles(reordered)
    startTransition(() => updateArticleOrder(reordered.map((a) => a.id)))
  }

  return (
    <div className="flex flex-col gap-3">
      <DndContext id="articles-dnd" collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={articles.map((a) => a.id)} strategy={verticalListSortingStrategy}>
          {articles.map((article) => (
            <SortableArticleItem key={article.id} article={article} />
          ))}
        </SortableContext>
      </DndContext>
      {articles.length === 0 && (
        <p className="text-ash text-sm text-center py-12">Noch keine Artikel vorhanden.</p>
      )}
      {pending && <p className="text-xs text-ash text-center">Reihenfolge wird gespeichert…</p>}
    </div>
  )
}
