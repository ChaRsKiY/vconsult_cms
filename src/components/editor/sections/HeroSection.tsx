'use client'
import { EditableText } from '../EditableText'

export function HeroSection() {

  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(242,146,2,0.1)' }} />
        <div className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-full" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(242,146,2,0.1)' }} />
        <div className="absolute top-1/2 right-10 h-16 w-16 rounded-full" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(242,146,2,0.1)' }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-16 mx-auto text-center flex flex-col items-center">
        <EditableText
          section="hero"
          field="badge"
          tag="span"
          className="inline-block px-4 py-2 border border-[#f29202]/20 rounded-full bg-[#f29202]/5 text-[#f29202] text-xs font-bold tracking-widest uppercase mb-8 [font-family:var(--font-display)]"
        />

        <h1 className="font-normal text-slate-900 mb-7 leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontFamily: 'var(--font-display)' }}>
          <EditableText section="hero" field="titlePart1" tag="span" className="[font-family:inherit]" />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
            <EditableText section="hero" field="titlePart2" tag="span" className="[font-family:inherit]" />
          </span>
          <br className="hidden sm:block" />
          <EditableText section="hero" field="titlePart3" tag="span" className="[font-family:inherit]" />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)' }}>
            <EditableText section="hero" field="titlePart4" tag="span" className="[font-family:inherit]" />
          </span>
        </h1>

        <EditableText
          section="hero"
          field="description"
          tag="p"
          multiline
          className="mt-6 text-lg md:text-xl font-normal text-slate-600 leading-relaxed max-w-2xl text-center"
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center">
          <button className="rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 text-white px-8 py-4 text-base" style={{ background: 'linear-gradient(90deg, #ed9f7b 0%, #f29202 100%)', fontFamily: 'var(--font-display)' }}>
            <EditableText section="hero" field="ctaPrimary" tag="span" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button className="rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 text-base" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="hero" field="ctaSecondary" tag="span" />
          </button>
        </div>
      </div>
    </section>
  )
}
