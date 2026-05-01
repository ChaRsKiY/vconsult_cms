import { createSupabaseServerClient } from '@/lib/supabase'
import { AddKundeForm } from '@/components/kunden/AddKundeForm'
import { SortableKundenList } from '@/components/kunden/SortableKundenList'
import { EditorHeader } from '@/components/editor/EditorHeader'
import type { Kunde } from '@/types/database'

export default async function KundenPage() {
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('kunden').select('*').order('display_order')
  const kunden = (data ?? []) as Kunde[]

  return (
    <>
      <EditorHeader />
      <div className="p-4 sm:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-carbon mb-6">Kunden</h1>
        <div className="card-light p-6 mb-8">
          <h2 className="text-sm font-semibold text-carbon mb-5">Neuen Kunden hinzufügen</h2>
          <AddKundeForm />
        </div>
        <SortableKundenList kunden={kunden} />
      </div>
    </>
  )
}
