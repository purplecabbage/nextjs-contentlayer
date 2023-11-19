import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { allPages } from "@/.contentlayer/generated"
import { getServerSession } from "next-auth"
import SessionProvider from '../components/SessionProvider'
import AuthButton from "@/components/AuthButton"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rising J",
  description: "The J is on the rise!",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  // const session = await getServerSession()
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {/* <SessionProvider session={session}> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="py-10">
            <header>
              <div className="flex items-center justify-between px-20">
                <Logo />
                <nav className="mr-10 text-sm font-medium space-x-6">
                 {allPages.map((page) => (
                  <Link key={page.slug} href={page.slugAsParams}>{page.title}</Link>
                ))}
                </nav>
                <ModeToggle />
                {/* <AuthButton /> */}
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
