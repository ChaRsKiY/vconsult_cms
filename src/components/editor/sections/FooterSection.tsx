'use client'
import { EditableText } from '../EditableText'
import { useEditor } from '../EditorContext'

const FOOTER_NAV = {
  de: {
    leistungen: { title: 'Leistungen', links: ['SAP Logistik', 'Outsourcing', 'MBaIT-Modell'] },
    unternehmen: { title: 'Unternehmen', links: ['Über uns', 'News', 'Kunden'] },
    rechtliches: { title: 'Rechtliches', links: ['Kontakt', 'Impressum', 'Datenschutz'] },
    partner: { title: 'Partner', links: ['e-learning-consulting.com', 'dcg.at', 'curo.at', 'concircle.com', 'cadaxo.com'] },
  },
  en: {
    leistungen: { title: 'Services', links: ['SAP Logistics', 'Outsourcing', 'MBaIT Model'] },
    unternehmen: { title: 'Company', links: ['About us', 'News', 'Clients'] },
    rechtliches: { title: 'Legal', links: ['Contact', 'Imprint', 'Privacy Policy'] },
    partner: { title: 'Partner', links: ['e-learning-consulting.com', 'dcg.at', 'curo.at', 'concircle.com', 'cadaxo.com'] },
  },
}

export function FooterSection() {
  const { lang } = useEditor()
  const nav = FOOTER_NAV[lang]

  return (
    <footer className="border-t border-[#e5e7eb] bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          {/* Brand & Contact */}
          <div className="max-w-sm shrink-0">
            <img src="/vconsult_group.png" alt="vconsult" className="h-8 w-auto mb-6" />
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              <EditableText section="footer" field="description" multiline tag="span" />
            </p>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                {lang === 'de' ? 'Kontakt' : 'Contact'}
              </h5>
              <address className="not-italic space-y-2 text-sm text-slate-500">
                <p className="font-bold text-slate-700">vconsult GmbH</p>
                <p>Vienna Airport Conference & Innovation Center,<br />Towerstraße 3, 1300 Wien-Flughafen</p>
                <p>Telefon: <span className="text-[#f29202]">+43 664 533 21 64</span></p>
                <p>E-Mail: <span className="text-[#f29202]">office@vconsult.at</span></p>
                <p className="pt-2">UID: ATU57526546</p>
              </address>
            </div>
          </div>

          {/* Navigation Grid — static */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 grow xl:ml-16">
            {Object.values(nav).map((col) => (
              <div key={col.title}>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 select-none" style={{ fontFamily: 'var(--font-display)' }}>
                  {col.title}
                </h5>
                <ul className="space-y-4 text-sm text-slate-500">
                  {col.links.map((link) => (
                    <li key={link} className="select-none">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[#e5e7eb] pt-8 text-center text-xs text-slate-400">
          <EditableText section="footer" field="copyright" tag="span" />
        </div>
      </div>
    </footer>
  )
}
