'use client'

interface Props {
  action: () => Promise<void>
}

export function DeleteButton({ action }: Props) {
  return (
    <form action={action}>
      <button
        type="submit"
        onClick={(e) => { if (!confirm('Anfrage löschen?')) e.preventDefault() }}
        className="text-xs font-semibold border border-red-200 text-red-400 px-2.5 py-1 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap"
      >
        Löschen
      </button>
    </form>
  )
}
