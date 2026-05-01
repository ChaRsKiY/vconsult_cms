'use client'
import { EditableText } from '../EditableText'

export function PhilosophiePageSection() {
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
              <EditableText section="philosophiePage" field="breadcrumb" tag="span" />
            </span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="philosophiePage" field="title" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="philosophiePage" field="description" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-slate-600 leading-relaxed space-y-8 text-lg">
          <div>
            <p><EditableText section="philosophiePage" field="p1" multiline tag="span" /></p>
          </div>
          <div className="p-8 md:p-12 rounded-3xl bg-[#f8f7f5] border-l-4 border-[#f29202]">
            <h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-6 uppercase">
              <EditableText section="philosophiePage" field="quoteTitle" tag="span" />
            </h2>
            <p className="text-lg">
              <EditableText section="philosophiePage" field="quoteText" multiline tag="span" />
            </p>
          </div>
          <div>
            <p><EditableText section="philosophiePage" field="p2" multiline tag="span" /></p>
            <p className="font-medium text-slate-900 text-xl border-t border-[#e5e7eb] pt-8 mt-12 text-center">
              <EditableText section="philosophiePage" field="cta" multiline tag="span" />
            </p>
          </div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-32 bg-[#f8f7f5] text-slate-900 border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-[#e5e7eb] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <h3 className="text-xl font-normal mb-4">
                <EditableText section="philosophiePage" field="workflow1Title" tag="span" />
              </h3>
              <p className="text-slate-600">
                <EditableText section="philosophiePage" field="workflow1Desc" multiline tag="span" />
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl" style={{ backgroundImage: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4"/><path d="M20 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/><path d="M12 4v16"/><path d="M8 4h8"/><path d="M8 20h8"/></svg>
              </div>
              <h3 className="text-xl font-normal mb-4">
                <EditableText section="philosophiePage" field="workflow2Title" tag="span" />
              </h3>
              <p className="text-slate-600">
                <EditableText section="philosophiePage" field="workflow2Desc" multiline tag="span" />
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-[#e5e7eb] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ed9f7b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-normal mb-4">
                <EditableText section="philosophiePage" field="workflow3Title" tag="span" />
              </h3>
              <p className="text-slate-600">
                <EditableText section="philosophiePage" field="workflow3Desc" multiline tag="span" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
