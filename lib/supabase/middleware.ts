import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  // If Supabase is not configured, just pass through
  if (!supabaseUrl || !supabaseKey) {
    // Still protect admin routes when Supabase is not configured
    if (request.nextUrl.pathname.startsWith('/admin')) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      return NextResponse.redirect(url)
    }
    return supabaseResponse
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value),
            )
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options),
            )
          },
        },
      },
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Protect admin routes
    if (request.nextUrl.pathname.startsWith('/admin') && !user) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      return NextResponse.redirect(url)
    }

    return supabaseResponse
  } catch (error) {
    // If Supabase fails, just pass through for non-admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      return NextResponse.redirect(url)
    }
    return supabaseResponse
  }
}
