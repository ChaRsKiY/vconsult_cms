export type Lang = 'de' | 'en'
export type ContentRow = { section: string; key: string; lang: Lang; value: string }
export type SiteContent = Record<string, Record<string, string>>
export type BothLangs = { de: SiteContent; en: SiteContent }
