export type Article = {
  id: string
  title: string
  slug: string
  category: string
  tags: string[]
  date: string
  image_url: string | null
  short_description: string
  content: string
  published: boolean
  order_num: number
  created_at: string
}

export type Kunde = {
  id: string
  name: string
  industry: string
  type: 'kunde' | 'partner'
  logo_url: string | null
  website_url: string | null
  display_order: number
  active: boolean
  created_at: string
}
