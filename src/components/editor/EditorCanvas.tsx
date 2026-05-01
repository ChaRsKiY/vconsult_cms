'use client'
import { EditorProvider } from './EditorContext'
import { EditorHeader } from './EditorHeader'
import type { BothLangs } from '@/types/content'
import type { Article } from '@/types/database'

import { NavSection } from './sections/NavSection'
import { HeroSection } from './sections/HeroSection'
import { TrustBarSection } from './sections/TrustBarSection'
import { PhilosophySection } from './sections/PhilosophySection'
import { ServicesSection } from './sections/ServicesSection'
import { CoreCompetenciesSection } from './sections/CoreCompetenciesSection'
import { BlogSection } from './sections/BlogSection'
import { CtaSection } from './sections/CtaSection'
import { FooterSection } from './sections/FooterSection'

type Props = {
  initialContent: BothLangs
  articles: Article[]
}

export function EditorCanvas({ initialContent, articles }: Props) {
  return (
    <EditorProvider initialContent={initialContent}>
      <EditorHeader />
      <div className="bg-white">
        <NavSection />
        <HeroSection />
        <TrustBarSection />
        <ServicesSection />
        <BlogSection articles={articles} />
        <CoreCompetenciesSection />
        <PhilosophySection />
        <CtaSection />
        <FooterSection />
      </div>
    </EditorProvider>
  )
}
