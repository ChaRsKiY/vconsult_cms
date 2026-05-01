'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { uploadToCloudinary } from '@/lib/cloudinary-client'
import { createKunde } from '@/actions/kunden'
import { CloudinaryGallery } from '@/components/CloudinaryGallery'

type UploadState = {
  status: 'idle' | 'uploading' | 'done' | 'error'
  progress: number
  url: string | null
  error: string | null
}

const IDLE: UploadState = { status: 'idle', progress: 0, url: null, error: null }

export function AddKundeForm() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [logo, setLogo] = useState<UploadState>(IDLE)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setLogo({ status: 'uploading', progress: 0, url: null, error: null })
    try {
      const url = await uploadToCloudinary(file, (pct) => setLogo((s) => ({ ...s, progress: pct })))
      setLogo({ status: 'done', progress: 100, url, error: null })
    } catch (err) {
      setLogo({ status: 'error', progress: 0, url: null, error: err instanceof Error ? err.message : 'Upload fehlgeschlagen' })
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (logo.status === 'uploading') return
    const raw = new FormData(e.currentTarget)
    const fd = new FormData()
    for (const [key, value] of raw.entries()) {
      if (typeof value === 'string') fd.append(key, value)
    }
    if (logo.url) fd.set('logo_url', logo.url)

    setSubmitting(true)
    setSubmitError(null)
    try {
      await createKunde(fd)
      formRef.current?.reset()
      setLogo(IDLE)
      router.refresh()
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Fehler beim Speichern')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">Name</label>
            <input name="name" required className="input" placeholder="Unternehmensname" />
          </div>
          <div>
            <label className="label">Typ</label>
            <select name="type" className="input" defaultValue="kunde">
              <option value="kunde">Kunde</option>
              <option value="partner">Partner</option>
            </select>
          </div>
        </div>

        <div>
          <label className="label">Branche / Beschreibung</label>
          <input name="industry" className="input" placeholder="z.B. SAP Consulting, Finance…" />
        </div>

        <div>
          <label className="label">Logo hochladen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            disabled={logo.status === 'uploading'}
            className="input-file"
          />
          {logo.status === 'uploading' && (
            <div className="mt-2">
              <div className="h-1.5 bg-black/8 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-150" style={{ width: `${logo.progress}%` }} />
              </div>
              <p className="text-xs text-ash mt-1">{logo.progress}% hochgeladen…</p>
            </div>
          )}
          {logo.status === 'done' && logo.url && (
            <div className="mt-2 flex items-center gap-3">
              <img src={logo.url} alt="Logo Vorschau" className="h-8 w-24 object-contain rounded border border-black/8 bg-parchment p-1" />
              <p className="text-xs text-green-600 font-semibold">✓ Erfolgreich hochgeladen</p>
              <button type="button" onClick={() => setLogo(IDLE)} className="text-xs text-ash hover:text-red-500">Entfernen</button>
            </div>
          )}
          {logo.status === 'error' && (
            <p className="text-xs text-red-500 mt-1">{logo.error}</p>
          )}
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="text-xs text-ash hover:text-carbon font-semibold underline mt-1.5"
          >
            Aus Galerie wählen
          </button>
        </div>

        <div>
          <label className="label">Website URL</label>
          <input name="website_url" type="url" className="input" placeholder="https://unternehmen.com" />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="active" defaultChecked className="w-4 h-4 accent-primary" />
          <span className="text-sm font-semibold text-carbon">Aktiv (auf Website anzeigen)</span>
        </label>

        {submitError && (
          <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={submitting || logo.status === 'uploading'}
          className="btn-primary self-start disabled:opacity-50"
        >
          {submitting ? 'Wird gespeichert…' : logo.status === 'uploading' ? 'Upload läuft…' : 'Hinzufügen'}
        </button>
      </form>

      {galleryOpen && (
        <CloudinaryGallery
          resourceType="image"
          onSelect={(url) => { setLogo({ status: 'done', progress: 100, url, error: null }); setGalleryOpen(false) }}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  )
}
