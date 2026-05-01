'use server'

export async function uploadToCloudinary(formData: FormData): Promise<string> {
  const file = formData.get('file') as File
  if (!file) throw new Error('No file provided')

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const preset = process.env.CLOUDINARY_UPLOAD_PRESET
  if (!cloudName || !preset) throw new Error('Cloudinary env vars missing')

  const body = new FormData()
  body.append('file', file)
  body.append('upload_preset', preset)

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
    method: 'POST',
    body,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Cloudinary upload failed: ${text}`)
  }

  const data = await res.json()
  return data.secure_url as string
}
