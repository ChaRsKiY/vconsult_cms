'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'

const FEATURE_FALLBACKS = {
  de: {
    card1Feature3: 'Logistik-Optimierung',
    card2Feature3: 'Prozessharmonisierung',
    card3Feature3: 'SAP-Integration',
  },
  en: {
    card1Feature3: 'Logistics Optimization',
    card2Feature3: 'Process Harmonization',
    card3Feature3: 'SAP Integration',
  },
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f29202] mr-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
    </svg>
  )
}

export function ServicesSection() {
  const { lang } = useEditor()
  const fallback = FEATURE_FALLBACKS[lang]

  return (
    <section className="py-32" style={{ background: '#f8f7f5' }} id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-normal text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="title" tag="span" />
            </h2>
            <p className="text-slate-600 font-normal">
              <EditableText section="services" field="subtitle" multiline tag="span" />
            </p>
          </div>
          <span className="text-[#f29202] font-bold flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="services" field="allLink" tag="span" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-10 rounded-3xl flex flex-col" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(229,231,235,1)' }}>
            <div className="w-16 h-16 rounded-2xl bg-slate-900/5 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card1Title" tag="span" />
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              <EditableText section="services" field="card1Desc" multiline tag="span" />
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card1Feature1" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card1Feature2" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card1Feature3" fallback={fallback.card1Feature3} tag="span" /></li>
            </ul>
            <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-slate-900 px-8 py-3 text-sm w-full" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card1Cta" tag="span" />
            </span>
          </div>

          {/* Card 2 — Featured */}
          <div className="p-10 rounded-3xl bg-[#f29202]/5 border border-[#f29202]/20 flex flex-col relative" style={{ backdropFilter: 'blur(12px)' }}>
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-[#f29202] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full" style={{ fontFamily: 'var(--font-display)' }}>
                <EditableText section="services" field="card2Badge" tag="span" />
              </span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#f29202]/10 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
            </div>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card2Title" tag="span" />
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              <EditableText section="services" field="card2Desc" multiline tag="span" />
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card2Feature1" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card2Feature2" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card2Feature3" fallback={fallback.card2Feature3} tag="span" /></li>
            </ul>
            <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 text-white shadow-lg px-8 py-3 text-sm w-full" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)', fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card2Cta" tag="span" />
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-10 rounded-3xl flex flex-col" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(229,231,235,1)' }}>
            <div className="w-16 h-16 rounded-2xl bg-slate-900/5 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card3Title" tag="span" />
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              <EditableText section="services" field="card3Desc" multiline tag="span" />
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card3Feature1" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card3Feature2" tag="span" /></li>
              <li className="flex items-center text-sm font-semibold text-slate-700"><CheckIcon /><EditableText section="services" field="card3Feature3" fallback={fallback.card3Feature3} tag="span" /></li>
            </ul>
            <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-slate-900 px-8 py-3 text-sm w-full" style={{ fontFamily: 'var(--font-display)' }}>
              <EditableText section="services" field="card3Cta" tag="span" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
