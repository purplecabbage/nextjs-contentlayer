import { createClient } from "@/lib/supabase/server"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default async function AdminPressPage() {
  const supabase = await createClient()
  const { data: press } = await supabase
    .from("press")
    .select("*")
    .order("published_at", { ascending: false })

  return (
    <div>
      <Link href="/admin" className="text-sm text-muted-foreground hover:underline mb-6 inline-block">&larr; Back to Admin</Link>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Press</h1>
        <Link
          href="/admin/press/new"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          New Press Article
        </Link>
      </div>

      {press && press.length > 0 ? (
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
            {press.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.slug}</TableCell>
                <TableCell>
                  {new Date(item.published_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/admin/press/${item.id}`}
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
        <p className="text-muted-foreground">No press articles yet. Add your first one!</p>
      )}
    </div>
  )
}
