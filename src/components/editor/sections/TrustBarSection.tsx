'use client'
import { EditableText } from '../EditableText'

export function TrustBarSection() {
  return (
    <section className="border-y border-[#e5e7eb] py-12" style={{ background: '#f8f7f5' }}>
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
          <EditableText section="trustBar" field="label" tag="span" />
        </p>
        <div className="flex flex-wrap items-center justify-around gap-12 opacity-50 grayscale">
          {[1, 2, 3, 4, 5].map((n) => (
            <EditableText
              key={n}
              section="trustBar"
              field={`logo${n}`}
              tag="span"
              className="text-xl font-bold text-slate-400 [font-family:var(--font-display)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
