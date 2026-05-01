'use client'
import { useState, useEffect, useTransition } from 'react'
import { createPortal } from 'react-dom'
import { listCloudinaryResources, type CloudinaryResource } from '@/actions/cloudinary'

type Props = {
  resourceType: 'image' | 'video'
  onSelect: (url: string) => void
  onClose: () => void
}

export function CloudinaryGallery({ resourceType, onSelect, onClose }: Props) {
  const [resources, setResources] = useState<CloudinaryResource[]>([])
  const [nextCursor, setNextCursor] = useState<string | undefined>()
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    startTransition(async () => {
      try {
        const result = await listCloudinaryResources(resourceType)
        setResources(result.resources)
        setNextCursor(result.next_cursor)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Fehler beim Laden')
      }
    })
  }, [resourceType])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  function loadMore() {
    startTransition(async () => {
      try {
        const result = await listCloudinaryResources(resourceType, nextCursor)
        setResources((prev) => [...prev, ...result.resources])
        setNextCursor(result.next_cursor)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Fehler beim Laden')
      }
    })
  }

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/8">
          <h2 className="font-semibold text-carbon text-sm">
            {resourceType === 'image' ? 'Bilder' : 'Videos'} aus Cloudinary
          </h2>
          <button onClick={onClose} className="text-ash hover:text-carbon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {error && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4">{error}</p>
          )}
          {pending && resources.length === 0 && (
            <div className="flex items-center justify-center py-16 text-ash text-sm">Wird geladen…</div>
          )}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {resources.map((r) => (
              <button
                key={r.public_id}
                onClick={() => { onSelect(r.secure_url); onClose() }}
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors group"
                title={r.public_id}
              >
                {r.resource_type === 'video' ? (
                  <div className="relative w-full h-full">
                    <img
                      src={r.secure_url.replace('/video/upload/', '/video/upload/w_200,h_200,c_fill,so_auto/').replace(/\.[^.]+$/, '.jpg')}
                      alt={r.public_id}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-end justify-start p-1.5">
                      <span className="text-[0.55rem] font-semibold uppercase bg-black/60 text-white px-1.5 py-0.5 rounded">
                        {r.format}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={r.secure_url.replace('/upload/', '/upload/w_200,h_200,c_fill/')}
                    alt={r.public_id}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </button>
            ))}
          </div>
          {nextCursor && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMore}
                disabled={pending}
                className="text-xs font-semibold border border-black/10 px-4 py-2 rounded-lg hover:bg-parchment disabled:opacity-50"
              >
                {pending ? '…' : 'Mehr laden'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
