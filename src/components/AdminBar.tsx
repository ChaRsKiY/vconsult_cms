'use client'
import { usePathname } from 'next/navigation'
import { logout } from '@/actions/auth'

const LINKS = [
  { label: 'Redakteur', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Kunden', href: '/kunden' },
  { label: 'Anfragen', href: '/anfragen' },
]

export function AdminBar({ unreadCount = 0 }: { unreadCount?: number }) {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/8 shadow-sm">
      <div className="px-4 py-2.5 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="vconsult" className="h-7 w-auto" />
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-primary text-white px-1.5 py-0.5 rounded">CMS</span>
        </div>

        <div className="flex items-center gap-0.5 bg-parchment rounded-lg p-1 ml-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${isActive(link.href) ? 'bg-white text-carbon shadow-sm' : 'text-ash hover:text-carbon'
                }`}
            >
              {link.label}
              {link.label === 'Anfragen' && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[0.55rem] font-bold bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </a>
          ))}
        </div>

        <div className="ml-auto">
          <form action={logout}>
            <button type="submit" className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors">
              Logout
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
