'use server'
import crypto from 'crypto'
import { createSupabaseServerClient } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

function extractPublicId(url: string): string {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/)
  if (!match) return ''
  return match[1].replace(/\.[^.]+$/, '')
}

async function deleteFromCloudinary(url: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  if (!cloudName || !apiKey || !apiSecret) return

  const publicId = extractPublicId(url)
  if (!publicId) return

  const timestamp = Math.floor(Date.now() / 1000)
  const signature = crypto
    .createHash('sha1')
    .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
    .digest('hex')

  await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
    method: 'POST',
    body: new URLSearchParams({ public_id: publicId, timestamp: String(timestamp), api_key: apiKey, signature }),
  })
}

export async function createKunde(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const { count } = await supabase.from('kunden').select('*', { count: 'exact', head: true })
  const { error } = await supabase.from('kunden').insert({
    name: formData.get('name') as string,
    industry: formData.get('industry') as string,
    type: (formData.get('type') as string) || 'kunde',
    logo_url: (formData.get('logo_url') as string) || null,
    website_url: (formData.get('website_url') as string) || null,
    display_order: (count ?? 0) + 1,
    active: formData.get('active') === 'on',
  })
  if (error) throw new Error(error.message)
  revalidatePath('/kunden')
}

export async function updateKunde(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.from('kunden').update({
    name: formData.get('name') as string,
    industry: formData.get('industry') as string,
    type: (formData.get('type') as string) || 'kunde',
    logo_url: (formData.get('logo_url') as string) || null,
    website_url: (formData.get('website_url') as string) || null,
    active: formData.get('active') === 'on',
  }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/kunden')
}

export async function deleteKunde(id: string) {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase.from('kunden').select('logo_url').eq('id', id).single()

  if (data?.logo_url) {
    const { data: refs } = await supabase
      .from('kunden')
      .select('id')
      .eq('logo_url', data.logo_url)
      .neq('id', id)
    if (!refs?.length) {
      await deleteFromCloudinary(data.logo_url)
    }
  }

  await supabase.from('kunden').delete().eq('id', id)
  revalidatePath('/kunden')
}

export async function toggleKunde(id: string, active: boolean) {
  const supabase = await createSupabaseServerClient()
  await supabase.from('kunden').update({ active }).eq('id', id)
  revalidatePath('/kunden')
}

export async function updateKundenOrder(ids: string[]) {
  const supabase = await createSupabaseServerClient()
  await Promise.all(ids.map((id, i) => supabase.from('kunden').update({ display_order: i + 1 }).eq('id', id)))
  revalidatePath('/kunden')
}
