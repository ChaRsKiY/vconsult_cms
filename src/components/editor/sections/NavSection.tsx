'use client'
import { useEditor } from '../EditorContext'

const NAV_LINKS = {
  de: ['Philosophie', 'Leistungen', 'Kunden', 'News', 'Unternehmen'],
  en: ['Philosophy', 'Services', 'Clients', 'News', 'About'],
}

export function NavSection() {
  const { lang } = useEditor()

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between max-w-full">
      <div className="flex items-center gap-10">
        <img src="/vconsult_group.png" alt="vconsult" className="h-8 w-auto" />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS[lang].map((label) => (
            <span key={label} className="text-sm font-semibold text-slate-600 select-none" style={{ fontFamily: 'var(--font-display)' }}>
              {label}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden lg:inline-flex items-center justify-center h-8 w-10 rounded-lg border border-[#e5e7eb] text-xs font-bold text-slate-500 select-none" style={{ fontFamily: 'var(--font-display)' }}>
          {lang === 'de' ? 'EN' : 'DE'}
        </span>
        <span className="inline-flex items-center justify-center rounded-xl font-bold px-5 py-2.5 text-sm text-white shadow-lg select-none" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)', fontFamily: 'var(--font-display)' }}>
          {lang === 'de' ? 'Kontakt aufnehmen' : 'Get in touch'}
        </span>
      </div>
    </header>
  )
}
