'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { BothLangs, Lang } from '@/types/content'

type EditorContextType = {
  content: BothLangs
  lang: Lang
  setLang: (l: Lang) => void
  updateField: (section: string, key: string, value: string) => void
  updateFieldBothLangs: (section: string, key: string, value: string) => void
  isDirty: boolean
  setDirty: (v: boolean) => void
}

const EditorContext = createContext<EditorContextType | null>(null)

export function EditorProvider({
  initialContent,
  children,
}: {
  initialContent: BothLangs
  children: ReactNode
}) {
  const [content, setContent] = useState<BothLangs>(initialContent)
  const [lang, setLang] = useState<Lang>('de')
  const [isDirty, setDirty] = useState(false)

  const updateField = useCallback(
    (section: string, key: string, value: string) => {
      setContent((prev) => ({
        ...prev,
        [lang]: {
          ...prev[lang],
          [section]: {
            ...(prev[lang] as Record<string, Record<string, string>>)[section],
            [key]: value,
          },
        },
      }))
      setDirty(true)
    },
    [lang],
  )

  const updateFieldBothLangs = useCallback(
    (section: string, key: string, value: string) => {
      setContent((prev) => ({
        de: { ...prev.de, [section]: { ...(prev.de as Record<string, Record<string, string>>)[section], [key]: value } },
        en: { ...prev.en, [section]: { ...(prev.en as Record<string, Record<string, string>>)[section], [key]: value } },
      }))
      setDirty(true)
    },
    [],
  )

  return (
    <EditorContext.Provider value={{ content, lang, setLang, updateField, updateFieldBothLangs, isDirty, setDirty }}>
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error('useEditor must be inside EditorProvider')
  return ctx
}

export function useEditorOptional() {
  return useContext(EditorContext)
}
