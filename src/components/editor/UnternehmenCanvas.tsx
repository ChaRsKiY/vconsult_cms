'use client'
import { EditorProvider } from './EditorContext'
import { EditorHeader } from './EditorHeader'
import type { BothLangs } from '@/types/content'

import { NavSection } from './sections/NavSection'
import { UnternehmenSection } from './sections/UnternehmenSection'
import { FooterSection } from './sections/FooterSection'

type Props = {
  initialContent: BothLangs
}

export function UnternehmenCanvas({ initialContent }: Props) {
  return (
    <EditorProvider initialContent={initialContent}>
      <EditorHeader />
      <div className="bg-white site-preview">
        <NavSection />
        <UnternehmenSection />
        <FooterSection />
      </div>
    </EditorProvider>
  )
}
