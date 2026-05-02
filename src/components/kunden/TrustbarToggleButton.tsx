'use client'
import { useTransition } from 'react'
import { toggleTrustbar } from '@/actions/kunden'

export function TrustbarToggleButton({ id, showInTrustbar }: { id: string; showInTrustbar: boolean }) {
  const [pending, startTransition] = useTransition()

  function handleClick() {
    startTransition(async () => {
      await toggleTrustbar(id, !showInTrustbar)
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      title={showInTrustbar ? 'Aus Trustbar entfernen' : 'In Trustbar anzeigen'}
      className={`flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded transition-colors shrink-0 ${
        showInTrustbar
          ? 'bg-primary/10 text-primary hover:bg-primary/20'
          : 'bg-black/5 text-ash/50 hover:bg-black/10 hover:text-ash'
      } disabled:opacity-50`}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      TB
    </button>
  )
}
