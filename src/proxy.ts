import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

const PUBLIC_ROUTES = ['/login', '/auth/callback']

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublic = PUBLIC_ROUTES.some((r) => path.startsWith(r))

  const res = NextResponse.next()

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (toSet) => {
          toSet.forEach(({ name, value, options }) => res.cookies.set(name, value, options))
        },
      },
    },
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!isPublic && !user) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isPublic && user) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
