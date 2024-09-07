import { allPosts } from "@/.contentlayer/generated"
import StreamLinks from "@/components/StreamLinks"
import { allSongs } from "contentlayer/generated"
import Link from "next/link"

export default function Home() {
  const song = allSongs.find((song) => song.slugAsParams === 'i-already-know')
  const post = allPosts.find((post) => post.title === 'Music is Never Done')


  if (!song) {
    return (
      <article className='m-auto'>
        Welcome
      </article>
    )
  }

  return (
    <div className="min-w-full">
      <article className="py-12 prose dark:prose-invert min-w-full px-5 sm:px-20">

        <a className="mb-2"  href={post?.slug}>
            {post?.title}
        </a>
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post?.description}
        </p>
      </article>

      <hr className="border-t-2 m-1 border-slate-200 dark:border-slate-800" />

      <article className="py-6 prose dark:prose-invert min-w-full px-5 sm:px-20">
        <a className="mb-2" href={"songs/" + song.slugAsParams}>
          {song.title}
        </a>
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
    </div>
  )
}
