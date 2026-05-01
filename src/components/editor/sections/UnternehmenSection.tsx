'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'

export function UnternehmenSection() {
  const { lang } = useEditor()
  const kundenPath = lang === 'de' ? '/kunden' : '/en/kunden'
  const kontaktPath = lang === 'de' ? '/kontakt' : '/en/kontakt'

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
              <EditableText section="unternehmen" field="breadcrumb" tag="span" />
            </span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="unternehmen" field="title" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="unternehmen" field="description" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-4">
                <EditableText section="unternehmen" field="vconsultLabel" tag="span" />
              </p>
              <h2 className="text-4xl font-normal tracking-tight text-slate-900 mb-8">
                <EditableText section="unternehmen" field="companyTitle" tag="span" />
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p><EditableText section="unternehmen" field="p1" multiline tag="span" /></p>
                <p><EditableText section="unternehmen" field="p2" multiline tag="span" /></p>
                <p>
                  <EditableText section="unternehmen" field="p3" tag="span" />{' '}
                  <em className="not-italic font-medium text-slate-800">
                    <EditableText section="unternehmen" field="p3Model" tag="span" />
                  </em>{' '}
                  <EditableText section="unternehmen" field="p3Rest" multiline tag="span" />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8f7f5] p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-[#f29202] mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-normal text-slate-900 mb-3">
                  <EditableText section="unternehmen" field="expertTitle" tag="span" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <EditableText section="unternehmen" field="expertDesc" multiline tag="span" />
                </p>
              </div>
              <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8f7f5] p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-[#f29202] mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <h3 className="text-xl font-normal text-slate-900 mb-3">
                  <EditableText section="unternehmen" field="sapTeamTitle" tag="span" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <EditableText section="unternehmen" field="sapTeamDesc" tag="span" />{' '}
                  <span className="font-semibold text-slate-800">
                    <EditableText section="unternehmen" field="sapTeamBrand" tag="span" />
                  </span>{' '}
                  <EditableText section="unternehmen" field="sapTeamRest" tag="span" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berater Philosophie */}
      <section className="py-24 bg-[#f8f7f5] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-normal tracking-tight text-slate-900 mb-4">
              <EditableText section="unternehmen" field="philosophieTitle" tag="span" />
            </h2>
            <p className="text-lg text-slate-600">
              <EditableText section="unternehmen" field="philosophieSubtitle" multiline tag="span" />
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-10 flex flex-col gap-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f29202]/10 text-[#f29202]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-normal text-slate-900 mb-3">
                  <EditableText section="unternehmen" field="card1Title" tag="span" />
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <EditableText section="unternehmen" field="card1Desc" multiline tag="span" />
                </p>
                <ul className="space-y-2.5">
                  {(['card1Feature1', 'card1Feature2'] as const).map((field) => (
                    <li key={field} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f29202] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      <EditableText section="unternehmen" field={field} tag="span" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-10 flex flex-col gap-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f29202]/10 text-[#f29202]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-normal text-slate-900 mb-3">
                  <EditableText section="unternehmen" field="card2Title" tag="span" />
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  <EditableText section="unternehmen" field="card2Desc" multiline tag="span" />
                </p>
                <div className="rounded-xl bg-[#f29202]/10 px-5 py-4">
                  <p className="text-sm text-[#f29202] font-medium leading-relaxed">
                    <EditableText section="unternehmen" field="card2Highlight" multiline tag="span" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block w-10 h-0.5 bg-[#f29202] mb-8" />
          <p className="text-2xl font-normal text-slate-900 leading-relaxed mb-10">
            <EditableText section="unternehmen" field="ctaText" multiline tag="span" />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={kundenPath} className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 bg-slate-900 text-white font-bold text-sm">
              <EditableText section="unternehmen" field="ctaKunden" tag="span" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href={kontaktPath} className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 border border-[#f29202] text-[#f29202] font-bold text-sm">
              <EditableText section="unternehmen" field="ctaKontakt" tag="span" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
