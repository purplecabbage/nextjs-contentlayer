import { notFound } from "next/navigation"
import { Metadata } from "next"
import StreamLinks from "@/components/StreamLinks"
import { allSongs } from "contentlayer/generated"

interface SongProps {
  params: {
    slug: string[]
  }
}

async function getSongFromParams(params: SongProps["params"]) {
  const slug = params?.slug?.join("/")
  const song = allSongs.find((song) => song.slugAsParams === slug)

  if (!song) {
    null
  }

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
    description: song.description,
  }
}

export async function generateStaticParams(): Promise<SongProps["params"][]> {
  return allSongs.map((song) => ({
    slug: song.slugAsParams.split("/"),
  }))
}

export default async function SongPage({ params }: { params: { slug: string[] } }) {
  
  const song = await getSongFromParams(params)

  if (!song) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1 className="mb-2">{song.title}</h1>
      {song.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {song.description}
        </p>
      )}
      <StreamLinks title={song.title}
        appleMusicLink={song.appleMusicLink}
        spotifyLink={song.spotifyLink}
        amazonMusicLink={song.amazonMusicLink}
        streamUrl={song.streamUrl}
        discoTrackId={song.discoTrackId}
        />
      
    </article>
  )
}
