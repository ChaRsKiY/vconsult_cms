'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import { useEffect, useRef, useCallback } from 'react'

type Props = {
  name: string
  defaultValue?: string
}

type ToolbarBtnProps = {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
}

function ToolbarBtn({ onClick, active, title, children }: ToolbarBtnProps) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => { e.preventDefault(); onClick() }}
      className={`h-7 min-w-[28px] px-1.5 rounded text-xs font-semibold transition-colors ${
        active
          ? 'bg-primary/15 text-primary'
          : 'text-ash hover:text-carbon hover:bg-black/6'
      }`}
    >
      {children}
    </button>
  )
}

function Divider() {
  return <div className="w-px h-4 bg-black/10 mx-0.5 self-center" />
}

export function RichTextEditor({ name, defaultValue }: Props) {
  const hiddenRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-primary underline' } }),
    ],
    content: defaultValue ?? '',
    immediatelyRender: false,
    onUpdate({ editor }) {
      if (hiddenRef.current) hiddenRef.current.value = editor.getHTML()
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[220px] px-4 py-3 text-sm leading-relaxed text-carbon',
      },
    },
  })

  useEffect(() => {
    if (editor && hiddenRef.current) {
      hiddenRef.current.value = editor.getHTML()
    }
  }, [editor])

  const setLink = useCallback(() => {
    if (!editor) return
    const prev = editor.getAttributes('link').href ?? ''
    const url = window.prompt('URL', prev)
    if (url === null) return
    if (url === '') { editor.chain().focus().unsetLink().run(); return }
    editor.chain().focus().setLink({ href: url }).run()
  }, [editor])

  if (!editor) return null

  return (
    <div className="border border-black/10 rounded-lg overflow-hidden bg-white focus-within:border-primary/40 focus-within:shadow-[0_0_0_3px_rgba(242,146,2,0.12)] transition-shadow">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-black/7 bg-snow">
        <ToolbarBtn title="Fett" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
          <strong>B</strong>
        </ToolbarBtn>
        <ToolbarBtn title="Kursiv" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <em>I</em>
        </ToolbarBtn>
        <ToolbarBtn title="Unterstrichen" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <span className="underline">U</span>
        </ToolbarBtn>

        <Divider />

        <ToolbarBtn title="Überschrift 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </ToolbarBtn>
        <ToolbarBtn title="Überschrift 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </ToolbarBtn>

        <Divider />

        <ToolbarBtn title="Aufzählung" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>
        </ToolbarBtn>
        <ToolbarBtn title="Nummerierte Liste" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
        </ToolbarBtn>

        <Divider />

        <ToolbarBtn title="Zitat" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        </ToolbarBtn>
        <ToolbarBtn title="Link" active={editor.isActive('link')} onClick={setLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </ToolbarBtn>

        <Divider />

        <ToolbarBtn title="Rückgängig" onClick={() => editor.chain().focus().undo().run()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
        </ToolbarBtn>
        <ToolbarBtn title="Wiederholen" onClick={() => editor.chain().focus().redo().run()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
        </ToolbarBtn>
      </div>

      {/* Editor content */}
      <div className="[&_.tiptap_h2]:text-lg [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:mt-4 [&_.tiptap_h2]:mb-2 [&_.tiptap_h3]:text-base [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1.5 [&_.tiptap_p]:mb-2 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-5 [&_.tiptap_ul]:mb-2 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-5 [&_.tiptap_ol]:mb-2 [&_.tiptap_blockquote]:border-l-4 [&_.tiptap_blockquote]:border-primary/30 [&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:text-ash [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:my-2 [&_.tiptap_strong]:font-semibold [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline">
        <EditorContent editor={editor} />
      </div>

      <input ref={hiddenRef} type="hidden" name={name} defaultValue={defaultValue} />
    </div>
  )
}
