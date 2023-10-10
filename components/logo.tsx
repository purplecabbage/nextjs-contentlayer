"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

export function Logo() {
  const { setTheme, theme } = useTheme()

  return (
    <button>
       <Link href="/">
      {theme !== "dark" ? (
        <img src="/logo-Dark.png" alt="Rising J" />
      ) : (
        <img src="/logo-Light.png" alt="Rising J" />
      )}
      </Link>
    </button>
  )
}
