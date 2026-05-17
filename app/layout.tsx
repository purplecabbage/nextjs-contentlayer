
import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { getServerSession } from "next-auth"
import SessionProvider from '../components/SessionProvider'
import AuthButton from "@/components/AuthButton"
import { Analytics } from '@vercel/analytics/react';
import ConvertkitSignupForm from "@/components/ConvertkitSignupForm"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SocialLinks from "@/components/social-links"
import { cn } from "@/lib/utils";
import PublicFooter from "@/components/PublicFooter"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`antialiased min-h-screen bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {/* <SessionProvider session={session}> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <Header/>
          <main>{children}</main> 
          <Analytics />
          <PublicFooter />
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
