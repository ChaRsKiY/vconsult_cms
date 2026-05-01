'use client'
export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-ash mb-4">{error.message}</p>
        <button onClick={reset} className="btn-primary">Nochmal versuchen</button>
      </div>
    </div>
  )
}
