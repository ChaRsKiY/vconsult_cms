'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'
import type { Kunde } from '@/types/database'

type Props = { kunden: Kunde[] }

export function KundenSeiteSection({ kunden }: Props) {
  const { lang } = useEditor()

  const clients  = kunden.filter((k) => k.type === 'kunde')
  const partners = kunden.filter((k) => k.type === 'partner')

  return (
    <div style={{ fontFamily: 'var(--font-display)' }}>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 border-b border-[#e5e7eb]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#f29202]/5 blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#ed9f7b]/10 blur-3xl z-0" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
            <span className="hover:text-[#f29202]">Start</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            <span className="text-slate-900">
              <EditableText section="kunden" field="breadcrumb" tag="span" />
            </span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="kunden" field="title" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="kunden" field="description" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Clients */}
      {clients.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-10">
              <EditableText section="kunden" field="kundenLabel" tag="span" />
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {clients.map((kunde) => (
                <div key={kunde.id}
                  className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-[#e5e7eb] bg-[#f8f7f5]">
                  {kunde.logo_url ? (
                    <img src={kunde.logo_url} alt={kunde.name} className="h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                  ) : (
                    <span className="text-sm font-semibold text-slate-500 text-center leading-snug">{kunde.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <section className={`py-24 border-t border-[#e5e7eb] ${clients.length > 0 ? 'bg-[#f8f7f5]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-10">
              <EditableText section="kunden" field="partnerLabel" tag="span" />
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {partners.map((partner) => (
                <div key={partner.id} className="group flex items-center justify-center shrink-0">
                  {partner.logo_url ? (
                    <img src={partner.logo_url} alt={partner.name} className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" />
                  ) : (
                    <span className="text-base font-semibold text-slate-400">{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {kunden.length === 0 && (
        <section className="py-32 bg-white text-center">
          <p className="text-slate-400 text-sm">
            Noch keine Kunden oder Partner. Füge sie unter{' '}
            <a href="/kunden" className="text-[#f29202] underline">Kunden</a>{' '}
            hinzu.
          </p>
        </section>
      )}
    </div>
  )
}
