'use client'
import { useTransition, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useEditorOptional } from './EditorContext'
import { saveContent, triggerPublish } from '@/actions/publish'
import { logout } from '@/actions/auth'

const EDITOR_PAGES = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Enterprise AI', href: '/enterprise-ai' },
  { label: 'Unternehmen', href: '/unternehmen' },
  { label: 'Philosophie', href: '/philosophie' },
  { label: 'Kunden Seite', href: '/kunden-seite' },
  { label: 'Kontakt', href: '/kontakt' },
] as const

const LIST_PAGES = [
  { label: 'News', href: '/news' },
  { label: 'Kunden', href: '/kunden' },
  { label: 'Anfragen', href: '/anfragen' },
]

export function EditorHeader() {
  const editorCtx = useEditorOptional()
  const pathname = usePathname()
  const [savePending, startSave] = useTransition()
  const [publishPending, startPublish] = useTransition()
  const [publishedAt, setPublishedAt] = useState<number | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)

  const isDirty = editorCtx?.isDirty ?? false

  useEffect(() => { if (isDirty) setPublishedAt(null) }, [isDirty])
  useEffect(() => {
    if (!isDirty) return
    const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = '' }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [isDirty])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  function handleSave() {
    if (!editorCtx) return
    startSave(async () => {
      try { await saveContent(editorCtx.content); editorCtx.setDirty(false); setSaveError(null) }
      catch (e) { setSaveError(e instanceof Error ? e.message : 'Fehler beim Speichern') }
    })
  }

  function handlePublish() {
    if (!editorCtx) return
    startPublish(async () => {
      try { await triggerPublish(editorCtx.content); editorCtx.setDirty(false); setPublishedAt(Date.now()); setSaveError(null) }
      catch (e) { setSaveError(e instanceof Error ? e.message : 'Fehler beim Publizieren') }
    })
  }

  return (
    <header className="relative sticky top-0 z-50 bg-white border-b border-black/8 shadow-sm">
      {/* Top row: logo + save/publish */}
      <div className="px-4 py-2.5 flex items-center gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="vconsult" className="h-7 w-auto shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-primary text-white px-1.5 py-0.5 rounded">CMS</span>
        </div>

        {editorCtx && (
          <div className="ml-auto flex items-center gap-2 shrink-0">
            {isDirty && <span className="hidden sm:inline text-xs text-ash whitespace-nowrap">Nicht gespeichert</span>}
            <button
              onClick={handleSave}
              disabled={savePending || !isDirty}
              className={`px-3 py-1.5 text-xs font-semibold border border-black/15 rounded-lg hover:bg-parchment disabled:opacity-40 transition-colors whitespace-nowrap ${isDirty ? 'border-primary/30 text-primary' : ''}`}
            >
              {savePending ? '…' : 'Speichern'}
            </button>
            <button
              onClick={handlePublish}
              disabled={publishPending}
              className="px-3 py-1.5 text-xs font-semibold bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-60 transition-opacity whitespace-nowrap"
            >
              {publishPending ? '…' : publishedAt ? '✓ Publiziert' : 'Publizieren'}
            </button>
          </div>
        )}

        {!editorCtx && (
          <div className="ml-auto">
            <form action={logout}>
              <button type="submit" className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors">
                Logout
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Bottom row: navigation */}
      <div className="overflow-x-auto border-t border-black/5 scrollbar-none">
        <div className="flex items-center gap-0.5 px-3 py-1 w-max min-w-full">

          {/* Editor pages */}
          {EDITOR_PAGES.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                isActive(page.href)
                  ? 'border-primary text-carbon'
                  : 'border-transparent text-ash hover:text-carbon'
              }`}
            >
              {page.label}
            </a>
          ))}

          <div className="w-px h-4 bg-black/10 mx-2 shrink-0" />

          {/* List pages */}
          {LIST_PAGES.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                isActive(link.href)
                  ? 'border-primary text-carbon'
                  : 'border-transparent text-ash hover:text-carbon'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="w-px h-4 bg-black/10 mx-2 shrink-0" />

          {/* DE / EN */}
          {(['de', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => editorCtx?.setLang(l)}
              disabled={!editorCtx}
              title={editorCtx ? undefined : 'Nur im Redakteur verfügbar'}
              className={`px-2.5 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all border-b-2 -mb-px ${
                editorCtx?.lang === l
                  ? 'border-primary text-carbon'
                  : 'border-transparent text-ash'
              } ${!editorCtx ? 'opacity-30 cursor-not-allowed' : 'hover:text-carbon cursor-pointer'}`}
            >
              {l}
            </button>
          ))}

          {editorCtx && (
            <div className="ml-auto pl-4 shrink-0">
              <form action={logout}>
                <button type="submit" className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors whitespace-nowrap">
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {saveError && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-xs text-red-500 bg-white px-3 py-1 rounded-b-lg shadow-sm border border-red-100 whitespace-nowrap z-10">
          {saveError}
        </span>
      )}
    </header>
  )
}
