'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { useEditor } from './EditorContext'

const PAGE_SEO: Record<string, { section: string; titleKey: string; descKey: string }> = {
  '/': { section: 'meta', titleKey: 'defaultTitle', descKey: 'defaultDescription' },
  '/leistungen': { section: 'leistungenPage', titleKey: 'metaTitle', descKey: 'metaDescription' },
  '/unternehmen': { section: 'unternehmenPage', titleKey: 'metaTitle', descKey: 'metaDescription' },
  '/kontakt': { section: 'kontaktPage', titleKey: 'metaTitle', descKey: 'metaDescription' },
}

export function SeoPanel() {
  const pathname = usePathname()
  const config = PAGE_SEO[pathname]
  const { content, lang, updateField } = useEditor()
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, right: 0 })
  const [mounted, setMounted] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!config) return null

  const sectionData = (content[lang] as Record<string, Record<string, string>>)[config.section] ?? {}
  const title = sectionData[config.titleKey] ?? ''
  const desc = sectionData[config.descKey] ?? ''

  function handleOpen() {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect()
      setPos({ top: r.bottom + 8, right: window.innerWidth - r.right })
    }
    setOpen((o) => !o)
  }

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={handleOpen}
        className="px-3 py-1.5 text-xs font-semibold border border-black/15 rounded-lg hover:bg-parchment transition-colors whitespace-nowrap"
        title="SEO bearbeiten"
      >
        SEO
      </button>

      {open && mounted && createPortal(
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="fixed w-80 bg-white border border-black/10 rounded-xl shadow-lg z-50 p-4 flex flex-col gap-3"
            style={{ top: pos.top, right: pos.right }}
          >
            <p className="text-xs font-semibold text-carbon">SEO — {lang.toUpperCase()}</p>
            <div>
              <label className="label" htmlFor="seo-meta-title">Meta Title</label>
              <input
                id="seo-meta-title"
                className="input text-xs"
                value={title}
                onChange={(e) => updateField(config.section, config.titleKey, e.target.value)}
                placeholder="Seitentitel für Google"
              />
            </div>
            <div>
              <label className="label" htmlFor="seo-meta-desc">Meta Description</label>
              <textarea
                id="seo-meta-desc"
                className="input text-xs resize-none"
                rows={3}
                value={desc}
                onChange={(e) => updateField(config.section, config.descKey, e.target.value)}
                placeholder="Kurzbeschreibung für Google (150–160 Zeichen)"
              />
              <p className="text-[0.6rem] text-ash mt-1">{desc.length} / 160</p>
            </div>
            <p className="text-[0.6rem] text-ash">Speichern oder Publizieren um zu übernehmen.</p>
          </div>
        </>,
        document.body
      )}
    </div>
  )
}
