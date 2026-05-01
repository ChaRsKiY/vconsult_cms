'use client'
import { useTransition, useState } from 'react'
import { deleteKunde } from '@/actions/kunden'

export function DeleteKundeButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleClick() {
    if (!confirm('Kunden wirklich löschen?')) return
    setError(null)
    startTransition(async () => {
      try {
        await deleteKunde(id)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Fehler beim Löschen')
      }
    })
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={handleClick}
        disabled={pending}
        className="text-xs border border-red-200 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 font-semibold disabled:opacity-50"
      >
        {pending ? '…' : 'Löschen'}
      </button>
      {error && <p className="text-xs text-red-500 max-w-[140px] text-right">{error}</p>}
    </div>
  )
}
