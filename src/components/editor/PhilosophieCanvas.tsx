'use client'
import { EditorProvider } from './EditorContext'
import { EditorHeader } from './EditorHeader'
import type { BothLangs } from '@/types/content'

import { NavSection } from './sections/NavSection'
import { PhilosophiePageSection } from './sections/PhilosophiePageSection'
import { FooterSection } from './sections/FooterSection'

type Props = { initialContent: BothLangs }

export function PhilosophieCanvas({ initialContent }: Props) {
  return (
    <EditorProvider initialContent={initialContent}>
      <EditorHeader />
      <div className="bg-white site-preview">
        <NavSection />
        <PhilosophiePageSection />
        <FooterSection />
      </div>
    </EditorProvider>
  )
}
