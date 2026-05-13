import { createClient } from "@/lib/supabase/server"
import { SongForm } from "@/components/admin/song-form"
import { notFound } from "next/navigation"

export default async function EditSongPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: song } = await supabase
    .from("songs")
    .select("*")
    .eq("id", id)
    .single()

  if (!song) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Song</h1>
      <SongForm song={song} />
    </div>
  )
}
