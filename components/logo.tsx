"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

export function Logo() {
  const { setTheme, theme } = useTheme()

  return (
    <button>
       <Link href="/">
      {theme !== "dark" ? (
        <img src="/logoDark.png" alt="Rising J" />
      ) : (
        <img src="/logoLight.png" alt="Rising K" />
      )}
      </Link>
    </button>
  )
}
