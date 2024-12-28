
import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { allPages } from "@/.contentlayer/generated"
import { getServerSession } from "next-auth"
import SessionProvider from '../components/SessionProvider'
import AuthButton from "@/components/AuthButton"
import { Analytics } from '@vercel/analytics/react';
import ConvertkitSignupForm from "@/components/ConvertkitSignupForm"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SocialLinks from "@/components/social-links"

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
          <div className="py-2">
            <Header/>
            <main>{children}</main> 
          </div>
          <Analytics />
          <div className='bg-indigo-200 dark:bg-indigo-950 min-w-full mt-20 px-5 sm:px-20'>
            <ConvertkitSignupForm formId="" />
          </div>
          <Footer />
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
