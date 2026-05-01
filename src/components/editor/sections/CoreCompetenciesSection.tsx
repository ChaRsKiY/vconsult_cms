'use client'
import { EditableText } from '../EditableText'

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8]

export function CoreCompetenciesSection() {
  return (
    <section className="py-32 bg-white" id="core-competencies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-normal text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <EditableText section="coreCompetencies" field="title" tag="span" />
          </h2>
          <div className="h-1 w-20 bg-[#f29202] rounded-full mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ITEMS.map((n) => (
            <div key={n} className="space-y-3">
              <h3 className="text-lg font-normal text-slate-900 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f29202] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                <EditableText section="coreCompetencies" field={`item${n}Title`} tag="span" />
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                <EditableText section="coreCompetencies" field={`item${n}Desc`} multiline tag="span" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
