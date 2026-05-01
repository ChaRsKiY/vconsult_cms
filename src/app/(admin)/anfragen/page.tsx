import { markRead, markUnread, deleteSubmission } from './actions'
import { DeleteButton } from './DeleteButton'
import { SubmissionsFilter } from './SubmissionsFilter'
import { createSupabaseServerClient } from '@/lib/supabase'
import { EditorHeader } from '@/components/editor/EditorHeader'
import { Suspense } from 'react'

const PAGE_SIZE = 10

type Submission = {
  id: string
  name: string
  company: string | null
  phone: string | null
  email: string
  interest: string | null
  message: string | null
  lang: string
  created_at: string
  read: boolean
  ip: string | null
  user_agent: string | null
  referrer: string | null
  browser_lang: string | null
  screen: string | null
}

export default async function AnfragenPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; lang?: string; q?: string; page?: string }>
}) {
  const { status, lang, q, page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1', 10) || 1)
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const supabase = await createSupabaseServerClient()

  let query = supabase
    .from('contact_submissions')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (status === 'unread') query = query.eq('read', false)
  else if (status === 'read') query = query.eq('read', true)
  if (lang && lang !== 'all') query = query.eq('lang', lang)
  if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`)

  const [{ data, count }, { count: unreadCount }, { count: allCount }] = await Promise.all([
    query.range(from, to),
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }).eq('read', false),
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
  ])

  const submissions = (data ?? []) as Submission[]
  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <>
    <EditorHeader />
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-semibold text-carbon">Anfragen</h1>
          {(unreadCount ?? 0) > 0 && (
            <span className="text-xs font-semibold bg-primary text-white px-2 py-0.5 rounded-full">
              {unreadCount} neu
            </span>
          )}
        </div>
      </div>

      <Suspense>
        <SubmissionsFilter total={count ?? 0} allCount={allCount ?? 0} unread={unreadCount ?? 0} />
      </Suspense>

      {submissions.length === 0 && (
        <p className="text-ash text-sm text-center py-16">Keine Anfragen gefunden.</p>
      )}

      <div className="flex flex-col gap-3">
        {submissions.map((s) => (
          <div
            key={s.id}
            className={`card-light p-4 sm:p-5 rounded-xl border ${s.read ? 'border-black/8' : 'border-primary/30 bg-primary/[0.02]'}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  {!s.read && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  <span className="font-semibold text-carbon text-sm">{s.name}</span>
                  <span className="text-xs text-ash font-semibold uppercase tracking-widest bg-black/5 px-1.5 py-0.5 rounded">
                    {s.lang}
                  </span>
                  <span className="text-xs text-ash sm:hidden">
                    {new Date(s.created_at).toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a href={`mailto:${s.email}`} className="text-xs text-primary hover:underline truncate">{s.email}</a>
                  {s.company && <span className="text-xs text-ash">· {s.company}</span>}
                  {s.phone && <a href={`tel:${s.phone}`} className="text-xs text-ash hover:text-carbon">· {s.phone}</a>}
                  {s.interest && <span className="text-xs text-ash/70 bg-black/5 px-1.5 py-0.5 rounded">{s.interest}</span>}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                <span className="hidden sm:inline text-xs text-ash whitespace-nowrap">
                  {new Date(s.created_at).toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </span>
                <form action={s.read ? markUnread.bind(null, s.id) : markRead.bind(null, s.id)}>
                  <button
                    type="submit"
                    className="text-xs font-semibold border border-black/10 px-2.5 py-1 rounded-lg hover:bg-parchment transition-colors whitespace-nowrap"
                  >
                    {s.read ? 'Als neu markieren' : 'Als gelesen markieren'}
                  </button>
                </form>
                <DeleteButton action={deleteSubmission.bind(null, s.id)} />
              </div>
            </div>

            {s.message && (
              <p className="text-sm text-ash leading-relaxed border-t border-black/6 pt-3 mt-1">
                {s.message}
              </p>
            )}

            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 pt-3 border-t border-black/6">
              {s.ip && <span className="text-xs text-ash/70 font-mono">{s.ip}</span>}
              {s.browser_lang && <span className="text-xs text-ash/70">{s.browser_lang}</span>}
              {s.screen && <span className="text-xs text-ash/70">{s.screen}</span>}
              {s.referrer && (
                <span className="text-xs text-ash/70 truncate max-w-[180px]" title={s.referrer}>
                  von: {s.referrer}
                </span>
              )}
              {s.user_agent && (
                <span className="hidden sm:inline text-xs text-ash/50 truncate max-w-full" title={s.user_agent}>
                  {s.user_agent}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {page > 1 && (
            <a
              href={`?${new URLSearchParams({ ...(status ? { status } : {}), ...(lang ? { lang } : {}), ...(q ? { q } : {}), page: String(page - 1) })}`}
              className="px-3 py-1.5 text-xs font-semibold border border-black/10 rounded-lg hover:bg-parchment transition-colors"
            >
              ←
            </a>
          )}
          <span className="text-xs text-ash font-semibold">
            {page} / {totalPages}
          </span>
          {page < totalPages && (
            <a
              href={`?${new URLSearchParams({ ...(status ? { status } : {}), ...(lang ? { lang } : {}), ...(q ? { q } : {}), page: String(page + 1) })}`}
              className="px-3 py-1.5 text-xs font-semibold border border-black/10 rounded-lg hover:bg-parchment transition-colors"
            >
              →
            </a>
          )}
        </div>
      )}
    </div>
    </>
  )
}
