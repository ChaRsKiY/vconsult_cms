'use client'
import { EditableText } from '../EditableText'

export function TrustBarSection() {
  return (
    <section className="border-y border-[#e5e7eb] py-12" style={{ background: '#f8f7f5' }}>
      <div className="mx-auto max-w-7xl px-6">
        <EditableText
          section="trustBar"
          field="label"
          tag="p"
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 [font-family:var(--font-display)]"
        />
        <p className="text-center text-xs text-slate-400 italic">
          Angezeigte Unternehmen werden über{' '}
          <a href="/kunden" className="underline hover:text-slate-600">Kunden → Trustbar</a>
          {' '}verwaltet
        </p>
      </div>
    </section>
  )
}
