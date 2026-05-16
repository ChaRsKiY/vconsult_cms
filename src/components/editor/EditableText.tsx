'use client'
import { useState, useRef, useEffect } from 'react'
import { useEditor } from './EditorContext'

type Props = {
  section: string
  field: string
  className?: string
  multiline?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  dark?: boolean
  fallback?: string
}

export function EditableText({ section, field, className = '', multiline = false, tag: Tag = 'span', dark = false, fallback = '' }: Props) {
  const { content, lang, updateField } = useEditor()
  const value = (content[lang] as Record<string, Record<string, string>>)[section]?.[field] ?? ''
  const displayValue = value || fallback
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(displayValue)
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement>(null)

  useEffect(() => { if (!editing) setDraft(displayValue) }, [displayValue, editing])
  useEffect(() => { if (editing) ref.current?.focus() }, [editing])

  function commit() {
    setEditing(false)
    if (draft !== value) updateField(section, field, draft)
  }

  if (editing) {
    const inputClass = dark
      ? `w-full bg-[#1e1e1e] border-2 border-primary/60 rounded-lg px-2 py-1 outline-none resize-none text-white font-inherit leading-inherit ${className}`
      : `w-full bg-white border-2 border-primary/60 rounded-lg px-2 py-1 outline-none resize-none text-carbon font-inherit leading-inherit ${className}`
    const fillColor = dark ? 'white' : '#1a1a1a'
    if (multiline) {
      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          rows={Math.max(3, draft.split('\n').length + 1)}
          className={inputClass}
          style={{ WebkitTextFillColor: fillColor }}
        />
      )
    }
    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        className={inputClass}
        style={{ WebkitTextFillColor: fillColor }}
      />
    )
  }

  const hoverClass = dark
    ? 'ring-1 ring-white/10 hover:ring-2 hover:ring-white/30 hover:bg-white/10'
    : 'hover:ring-2 hover:ring-primary/30 hover:bg-primary/5'

  return (
    <Tag
      onClick={() => setEditing(true)}
      title="Klicken zum Bearbeiten"
      className={`cursor-text rounded transition-all ${hoverClass} ${className}`}
    >
      {displayValue || <span className={`italic text-sm ${dark ? 'text-white/50' : 'opacity-30'}`}>Leer</span>}
    </Tag>
  )
}
