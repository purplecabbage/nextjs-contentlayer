'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

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
          src="/Classical.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white">
            
          </p>
        </div>
      </div> */}
    </div>
  )
}
