import { createClient } from "@/lib/supabase/server"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default async function AdminPostsPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("published_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          New Post
        </Link>
      </div>

      {posts && posts.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>
                  {new Date(post.published_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="text-primary hover:underline"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-muted-foreground">No posts yet. Create your first post!</p>
      )}
    </div>
  )
}
