'use client'
import { loginWithAzure } from '@/actions/auth'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
        <div className="mb-8 text-center">
          <img src="/logo.png" alt="vconsult" className="h-10 w-auto mx-auto mb-4" />
          <p className="text-ash text-sm">Admin Panel</p>
        </div>
        <form action={loginWithAzure}>
          <button type="submit" className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-black/10 rounded-xl text-sm font-semibold text-carbon hover:bg-parchment transition-colors">
            <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
              <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
              <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
              <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
            </svg>
            Mit Microsoft anmelden
          </button>
        </form>
      </div>
    </div>
  )
}
