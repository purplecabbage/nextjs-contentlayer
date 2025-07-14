import { allPosts } from "@/.contentlayer/generated"
import StreamLinks from "@/components/StreamLinks"
import { allSongs } from "contentlayer/generated"
import HeroBanner from "@/components/HeroBanner"
import Link from "next/link"
import Image from 'next/image'


export default function Home() {
  const song = allSongs.find((song) => song.slugAsParams === 'beside-me')
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
      {/* <HeroBanner /> */}
      <article className="py-12 min-w-full px-5 sm:px-20 bg-fixed bg-center"
      style={{  
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: "url(" + post?.coverImage + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="min-w-full px-5 sm:px-20 bg-fixed bg-cover bg-center h-screen">
          <div>
            <img src="/RisingJ-7.png" alt="Rising J" width="500px" style={{margin: 'auto'}} />
          </div>
          <div className="bg-white/20 backdrop-blur-sm dark:bg-gray-900/10 p-5 w-full text-black dark:text-slate-100 rounded-lg">
            <p className="mb-2 ">From the blog:</p>
            <a className="mb-2" href={post?.slug}>
            {post?.title}
            </a>
            <p className="text-xl mt-0">
              {post?.description}
            </p>
          </div>
        </div>
      </article>

      {/* <hr className="border-t-2 m-1 border-slate-200 dark:border-slate-800" /> */}

      <article className="py-4 prose dark:prose-invert min-w-full px-5 sm:px-20">
        <p>Streaming now</p>
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
