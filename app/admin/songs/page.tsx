import { createClient } from "@/lib/supabase/server"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default async function AdminSongsPage() {
  const supabase = await createClient()
  const { data: songs } = await supabase
    .from("songs")
    .select("*")
    .order("published_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Songs</h1>
        <Link
          href="/admin/songs/new"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          New Song
        </Link>
      </div>

      {songs && songs.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {songs.map((song) => (
              <TableRow key={song.id}>
                <TableCell className="font-medium">{song.title}</TableCell>
                <TableCell>{song.slug}</TableCell>
                <TableCell>{song.visibility}</TableCell>
                <TableCell>
                  {new Date(song.published_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/admin/songs/${song.id}`}
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
        <p className="text-muted-foreground">No songs yet. Add your first song!</p>
      )}
    </div>
  )
}
