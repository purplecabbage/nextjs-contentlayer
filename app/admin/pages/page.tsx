import { createClient } from "@/lib/supabase/server"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default async function AdminPagesPage() {
  const supabase = await createClient()
  const { data: pages } = await supabase
    .from("pages")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Pages</h1>
        <Link
          href="/admin/pages/new"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          New Page
        </Link>
      </div>

      {pages && pages.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>{page.slug}</TableCell>
                <TableCell>
                  {new Date(page.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/admin/pages/${page.id}`}
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
        <p className="text-muted-foreground">No pages yet. Create your first page!</p>
      )}
    </div>
  )
}
