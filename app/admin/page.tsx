import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  const [postsResult, pagesResult, songsResult, pressResult] = await Promise.all([
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase.from("pages").select("id", { count: "exact", head: true }),
    supabase.from("songs").select("id", { count: "exact", head: true }),
    supabase.from("press").select("id", { count: "exact", head: true }),
  ])

  const stats = [
    { name: "Posts", count: postsResult.count ?? 0, href: "/admin/posts" },
    { name: "Pages", count: pagesResult.count ?? 0, href: "/admin/pages" },
    { name: "Songs", count: songsResult.count ?? 0, href: "/admin/songs" },
    { name: "Press", count: pressResult.count ?? 0, href: "/admin/press" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle>{stat.name}</CardTitle>
                <CardDescription>Manage your {stat.name.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{stat.count}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
