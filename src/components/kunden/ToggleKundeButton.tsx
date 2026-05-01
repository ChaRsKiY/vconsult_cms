'use client'
import { useTransition } from 'react'
import { toggleKunde } from '@/actions/kunden'

export function ToggleKundeButton({ id, active }: { id: string; active: boolean }) {
  const [pending, startTransition] = useTransition()

  function handleClick() {
    startTransition(async () => {
      await toggleKunde(id, !active)
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      title={active ? 'Deaktivieren' : 'Aktivieren'}
      className={`w-8 h-5 rounded-full transition-colors relative shrink-0 ${active ? 'bg-primary' : 'bg-black/15'} disabled:opacity-50`}
    >
      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${active ? 'right-0.5' : 'left-0.5'}`} />
    </button>
  )
}
