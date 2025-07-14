'use client'
import StreamLinks from "@/components/StreamLinks"
import { allSongs } from "contentlayer/generated"
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const song = allSongs.find((song) => song.slugAsParams === 'beside-me')

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY
        bannerRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={bannerRef} className="absolute inset-0">
        <Image
          // src="https://images.pexels.com/photos/6765189/pexels-photo-6765189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src="/coloredPaper.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <p>Lorem ipsum</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <article className="py-4 prose dark:prose-invert min-w-full px-5 sm:px-20">
        <p>Streaming now</p>
        { song && (
          <a className="mb-2" href={"songs/" + song.slugAsParams}>
            {song.title}
          </a>
        )}

        {song?.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {song.description}
          </p>
        )}
        {song?.title && (
        <StreamLinks title={song.title}
          appleMusicLink={song.appleMusicLink}
          spotifyLink={song.spotifyLink}
          amazonMusicLink={song.amazonMusicLink}
          streamUrl={song.streamUrl}
          discoTrackId={song.discoTrackId}
        />
        )}
      </article>
      </div>
    </div>
  )
}
