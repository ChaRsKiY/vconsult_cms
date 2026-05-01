'use client'
import { EditorProvider } from './EditorContext'
import { EditorHeader } from './EditorHeader'
import type { BothLangs } from '@/types/content'
import type { Kunde } from '@/types/database'

import { NavSection } from './sections/NavSection'
import { KundenSeiteSection } from './sections/KundenSeiteSection'
import { FooterSection } from './sections/FooterSection'

type Props = { initialContent: BothLangs; kunden: Kunde[] }

export function KundenSeiteCanvas({ initialContent, kunden }: Props) {
  return (
    <EditorProvider initialContent={initialContent}>
      <EditorHeader />
      <div className="bg-white site-preview">
        <NavSection />
        <KundenSeiteSection kunden={kunden} />
        <FooterSection />
      </div>
    </EditorProvider>
  )
}
