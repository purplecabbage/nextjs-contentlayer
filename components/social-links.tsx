import Link from "next/link"

const FacebookIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 18" class="icon"><path fill-rule="evenodd" d="M1.907 18V8.999H0V5.897h1.907V4.035C1.907 1.505 2.984 0 6.044 0h2.547v3.103H7c-1.191 0-1.27.433-1.27 1.242l-.005 1.552h2.885L8.27 9H5.724V18H1.907z" fill="currentColor"></path></svg>
)

const BandcampIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 8" class="icon"><path d="M16.108 1.726c1.322 0 1.824 1.014 1.892 1.938h-.82c-.107-.71-.484-1.136-1.198-1.136-1.052 0-1.39 1.055-1.39 1.998 0 .913.212 2.04 1.38 2.04.57 0 1.063-.447 1.207-1.259H18c-.087.842-.58 2.03-2.057 2.03-1.419 0-2.258-1.127-2.258-2.659 0-1.643.752-2.952 2.423-2.952zM8.938 0L6.435 7.336H0L2.503 0h6.435zm.827 0v2.612h.02c.356-.55.845-.8 1.419-.81 1.306 0 2.049 1.14 2.049 2.612 0 1.25-.49 2.922-2.162 2.922-.837 0-1.185-.51-1.354-.8h-.019v.65h-.78V0h.827zm1.288 2.592c-1.194 0-1.325 1.371-1.325 2.222 0 1.391.818 1.762 1.344 1.762.855 0 1.28-.782 1.322-1.843l.004-.18c0-.67-.066-1.96-1.345-1.96z" fill="currentColor"></path></svg>
)

const InstagramIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" class="icon"><path fill-rule="evenodd" d="M6.955 1.628l2.582-.006c1.916.001 2.227.012 3.1.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.27.27.452.529.6.862l.073.173c.113.29.246.715.298 1.46l.03.627c.012.29.02.553.025.917l.01 2.842c-.002 1.915-.013 2.226-.053 3.099-.037.804-.163 1.272-.279 1.588l-.031.083c-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.29.113-.715.246-1.46.298l-1.21.05c-.344.007-.761.011-1.428.013l-3.255-.005a37.01 37.01 0 01-1.592-.046c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035c-.113-.29-.246-.715-.298-1.46l-.05-1.21a71.292 71.292 0 01-.013-1.428l.005-3.255c.006-.692.02-1.022.046-1.592.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.29-.113.715-.246 1.46-.298l.627-.03c.355-.015.668-.023 1.176-.028zM6.97.006h4.06c.747.007 1.09.021 1.68.048.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.808 1.002 1.038 1.594.198.509.34 1.082.4 1.876l.035.68c.026.62.036 1.093.038 2.574l-.005 2.658c-.006.844-.02 1.192-.05 1.818-.043.958-.195 1.612-.418 2.184a4.412 4.412 0 01-1.038 1.594c-.5.5-1.002.809-1.594 1.039-.509.197-1.082.34-1.876.4l-.795.039c-.53.021-1.003.03-2.193.032l-2.924-.004a39.115 39.115 0 01-1.818-.05c-.958-.043-1.612-.195-2.184-.417a4.412 4.412 0 01-1.594-1.039c-.5-.5-.809-1.002-1.039-1.594-.197-.509-.34-1.082-.4-1.876l-.042-.876C.009 11.575 0 11.027 0 9.527L.006 6.97c.007-.747.021-1.09.048-1.68.044-.959.196-1.613.418-2.185A4.412 4.412 0 011.511 1.51c.5-.5 1.002-.808 1.594-1.038.509-.198 1.082-.34 1.876-.4L5.857.03C6.177.018 6.49.01 6.97.006zm2.048 4.387a4.625 4.625 0 100 9.25 4.625 4.625 0 000-9.25zm0 1.623a3.002 3.002 0 110 6.004 3.002 3.002 0 010-6.004zm4.768-2.909a1.071 1.071 0 100 2.143 1.071 1.071 0 000-2.143z" fill="currentColor"></path></svg>
)

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="currentColor" />
  </svg>
)

const YoutubeIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 12" class="icon"><path d="M7.518.011l1.81-.01c.971.004 3.89.03 5.972.173l.355.05c.394.061.95.209 1.445.76.463.478.66 1.426.714 1.746l.017.108s.155 1.378.168 2.816L18 7.241c0 .654-.032 1.31-.068 1.84l-.1 1.172s-.17 1.274-.732 1.853c-.675.753-1.463.753-1.8.811l-.537.033c-2.11.12-4.778.138-5.547.14l-2.132-.03c-1.465-.029-3.372-.076-4.215-.143-.394-.116-1.294-.058-1.969-.81-.43-.444-.63-1.293-.7-1.668l-.031-.186S.014 8.875 0 7.437V5.654l.007-.39c.012-.45.035-.883.06-1.254l.1-1.172S.339 1.564.9.985C1.575.232 2.362.232 2.7.174l.75-.045C4.827.057 6.4.025 7.518.01zm-.973 3.262v6.545l6.546-3.273-6.546-3.272z" fill="currentColor"></path></svg>
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
        className="rounded-md w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="X (formerly Twitter)"
      >
        <XIcon />
      </Link> */}
      <Link
        target="_blank"
        href="https://youtube.com"
        className="rounded-md w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="YouTube"
      >
        <YoutubeIcon />
      </Link>
      <Link
        target="_blank"
        href="https://risingj.bandcamp.com/"
        className="rounded-md w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        aria-label="YouTube"
      >
        <BandcampIcon />
      </Link>

    </div>
  )
}