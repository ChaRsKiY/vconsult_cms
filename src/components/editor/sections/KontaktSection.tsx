'use client'
import { EditableText } from '../EditableText'

export function KontaktSection() {
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
              <EditableText section="kontakt" field="breadcrumb" tag="span" />
            </span>
          </nav>
          <h1 className="text-5xl font-normal tracking-tight text-slate-900 mb-6">
            <EditableText section="kontakt" field="title" tag="span" />
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            <EditableText section="kontakt" field="description" multiline tag="span" />
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-normal text-slate-900 mb-4">
                <EditableText section="kontakt" field="heading" tag="span" />
              </h2>
              <p className="text-slate-600">
                <EditableText section="kontakt" field="subheading" tag="span" />
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f29202]/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-slate-900">
                    <EditableText section="kontakt" field="addressTitle" tag="span" />
                  </h4>
                  <p className="mt-2 text-slate-600">
                    <EditableText section="kontakt" field="addressLine1" tag="span" /><br />
                    <EditableText section="kontakt" field="addressLine2" tag="span" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f29202]/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.97 3.4 2 2 0 0 1 3.96 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-slate-900">
                    <EditableText section="kontakt" field="phoneTitle" tag="span" />
                  </h4>
                  <p className="mt-2 text-slate-600">+43 664 533 21 64</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f29202]/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#f29202]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-slate-900">
                    <EditableText section="kontakt" field="emailTitle" tag="span" />
                  </h4>
                  <a href="mailto:office@vconsult.at" className="mt-2 text-[#f29202] hover:underline font-medium inline-block">office@vconsult.at</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#e5e7eb] p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-100">
            <h3 className="text-2xl font-normal text-slate-900 mb-8">
              <EditableText section="kontakt" field="formTitle" tag="span" />
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    <EditableText section="kontakt" field="firstNameLabel" tag="span" />
                  </label>
                  <div className="h-11 rounded-xl border border-[#e5e7eb] bg-[#f8f7f5] px-4 flex items-center text-sm text-slate-400">
                    <EditableText section="kontakt" field="firstNamePlaceholder" tag="span" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    <EditableText section="kontakt" field="lastNameLabel" tag="span" />
                  </label>
                  <div className="h-11 rounded-xl border border-[#e5e7eb] bg-[#f8f7f5] px-4 flex items-center text-sm text-slate-400">
                    <EditableText section="kontakt" field="lastNamePlaceholder" tag="span" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <EditableText section="kontakt" field="emailLabel" tag="span" />
                </label>
                <div className="h-11 rounded-xl border border-[#e5e7eb] bg-[#f8f7f5] px-4 flex items-center text-sm text-slate-400">
                  <EditableText section="kontakt" field="emailPlaceholder" tag="span" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <EditableText section="kontakt" field="messageLabel" tag="span" />
                </label>
                <div className="h-28 rounded-xl border border-[#e5e7eb] bg-[#f8f7f5] px-4 py-3 text-sm text-slate-400">
                  <EditableText section="kontakt" field="messagePlaceholder" tag="span" />
                </div>
              </div>
              <button className="rounded-xl font-bold bg-[#f29202] text-white px-8 py-4 text-base w-full flex items-center justify-center gap-2">
                <EditableText section="kontakt" field="submitBtn" tag="span" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 w-full bg-slate-100 border-t border-[#e5e7eb] flex items-center justify-center text-slate-400 text-sm">
        Google Maps — AirportCity Space, Wien
      </section>
    </div>
  )
}
