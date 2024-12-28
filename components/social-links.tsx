import Link from "next/link"

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="currentColor" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z" fill="currentColor" />
    <path d="M18 5a1 1 0 100 2 1 1 0 000-2z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" fill="currentColor" />
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
  </svg>
)

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor" />
  </svg>
)

export default function Component() {
  return (
    <div className="flex space-x-2.5">
      <Link
        target="_blank"
        href="https://facebook.com/risingjmusic"
        className="rounded-md w-7 h-7 pt-1 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/risingjmusic"
        className="rounded-md w-7 h-7 pt-1 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </Link>
      
      {/* <Link
        target="_blank"
        href="https://twitter.com/risingjmusic"
        className="border rounded-md w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="X (formerly Twitter)"
      >
        <XIcon />
      </Link> */}
      {/* <Link
        target="_blank"
        href="https://youtube.com"
        className="rounded-md w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="YouTube"
      >
        <YoutubeIcon />
      </Link> */}
    </div>
  )
}