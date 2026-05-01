'use client'
import { EditableText } from '../EditableText'

export function CtaSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full pointer-events-none" style={{ background: 'rgba(242,146,2,0.05)', filter: 'blur(48px)' }} />
      <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-normal text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
          <EditableText section="cta" field="title" tag="span" />
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
          <EditableText section="cta" field="subtitle" multiline tag="span" />
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <span className="rounded-xl font-bold shadow-lg inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 text-base" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="cta" field="ctaPrimary" tag="span" />
          </span>
          <span className="rounded-xl font-bold inline-flex items-center justify-center gap-2 border border-[#f29202] text-[#f29202] bg-white px-8 py-4 text-base" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="cta" field="ctaSecondary" tag="span" />
          </span>
        </div>
      </div>
    </section>
  )
}
