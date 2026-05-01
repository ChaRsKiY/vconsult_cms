'use client'
import { EditableText } from '../EditableText'

const FEATURES = [1, 2, 3, 4, 5, 6]
const USE_CASES = [1, 2, 3, 4, 5, 6]
const STEPS = [1, 2, 3, 4]
const SECURITY = [1, 2, 3, 4]

const FEATURE_ICONS = [
  <svg key="chart" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  <svg key="cpu" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>,
  <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="users" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="server" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>,
  <svg key="zap" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
]

export function EnterpriseAiSection() {
  return (
    <div style={{ fontFamily: 'var(--font-display)' }}>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 border-b border-[#e5e7eb]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#f29202]/5 blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#ed9f7b]/10 blur-3xl z-0" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
            <span>Leistungen</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            <span className="text-slate-900">Enterprise AI</span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="enterpriseai" field="pageTitle" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="enterpriseai" field="pageDesc" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-4">
                <EditableText section="enterpriseai" field="introBadge" tag="span" />
              </p>
              <h2 className="text-4xl font-normal text-slate-900 mb-6 leading-tight tracking-tight">
                <EditableText section="enterpriseai" field="introTitle" multiline tag="span" />
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <EditableText section="enterpriseai" field="introP1" multiline tag="span" />
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                <EditableText section="enterpriseai" field="introP2" multiline tag="span" />
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-xl font-bold inline-flex items-center gap-2 px-6 py-3 text-sm text-white" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
                  <EditableText section="enterpriseai" field="introCtaLabel" tag="span" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className={`rounded-2xl p-6 text-center flex flex-col items-center gap-2 border ${n === 2 ? 'border-[#f29202]/20 bg-[#f29202]/5' : 'border-[#e5e7eb] bg-white'}`}>
                  <span className="text-3xl font-normal text-[#f29202]">
                    <EditableText section="enterpriseai" field={`stat${n}Value`} tag="span" />
                  </span>
                  <span className="text-xs text-slate-500 leading-snug">
                    <EditableText section="enterpriseai" field={`stat${n}Label`} tag="span" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#f8f7f5] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
              <EditableText section="enterpriseai" field="featuresBadge" tag="span" />
            </p>
            <h2 className="text-3xl font-normal text-slate-900 tracking-tight">
              <EditableText section="enterpriseai" field="featuresTitle" tag="span" />
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((n, i) => (
              <div key={n} className="bg-white rounded-2xl p-7 border border-[#e5e7eb] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f29202]/10 flex items-center justify-center text-[#f29202]">
                  {FEATURE_ICONS[i]}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                    <EditableText section="enterpriseai" field={`feature${n}Title`} tag="span" />
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <EditableText section="enterpriseai" field={`feature${n}Desc`} multiline tag="span" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
              <EditableText section="enterpriseai" field="useCasesBadge" tag="span" />
            </p>
            <h2 className="text-3xl font-normal text-slate-900 tracking-tight">
              <EditableText section="enterpriseai" field="useCasesTitle" tag="span" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((n) => (
              <div key={n} className="rounded-2xl border border-[#e5e7eb] bg-[#f8f7f5] p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-normal text-slate-200">0{n}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#f29202]/10 text-[#f29202] px-2.5 py-1 rounded-full">
                    <EditableText section="enterpriseai" field={`useCase${n}Tag`} tag="span" />
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    <EditableText section="enterpriseai" field={`useCase${n}Title`} tag="span" />
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <EditableText section="enterpriseai" field={`useCase${n}Desc`} multiline tag="span" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-[#f8f7f5] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
              <EditableText section="enterpriseai" field="stepsBadge" tag="span" />
            </p>
            <h2 className="text-3xl font-normal text-slate-900 tracking-tight">
              <EditableText section="enterpriseai" field="stepsTitle" tag="span" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((n) => (
              <div key={n} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
                  0{n}
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  <EditableText section="enterpriseai" field={`step${n}Title`} tag="span" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <EditableText section="enterpriseai" field={`step${n}Desc`} multiline tag="span" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f29202] mb-3">
              <EditableText section="enterpriseai" field="securityBadge" tag="span" />
            </p>
            <h2 className="text-3xl font-normal text-slate-900 tracking-tight">
              <EditableText section="enterpriseai" field="securityTitle" tag="span" />
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map((n) => (
              <div key={n} className="rounded-2xl border border-[#e5e7eb] bg-[#f8f7f5] p-6 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f29202]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  <EditableText section="enterpriseai" field={`security${n}Title`} tag="span" />
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <EditableText section="enterpriseai" field={`security${n}Desc`} multiline tag="span" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f8f7f5] border-t border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block w-10 h-0.5 bg-[#f29202] mb-8" />
          <h2 className="text-3xl font-normal text-slate-900 mb-4 tracking-tight">
            <EditableText section="enterpriseai" field="ctaTitle" tag="span" />
          </h2>
          <p className="text-slate-600 mb-10">
            <EditableText section="enterpriseai" field="ctaDesc" multiline tag="span" />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-xl font-bold inline-flex items-center gap-2 px-8 py-4 text-sm text-white" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
              <EditableText section="enterpriseai" field="ctaPrimaryLabel" tag="span" />
            </span>
            <span className="rounded-xl font-bold inline-flex items-center gap-2 border border-[#e5e7eb] bg-white text-slate-900 px-8 py-4 text-sm">
              <EditableText section="enterpriseai" field="ctaSecondaryLabel" tag="span" />
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
