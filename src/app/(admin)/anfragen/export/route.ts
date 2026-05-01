import { createSupabaseServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  const rows = data ?? []

  const headers = ['id', 'firstname', 'lastname', 'email', 'message', 'lang', 'created_at', 'read', 'ip', 'referrer']

  const escape = (val: unknown) => {
    if (val == null) return ''
    const str = String(val).replace(/"/g, '""')
    return `"${str}"`
  }

  const csv = [
    headers.join(','),
    ...rows.map((r) => headers.map((h) => escape((r as Record<string, unknown>)[h])).join(',')),
  ].join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="anfragen-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
