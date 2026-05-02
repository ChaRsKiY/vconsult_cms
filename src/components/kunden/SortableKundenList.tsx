'use client'
import { useState, useTransition, useEffect } from 'react'
import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { updateKundenOrder } from '@/actions/kunden'
import { DeleteKundeButton } from './DeleteKundeButton'
import { ToggleKundeButton } from './ToggleKundeButton'
import { TrustbarToggleButton } from './TrustbarToggleButton'
import type { Kunde } from '@/types/database'

function SortableKundeItem({ kunde }: { kunde: Kunde }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: kunde.id })
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.4 : 1 }

  return (
    <div ref={setNodeRef} style={style} className="card-light p-4 flex items-center gap-3">
      <button
        {...attributes}
        {...listeners}
        className="p-1 text-ash/40 hover:text-ash cursor-grab active:cursor-grabbing touch-none shrink-0"
        aria-label="Drag to reorder"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </button>

      {/* Logo */}
      <div className="w-10 h-10 rounded-lg border border-black/8 bg-parchment flex items-center justify-center shrink-0 overflow-hidden">
        {kunde.logo_url
          ? <img src={kunde.logo_url} alt={kunde.name} className="w-full h-full object-contain p-1" />
          : <span className="text-[10px] text-ash/40 font-bold">{kunde.name.charAt(0)}</span>
        }
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-carbon text-sm">{kunde.name}</p>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${kunde.type === 'partner' ? 'bg-blue-50 text-blue-500' : 'bg-primary/8 text-primary'}`}>
            {kunde.type}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-0.5">
          {kunde.industry && <p className="text-xs text-ash">{kunde.industry}</p>}
          {kunde.website_url && (
            <a href={kunde.website_url} target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-ash/50 hover:text-primary truncate max-w-[140px]"
              onClick={(e) => e.stopPropagation()}>
              {kunde.website_url.replace(/^https?:\/\//, '')}
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <TrustbarToggleButton id={kunde.id} showInTrustbar={kunde.show_in_trustbar} />
        <ToggleKundeButton id={kunde.id} active={kunde.active} />
        <DeleteKundeButton id={kunde.id} />
      </div>
    </div>
  )
}

export function SortableKundenList({ kunden: initialKunden }: { kunden: Kunde[] }) {
  const [kunden, setKunden] = useState(initialKunden)
  const [pending, startTransition] = useTransition()

  useEffect(() => { setKunden(initialKunden) }, [initialKunden])

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) return
    const oldIndex = kunden.findIndex((k) => k.id === active.id)
    const newIndex = kunden.findIndex((k) => k.id === over.id)
    const reordered = arrayMove(kunden, oldIndex, newIndex)
    setKunden(reordered)
    startTransition(() => updateKundenOrder(reordered.map((k) => k.id)))
  }

  const clients = kunden.filter((k) => k.type === 'kunde')
  const partners = kunden.filter((k) => k.type === 'partner')

  return (
    <div className="flex flex-col gap-6">
      <DndContext id="kunden-dnd" collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={kunden.map((k) => k.id)} strategy={verticalListSortingStrategy}>
          {clients.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-carbon mb-3">Kunden ({clients.length})</h2>
              <div className="flex flex-col gap-2">
                {clients.map((k) => <SortableKundeItem key={k.id} kunde={k} />)}
              </div>
            </div>
          )}
          {partners.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-carbon mb-3">Partner ({partners.length})</h2>
              <div className="flex flex-col gap-2">
                {partners.map((k) => <SortableKundeItem key={k.id} kunde={k} />)}
              </div>
            </div>
          )}
        </SortableContext>
      </DndContext>
      {kunden.length === 0 && (
        <p className="text-ash text-sm text-center py-12">Noch keine Einträge vorhanden.</p>
      )}
      {pending && <p className="text-xs text-ash text-center">Reihenfolge wird gespeichert…</p>}
    </div>
  )
}
