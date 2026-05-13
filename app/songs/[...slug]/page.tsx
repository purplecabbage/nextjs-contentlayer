import { notFound } from "next/navigation"
import { Metadata } from "next"
import StreamLinks from "@/components/StreamLinks"
import { getAllSongs, getSongBySlug } from "@/lib/data"

interface SongProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getSongFromParams(params: SongProps["params"]) {
  const { slug } = await params
  const slugString = slug?.join("/")
  const song = await getSongBySlug(slugString)
  return song
}

export async function generateMetadata({
  params,
}: SongProps): Promise<Metadata> {
  const song = await getSongFromParams(params)

  if (!song) {
    return {}
  }

  return {
    title: song.title,
    description: song.description || undefined,
  }
}

export async function generateStaticParams() {
  const songs = await getAllSongs()
  return songs.map((song) => ({
    slug: song.slug.split("/"),
  }))
}

export default async function SongPage({ params }: SongProps) {
  const song = await getSongFromParams(params)

  if (!song) {
    notFound()
  }

  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1 className="mb-2">{song.title}</h1>
      {song.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {song.description}
        </p>
      )}
      <StreamLinks 
        title={song.title}
        appleMusicLink={song.apple_music_link || undefined}
        spotifyLink={song.spotify_link || undefined}
        amazonMusicLink={song.amazon_music_link || undefined}
        streamUrl={song.stream_url || undefined}
        discoTrackId={song.disco_track_id || undefined}
      />
    </article>
  )
}
