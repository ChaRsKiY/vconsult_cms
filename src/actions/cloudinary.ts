'use server'

export type CloudinaryResource = {
  public_id: string
  secure_url: string
  resource_type: 'image' | 'video'
  format: string
  width: number
  height: number
  created_at: string
  bytes: number
}

export type CloudinaryListResult = {
  resources: CloudinaryResource[]
  next_cursor?: string
}

export async function listCloudinaryResources(
  resourceType: 'image' | 'video',
  nextCursor?: string,
): Promise<CloudinaryListResult> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary configuration missing')
  }

  const params = new URLSearchParams({ max_results: '50', type: 'upload', prefix: 'vconsult/' })
  if (nextCursor) params.append('next_cursor', nextCursor)

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/${resourceType}?${params}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
      },
      cache: 'no-store',
    },
  )

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Cloudinary API error: ${body}`)
  }

  return res.json()
}
