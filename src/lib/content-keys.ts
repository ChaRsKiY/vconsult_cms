import type { ContentRow } from '@/types/content'

export function flattenContent(
  obj: Record<string, unknown>,
  section: string,
  lang: 'de' | 'en',
): ContentRow[] {
  const rows: ContentRow[] = []

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      rows.push({ section, key, lang, value })
    } else if (Array.isArray(value)) {
      rows.push({ section, key, lang, value: JSON.stringify(value) })
    }
  }

  return rows
}

export function buildContent(rows: ContentRow[], lang: 'de' | 'en') {
  const result: Record<string, Record<string, string>> = {}
  for (const row of rows.filter((r) => r.lang === lang)) {
    if (!result[row.section]) result[row.section] = {}
    result[row.section][row.key] = row.value
  }
  return result
}
