'use server'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function createArticle(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const { count } = await supabase.from('articles').select('*', { count: 'exact', head: true })
  const payload = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    category: formData.get('category') as string,
    tags: ((formData.get('tags') as string) || '').split(',').map(t => t.trim()).filter(Boolean),
    date: formData.get('date') as string,
    image_url: (formData.get('image_url') as string) || null,
    short_description: formData.get('short_description') as string,
    content: formData.get('content') as string,
    published: formData.get('published') === 'on',
    order_num: (count ?? 0) + 1,
  }
  const { error } = await supabase.from('articles').insert(payload)
  if (error) throw new Error(error.message)
  revalidatePath('/news')
  redirect('/news')
}

export async function updateArticle(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const payload = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    category: formData.get('category') as string,
    tags: ((formData.get('tags') as string) || '').split(',').map(t => t.trim()).filter(Boolean),
    date: formData.get('date') as string,
    image_url: (formData.get('image_url') as string) || null,
    short_description: formData.get('short_description') as string,
    content: formData.get('content') as string,
    published: formData.get('published') === 'on',
  }
  const { error } = await supabase.from('articles').update(payload).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/news')
  redirect('/news')
}

export async function deleteArticle(id: string) {
  const supabase = await createSupabaseServerClient()
  await supabase.from('articles').delete().eq('id', id)
  revalidatePath('/news')
}

export async function updateArticleOrder(ids: string[]) {
  const supabase = await createSupabaseServerClient()
  await Promise.all(ids.map((id, i) => supabase.from('articles').update({ order_num: i + 1 }).eq('id', id)))
  revalidatePath('/news')
}
