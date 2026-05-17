import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="text-xl font-bold">
              Admin
            </Link>
            <nav className="flex gap-6">
              <Link href="/admin/posts" className="text-muted-foreground hover:text-foreground">
                Posts
              </Link>
              <Link href="/admin/pages" className="text-muted-foreground hover:text-foreground">
                Pages
              </Link>
              <Link href="/admin/songs" className="text-muted-foreground hover:text-foreground">
                Songs
              </Link>
              <Link href="/admin/press" className="text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              View Site
            </Link>
            <form action="/auth/signout" method="post">
              <button type="submit" className="text-sm text-muted-foreground hover:text-foreground">
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
