"use client"

import Link from "next/link"
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import Image from "next/image"

export function Logo() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className='logo'></button>
  }

  return (
    <button className='logo'>
       <Link href="/" >
      {theme == "dark" ? (
        <Image src="/logo-Light.png" alt="Rising J"></Image>
      ) : (
        <Image src="/logo-Dark.png" alt="Rising J"></Image>
      )}
      </Link>
    </button>
  )
}
