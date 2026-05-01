'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useRef } from 'react'

export function SubmissionsFilter({ total, allCount, unread }: { total: number; allCount: number; unread: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const status = searchParams.get('status') ?? 'all'
  const lang = searchParams.get('lang') ?? 'all'
  const q = searchParams.get('q') ?? ''

  const update = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all' || value === '') params.delete(key)
    else params.set(key, value)
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }, [searchParams, pathname, router])

  const updateSearch = useCallback((value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => update('q', value), 400)
  }, [update])

  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex gap-2">
        <input
          type="search"
          placeholder="Name, E-Mail suchen…"
          defaultValue={q}
          onChange={(e) => updateSearch(e.target.value)}
          className="flex-1 px-3 py-1.5 text-xs font-body border border-black/10 rounded-lg bg-white outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
        />
        <a
          href="/anfragen/export"
          className="px-3 py-1.5 text-xs font-semibold border border-black/10 rounded-lg hover:bg-parchment transition-colors whitespace-nowrap flex items-center gap-1.5 shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          CSV
        </a>
      </div>
      <div className="flex gap-2 flex-wrap">
        <div className="flex items-center gap-1 bg-parchment rounded-lg p-1">
          {(['all', 'unread', 'read'] as const).map((s) => (
            <button
              key={s}
              onClick={() => update('status', s)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                status === s ? 'bg-white text-carbon shadow-sm' : 'text-ash hover:text-carbon'
              }`}
            >
              {s === 'all' ? `Alle (${allCount})` : s === 'unread' ? `Neu (${unread})` : 'Gelesen'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-parchment rounded-lg p-1">
          {(['all', 'de', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => update('lang', l)}
              className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-widest transition-all ${
                lang === l ? 'bg-white text-carbon shadow-sm' : 'text-ash hover:text-carbon'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
