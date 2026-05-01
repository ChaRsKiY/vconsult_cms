export function uploadToCloudinary(file: File, onProgress: (pct: number) => void): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  if (!cloudName || !preset) return Promise.reject(new Error('Cloudinary config fehlt'))

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', preset)
    fd.append('folder', 'vconsult')

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100))
    })
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve((JSON.parse(xhr.responseText) as { secure_url: string }).secure_url)
      } else {
        const body = JSON.parse(xhr.responseText) as { error?: { message?: string } }
        reject(new Error(body?.error?.message ?? `Upload fehlgeschlagen (${xhr.status})`))
      }
    })
    xhr.addEventListener('error', () => reject(new Error('Netzwerkfehler beim Upload')))

    xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`)
    xhr.send(fd)
  })
}
