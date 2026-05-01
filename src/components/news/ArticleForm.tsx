'use client'
import { useState, useActionState } from 'react'
import { uploadToCloudinary } from '@/lib/cloudinary-client'
import { CloudinaryGallery } from '@/components/CloudinaryGallery'
import { RichTextEditor } from '@/components/news/RichTextEditor'
import type { Article } from '@/types/database'

type Props = {
  action: (formData: FormData) => Promise<void>
  defaultValues?: Partial<Article>
  submitLabel?: string
}

type State = { error?: string }

function wrapAction(action: (fd: FormData) => Promise<void>) {
  return async (_: State, fd: FormData): Promise<State> => {
    try {
      await action(fd)
      return {}
    } catch (e: unknown) {
      const digest = (e as { digest?: string })?.digest ?? ''
      if (digest.startsWith('NEXT_REDIRECT')) throw e
      return { error: e instanceof Error ? e.message : 'Fehler beim Speichern' }
    }
  }
}

type UploadState = {
  status: 'idle' | 'uploading' | 'done' | 'error'
  progress: number
  url: string | null
  error: string | null
}

export function ArticleForm({ action, defaultValues, submitLabel = 'Speichern' }: Props) {
  const [state, formAction, pending] = useActionState(wrapAction(action), {})
  const [imageUrl, setImageUrl] = useState(defaultValues?.image_url ?? '')
  const [upload, setUpload] = useState<UploadState>({ status: 'idle', progress: 0, url: null, error: null })
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [title, setTitle] = useState(defaultValues?.title ?? '')

  function slugify(text: string) {
    return text.toLowerCase()
      .replace(/[äöüß]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[c] ?? c)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  async function handleImageFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUpload({ status: 'uploading', progress: 0, url: null, error: null })
    try {
      const url = await uploadToCloudinary(file, (pct) => setUpload((s) => ({ ...s, progress: pct })))
      setUpload({ status: 'done', progress: 100, url, error: null })
      setImageUrl(url)
    } catch (err) {
      setUpload({ status: 'error', progress: 0, url: null, error: err instanceof Error ? err.message : 'Upload fehlgeschlagen' })
    }
  }

  const displayImageUrl = upload.url ?? imageUrl

  return (
    <>
      <form action={formAction} className="flex flex-col gap-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Titel</label>
            <input
              name="title"
              required
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Slug</label>
            <input
              name="slug"
              required
              className="input"
              defaultValue={defaultValues?.slug}
              placeholder={slugify(title) || 'mein-artikel-slug'}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Kategorie</label>
            <input name="category" className="input" defaultValue={defaultValues?.category} />
          </div>
          <div>
            <label className="label">Tags (kommagetrennt)</label>
            <input name="tags" className="input" defaultValue={defaultValues?.tags?.join(', ')} placeholder="SAP, Outsourcing, Consulting" />
          </div>
        </div>

        <div>
          <label className="label">Datum</label>
          <input
            name="date"
            type="date"
            required
            className="input"
            defaultValue={defaultValues?.date ?? new Date().toISOString().slice(0, 10)}
          />
        </div>

        <div>
          <label className="label">Kurzbeschreibung</label>
          <textarea
            name="short_description"
            rows={3}
            className="input resize-none"
            defaultValue={defaultValues?.short_description}
          />
        </div>

        <div>
          <label className="label">Inhalt</label>
          <RichTextEditor name="content" defaultValue={defaultValues?.content ?? ''} />
        </div>

        {/* Image */}
        <div>
          <label className="label">Titelbild URL</label>
          <input
            name="image_url"
            className="input mb-2"
            value={displayImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
          />
          <div className="flex items-center gap-3">
            <label className="text-xs text-ash hover:text-carbon font-semibold underline cursor-pointer">
              Bild hochladen
              <input type="file" accept="image/*" className="sr-only" onChange={handleImageFile} disabled={upload.status === 'uploading'} />
            </label>
            <span className="text-ash/40">·</span>
            <button type="button" onClick={() => setGalleryOpen(true)} className="text-xs text-ash hover:text-carbon font-semibold underline">
              Aus Galerie wählen
            </button>
          </div>
          {upload.status === 'uploading' && (
            <div className="mt-2">
              <div className="h-1.5 bg-black/8 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-150" style={{ width: `${upload.progress}%` }} />
              </div>
              <p className="text-xs text-ash mt-1">{upload.progress}% hochgeladen…</p>
            </div>
          )}
          {upload.status === 'done' && <p className="text-xs text-green-600 mt-1.5 font-semibold">✓ Erfolgreich hochgeladen</p>}
          {upload.status === 'error' && <p className="text-xs text-red-500 mt-1.5">{upload.error}</p>}
          {displayImageUrl && (
            <img src={displayImageUrl} alt="Vorschau" className="mt-3 h-28 rounded-lg object-cover" />
          )}
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="published" defaultChecked={defaultValues?.published ?? false} className="w-4 h-4 accent-primary" />
          <span className="text-sm font-semibold text-carbon">Veröffentlicht</span>
        </label>

        {state.error && (
          <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending || upload.status === 'uploading'}
          className="btn-primary self-start disabled:opacity-50"
        >
          {pending ? 'Wird gespeichert…' : upload.status === 'uploading' ? 'Upload läuft…' : submitLabel}
        </button>
      </form>

      {galleryOpen && (
        <CloudinaryGallery
          resourceType="image"
          onSelect={(url) => { setImageUrl(url); setUpload({ status: 'done', progress: 100, url, error: null }); setGalleryOpen(false) }}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  )
}
