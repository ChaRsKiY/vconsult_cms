'use client'
import { EditorProvider } from './EditorContext'
import { EditorHeader } from './EditorHeader'
import type { BothLangs } from '@/types/content'

import { NavSection } from './sections/NavSection'
import { KontaktSection } from './sections/KontaktSection'
import { FooterSection } from './sections/FooterSection'

type Props = {
  initialContent: BothLangs
}

export function KontaktCanvas({ initialContent }: Props) {
  return (
    <EditorProvider initialContent={initialContent}>
      <EditorHeader />
      <div className="bg-white site-preview">
        <NavSection />
        <KontaktSection />
        <FooterSection />
      </div>
    </EditorProvider>
  )
}
