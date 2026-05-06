'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'

const DOWNLOADS = [1, 2, 3]
const COMPETENCIES = [1, 2, 3, 4, 5]

export function LeistungenSection() {
  const { lang } = useEditor()
  const philosophiePath = lang === 'de' ? '/philosophie' : '/en/philosophie'

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
              <EditableText section="leistungen" field="breadcrumb" tag="span" />
            </span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="leistungen" field="title" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="leistungen" field="description" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: SAP Logistik */}
            <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8f7f5] p-10 flex flex-col gap-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-[#f29202]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/><path d="M22 3h-6v12h6V3Z"/><path d="M16 8h6"/><path d="M16 12h6"/><path d="M6 14H4"/><path d="M6 18H4"/><path d="M10 14H8"/><path d="M10 18H8"/></svg>
              </div>
              <div>
                <h2 className="text-3xl font-normal text-slate-900 mb-4">
                  <EditableText section="leistungen" field="sapTitle" tag="span" />
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  <EditableText section="leistungen" field="sapDesc" multiline tag="span" />
                </p>
              </div>
              <div className="flex-grow">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-4">
                  <EditableText section="leistungen" field="schwerpunkteLabel" tag="span" />
                </p>
                <ul className="space-y-2.5">
                  {COMPETENCIES.map((n) => (
                    <li key={n} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f29202] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      <EditableText section="leistungen" field={`competency${n}`} tag="span" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Outsourcing */}
            <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8f7f5] p-10 flex flex-col gap-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-[#f29202]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h2 className="text-3xl font-normal text-slate-900 mb-4">
                  <EditableText section="leistungen" field="outsourcingTitle" tag="span" />
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  <EditableText section="leistungen" field="outsourcingDesc" multiline tag="span" />
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 flex-grow">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
                  <EditableText section="leistungen" field="vconsupportLabel" tag="span" />
                </p>
                <h3 className="text-lg font-normal text-slate-900 mb-4">
                  <EditableText section="leistungen" field="vconsupportTitle" tag="span" />
                </h3>
                <ul className="space-y-3">
                  {DOWNLOADS.map((n) => (
                    <li key={n} className="flex items-center gap-3 group cursor-pointer">
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-[#f29202]/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 17v-6"/><path d="m9 14 3 3 3-3"/></svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        <EditableText section="leistungen" field={`download${n}`} tag="span" />
                        <span className="text-slate-400 ml-1">(PDF)</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise AI Teaser */}
      <section className="py-16 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-[#f29202]/20 bg-[#f29202]/[0.03] p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-grow">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
                <EditableText section="leistungen" field="aiTeaserBadge" tag="span" />
              </p>
              <h2 className="text-2xl font-normal text-slate-900 mb-3 tracking-tight">
                <EditableText section="leistungen" field="aiTeaserTitle" tag="span" />
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                <EditableText section="leistungen" field="aiTeaserDesc" multiline tag="span" />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 px-6 py-3 text-sm text-white whitespace-nowrap" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
                <EditableText section="leistungen" field="aiTeaserCta1" tag="span" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
              <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-slate-900 px-6 py-3 text-sm whitespace-nowrap">
                <EditableText section="leistungen" field="aiTeaserCta2" tag="span" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* mBaIT Quote */}
      <section className="py-20 bg-[#f8f7f5] border-t border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block w-10 h-0.5 bg-[#f29202] mb-8" />
          <p className="text-2xl font-normal text-slate-900 leading-relaxed">
            <EditableText section="leistungen" field="mBaITQuote" tag="span" />{' '}
            <em className="not-italic text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
              <EditableText section="leistungen" field="mBaITHighlight" tag="span" />
            </em>{' '}
            <EditableText section="leistungen" field="mBaITText" multiline tag="span" />
          </p>
          <div className="mt-10">
            <a href={philosophiePath} className="inline-flex items-center gap-2 text-sm font-semibold text-[#f29202]">
              <EditableText section="leistungen" field="philosophieLink" tag="span" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
