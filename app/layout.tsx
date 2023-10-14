import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { allPages } from "@/.contentlayer/generated"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rising J",
  description: "The J is on the rise!",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Logo />
                
                <nav className="ml-auto mr-10 text-sm font-medium space-x-6">
                 {allPages.map((page) => (
                  <Link key={page.slug} href={page.slugAsParams}>{page.title}</Link>
                ))}
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
