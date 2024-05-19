/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1eqM1sakDtD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="py-12 min-h-full">
      <div className="container mx-auto px-4 md:px-6 grid gap-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-4xl hover:font-extrabold transition-font-weight">I Already Know</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4 min-h-64">
        Just released! Listen to the new single "I Already Know" on your favorite platform.
        </p>
        <p></p>
      </div>
      <div className="container mx-auto px-4 md:px-6 flex items-center gap-8 pt-1">
        <div className="flex-shrink-0">
          <img
            alt="Album Cover"
            className="rounded-lg"
            height={300}
            src='/RisingJ-1.png'
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={300}
          />
        </div>
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-1xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-2xl hover:font-extrabold transition-font-weight">
            Streaming now on these services
          </h2>
          <div className="grid gap-4">
            <Link
              className="flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              target="_blank"
              href="https://music.apple.com/ca/album/i-already-know/1742218617?i=1742218620"
            >
              <AppleMusicIcon className="w-8 h-8 text-pink-500" />
              <span className="font-medium text-gray-900 dark:text-white">Apple Music</span>
              <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              className="flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              target="_blank"
              href="https://open.spotify.com/track/32uXL1dXbucWFm4T9C2MZN"
            >
              <SpotifyIcon className="w-8 h-8 text-green-500" />
              <span className="font-medium text-gray-900 dark:text-white">Spotify</span>
              <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              className="flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              target="_blank"
              href="https://music.amazon.com/albums/B0D268NXLF?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_3dDXSGivGW4e18jnQUBR8RMEk&trackAsin=B0D269WYV1"
            >
            <AmazonMusicIcon className="w-8 h-8 text-orange-500" />
              <span className="font-medium text-gray-900 dark:text-white">Amazon Music</span>
              <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-500 dark:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// export default function Component() {
//   return (
//     <section className="py-12">
//       <h3 className="text-2xl tracking-tight text-left ml-10 text-white">
//         <span className="text-gray-400">Now Streaming &nbsp;&nbsp;&nbsp;</span> I Already Know
//       </h3>
//       <div className="container mx-auto px-4 md:px-6">
//       <img src='/RisingJ-1.png' alt='I Already Know - Rising J' className='mx-auto w-96 rounded-lg'/>
//         <div className="max-w-xl mx-auto space-y-6 bg-gray-400">
//           <h3 className="text-1xl tracking-tight text-center text-white sm:text-4xl">
//             Listen on your favorite platform
//           </h3>
//           <div className="grid gap-4">
//             {/* Apple Music */}
//             <Link
//               className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-700 transition-colors"
//               target="_blank"
//               href="https://music.apple.com/ca/album/i-already-know/1742218617?i=1742218620"
//             >
//               <AppleMusicIcon className="w-8 h-8" />
//               <span className="font-medium text-black">Apple Music</span>
//               <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-400" />
//             </Link>
//             {/* Spotify */}
//             <Link
//               className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-700 transition-colors"
//               target="_blank"
//               href="https://open.spotify.com/track/32uXL1dXbucWFm4T9C2MZN"
//             >
//               <SpotifyIcon className="w-8 h-8" />
//               <span className="font-medium text-black">Spotify</span>
//               <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-400" />
//             </Link>
//             {/* Amazon Music */}
//             <Link
//               className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg hover:bg-gray-700 transition-colors hover:no-underline"
//               target="_blank"
//               href="https://www.amazon.ca/I-Already-Know-Rising-J/dp/B0D268NXLF/ref=sr_1_1"
//             >
//               <AmazonMusicIcon className="w-8 h-8" />
//               <span className="font-medium text-black">Amazon Music</span>
//               <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-400" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function ExternalLinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function AppleMusicIcon(props) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 32 32">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 8.86222V10.0089L31.9867 21.9867C31.9867 22.1141 31.9872 22.2415 31.9877 22.3689C31.9886 22.6237 31.9896 22.8785 31.9867 23.1333C31.9867 23.4533 31.9822 23.7778 31.9733 24.0978C31.9623 24.8021 31.8999 25.5047 31.7867 26.2C31.6688 26.8958 31.447 27.57 31.1289 28.2C30.8095 28.8291 30.3925 29.4036 29.8933 29.9022C29.3939 30.4004 28.8195 30.8173 28.1911 31.1378C27.5627 31.4559 26.89 31.6777 26.1956 31.7956C25.5006 31.911 24.7978 31.9734 24.0933 31.9822C23.7733 31.9911 23.4489 31.9956 23.1289 31.9956H10.0044C9.87704 31.9956 9.74963 31.996 9.62222 31.9965C9.36741 31.9975 9.11259 31.9985 8.85778 31.9956C8.53778 31.9956 8.21333 31.9911 7.89333 31.9822C7.18899 31.9712 6.48638 31.9088 5.79111 31.7956C5.09686 31.677 4.42424 31.4553 3.79556 31.1378C2.5299 30.4943 1.50122 29.4657 0.857778 28.2C0.540266 27.5698 0.318566 26.8957 0.2 26.2C0.0845601 25.505 0.0221579 24.8022 0.0133333 24.0978C0.00444444 23.7778 0 23.4533 0 23.1333V8.86222L0.0133333 7.90222C0.02437 7.19788 0.0867577 6.49527 0.2 5.8C0.317891 5.10416 0.539623 4.42997 0.857778 3.8C1.50465 2.53531 2.53434 1.50718 3.8 0.862222C4.42822 0.542685 5.10093 0.319448 5.79556 0.2C6.49055 0.0845601 7.19332 0.0221579 7.89778 0.0133333C8.21778 0.00444444 8.54222 0 8.86222 0H23.1378L24.1067 0.0133333C24.811 0.02437 25.5136 0.0867577 26.2089 0.2C26.9031 0.318584 27.5758 0.540294 28.2044 0.857778C29.4701 1.50122 30.4988 2.5299 31.1422 3.79556C31.4597 4.4258 31.6814 5.09988 31.8 5.79556C31.9154 6.49055 31.9778 7.19332 31.9867 7.89778C31.9956 8.21778 32 8.54222 32 8.86222ZM21.7733 5.03556C21.8578 5.01778 22.5467 4.89778 22.6222 4.88889C23.1378 4.84445 23.4267 5.18223 23.4311 5.72889V20.8178C23.4436 21.2124 23.4138 21.6073 23.3422 21.9956C23.2615 22.389 23.1029 22.7622 22.8756 23.0933C22.6459 23.4233 22.3471 23.6994 22 23.9022C21.6554 24.0994 21.2796 24.2362 20.8889 24.3067C20.3291 24.4528 19.7453 24.483 19.1733 24.3956C18.7418 24.3093 18.3421 24.1064 18.0178 23.8089C17.7699 23.5857 17.5694 23.3149 17.4283 23.0127C17.2871 22.7104 17.2082 22.3829 17.1962 22.0495C17.1841 21.7162 17.2393 21.3838 17.3583 21.0722C17.4773 20.7606 17.6577 20.476 17.8889 20.2356C18.182 19.9392 18.5372 19.7115 18.9289 19.5689C19.5026 19.3733 20.0912 19.2247 20.6889 19.1244C20.7933 19.1044 20.8967 19.0833 21 19.0622C21.1033 19.0411 21.2067 19.02 21.3111 19C21.5783 18.9713 21.8253 18.8447 22.0044 18.6444C22.1599 18.4117 22.2276 18.1314 22.1956 17.8533V10.8044C22.1956 10.2667 21.9556 10.12 21.44 10.2178C21.0711 10.2889 13.1644 11.8844 13.1644 11.8844C12.7156 11.9956 12.56 12.1422 12.56 12.6933V23.0133C12.5664 23.4086 12.5307 23.8034 12.4533 24.1911C12.3727 24.5845 12.214 24.9578 11.9867 25.2889C11.757 25.6189 11.4582 25.8949 11.1111 26.0978C10.7658 26.2944 10.3904 26.4326 10 26.5067C9.44016 26.6528 8.85639 26.683 8.28445 26.5956C7.85185 26.5096 7.45172 26.305 7.12889 26.0044C6.67868 25.593 6.39685 25.0293 6.33778 24.4222C6.29686 24.0622 6.33491 23.6975 6.44928 23.3536C6.56364 23.0098 6.75158 22.695 7 22.4311C7.29314 22.1348 7.64833 21.9071 8.04 21.7645C8.61367 21.5689 9.20227 21.4203 9.8 21.32C9.90445 21.3 10.0078 21.2789 10.1111 21.2578C10.2144 21.2367 10.3178 21.2156 10.4222 21.1956C10.6894 21.1669 10.9364 21.0402 11.1156 20.84C11.2761 20.6141 11.3502 20.3381 11.3244 20.0622V8.16C11.3232 8.05291 11.3306 7.9459 11.3467 7.84C11.3736 7.6017 11.4876 7.38172 11.6667 7.22223C11.8386 7.08575 12.0417 6.99411 12.2578 6.95556H12.2622L21.7733 5.03556Z" fill="url(#paint0_linear_596_28671)">
      </path>
      <defs>
        <linearGradient id="paint0_linear_596_28671" x1="16" y1="31.876" x2="16" y2="0.689689" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FA233B"></stop>
          <stop offset="1" stop-color="#FB5C74"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

function AmazonMusicIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 22 14" width="24" height="24"><path d="M16.7047 0C16.5291 0 16.3608 0.0697315 16.2367 0.193853C16.1126 0.317975 16.0428 0.486319 16.0428 0.661854C16.0428 0.837389 16.1126 1.00573 16.2367 1.12986C16.3608 1.25398 16.5291 1.32371 16.7047 1.32371C16.8802 1.32371 17.0486 1.25398 17.1727 1.12986C17.2968 1.00573 17.3665 0.837389 17.3665 0.661854C17.3665 0.486319 17.2968 0.317975 17.1727 0.193853C17.0486 0.0697315 16.8802 0 16.7047 0ZM0.323782 1.98556V6.61854H1.31656V3.2162C1.64264 3.13721 1.96995 3.06175 2.29383 2.97576C2.62476 2.88575 2.93952 3.13074 2.96732 3.41269L2.97249 6.61854H3.96527L3.96657 4.96391L3.97044 4.13659L3.96657 3.72293L3.96398 3.51352C3.95838 3.41702 3.94659 3.32132 3.92391 3.22654C4.26345 3.14452 4.60404 3.06529 4.94125 2.97576C5.27218 2.88508 5.58694 3.1314 5.61474 3.41269L5.61991 6.61854H6.61269L6.61398 4.96391L6.61786 4.13659L6.61398 3.72293L6.6114 3.51352C6.60544 3.41093 6.59455 3.30904 6.56874 3.20844C6.47145 2.80537 6.19694 2.45924 5.84484 2.26995C5.49604 2.07603 5.05232 2.05113 4.69823 2.17688C4.32368 2.30458 3.95193 2.44274 3.58005 2.5802C3.46868 2.45659 3.34192 2.34764 3.19742 2.26995C2.84862 2.07603 2.4049 2.05113 2.05081 2.17688C1.80484 2.26074 1.56127 2.35334 1.31656 2.44188V1.98556H0.323782ZM8.59696 1.98556L7.60547 1.98686L7.60676 3.58849C7.60081 4.1332 7.59536 4.63226 7.61323 5.21469C7.64169 5.62107 7.86232 5.99124 8.15486 6.22686C8.44939 6.46579 8.81089 6.5915 9.16962 6.61466C9.51511 6.64312 9.92058 6.53806 10.1727 6.38715C10.1994 6.37336 10.2251 6.35735 10.2516 6.3432V6.49832H11.2444V1.98686H10.2516V5.5301C10.1116 5.57863 9.97036 5.62479 9.83277 5.67876C9.59979 5.77738 9.44971 5.79434 9.24718 5.77183C8.86728 5.7255 8.57767 5.42306 8.60084 5.16427C8.60679 4.6798 8.60881 4.11006 8.59955 3.5872L8.59696 1.98556ZM16.2083 1.98556V6.61854H17.2011V1.98556H16.2083ZM20.1626 1.98815C19.9276 2.0013 19.6926 2.05482 19.4775 2.14715C18.6038 2.5297 18.174 3.42945 18.1938 4.23095C18.2005 4.60689 18.2598 5.00069 18.4252 5.3892C18.5973 5.76579 18.9015 6.14165 19.3185 6.35742C19.7288 6.57914 20.1929 6.64189 20.6099 6.61079C20.8614 6.5863 21.106 6.54272 21.3377 6.46859V5.79122C20.7486 5.88388 20.1661 5.88376 19.7955 5.63093C19.3785 5.37215 19.18 4.81764 19.1866 4.21932C19.1734 3.6766 19.4385 3.15866 19.8886 2.91112C20.3121 2.68279 20.8611 2.77549 21.3377 3.10244V2.28805C21.1854 2.19605 21.0264 2.1226 20.8477 2.067C20.6326 2.00214 20.3976 1.97499 20.1626 1.98815ZM13.8621 1.9959C13.6871 2.01161 13.5127 2.04554 13.3424 2.09932C12.758 2.28331 12.34 2.6774 12.2824 3.08047C12.1752 3.83432 12.7272 4.27593 12.9985 4.39771C13.2699 4.54464 13.5142 4.60885 13.7393 4.67305C14.1959 4.78226 14.4859 4.9058 14.5911 5.06861C14.6487 5.15796 14.6726 5.22611 14.6726 5.34525C14.6726 5.46438 14.6458 5.57096 14.52 5.64774C14.2619 5.78871 13.8185 5.84011 13.4148 5.7951C13.0111 5.75671 12.4953 5.57746 12.0717 5.40471V6.11569C12.4622 6.35859 12.8786 6.48747 13.3088 6.56425C13.8184 6.63441 14.3421 6.67948 14.9311 6.42335C15.2157 6.30818 15.5606 6.05066 15.5606 5.35042C15.5606 4.61973 15.0304 4.2986 14.7656 4.1702C14.5009 4.03584 14.2564 3.97148 14.0314 3.90132C13.813 3.8305 13.2364 3.73652 13.2364 3.23947C13.2364 3.03231 13.4549 2.91684 13.6203 2.86588C14.1763 2.68056 14.8316 2.82308 15.381 3.10503V2.28547C14.9193 2.06408 14.3869 1.94878 13.8621 1.9959ZM20.4134 8.60411C19.6781 8.60411 18.8049 8.78974 18.1615 9.25303C17.9775 9.39202 17.9771 9.5775 18.2068 9.5775C18.9421 9.48484 20.5972 9.25231 20.9188 9.66928C21.1948 10.0399 20.5976 11.6168 20.3216 12.3581C20.2296 12.5897 20.4142 12.6354 20.5982 12.4964C21.8392 11.4301 22.1613 9.25179 21.931 8.97381C21.7933 8.74283 21.1487 8.60411 20.4134 8.60411ZM0.133758 9.10825C0.0968593 9.11545 0.0622878 9.13498 0.0368064 9.16642C-0.0207749 9.23724 -0.00945099 9.34282 0.0613674 9.4004C1.42479 10.5044 2.96785 11.346 4.59998 12.0013C6.23741 12.6353 7.97356 13.0701 9.75262 13.1893C11.5323 13.3117 13.3209 13.1446 15.0384 12.7058C16.7572 12.261 18.3948 11.5771 19.8601 10.538C19.9879 10.4479 20.0375 10.2764 19.97 10.1295C19.8932 9.96335 19.6966 9.89178 19.5305 9.96789L19.5046 9.97952C18.0055 10.6698 16.3754 11.1545 14.7592 11.4881C13.1363 11.8256 11.4736 11.9542 9.82889 11.8966C8.18021 11.8297 6.54249 11.5014 4.9322 11.0434C3.33449 10.5536 1.74249 9.937 0.253977 9.13152L0.243636 9.12506C0.209551 9.10653 0.170656 9.10106 0.133758 9.10825Z" fill="url(#paint0_linear_1070_27987)"></path>
      <defs>
        <linearGradient id="paint0_linear_1070_27987" x1="11" y1="0" x2="11" y2="13.2283" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4200FF"></stop>
          <stop offset="0.5" stop-color="#3A0DBC"></stop>
          <stop offset="1" stop-color="#2C2170"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}


function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function SpotifyIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20" width="24" height="24"><path d="M10 0C4.48029 0 0 4.48029 0 10C0 15.5317 4.48029 20 10 20C15.5317 20 20 15.5197 20 10C20.0119 4.48029 15.5317 0 10 0ZM14.5878 14.4325C14.4086 14.7312 14.0263 14.8148 13.7276 14.6356C11.374 13.2019 8.42294 12.8793 4.93429 13.6679C4.59976 13.7395 4.26523 13.5364 4.19355 13.2019C4.12186 12.8674 4.32497 12.5329 4.6595 12.4612C8.47073 11.589 11.7443 11.9594 14.3728 13.5723C14.6834 13.7515 14.779 14.1338 14.5878 14.4325ZM15.8184 11.7085C15.5914 12.0789 15.1135 12.1864 14.7431 11.9713C12.055 10.3106 7.95699 9.83274 4.77897 10.8005C4.36081 10.92 3.9307 10.693 3.81123 10.2867C3.69176 9.86858 3.91876 9.43847 4.33692 9.319C7.96894 8.21983 12.4851 8.74552 15.5794 10.6452C15.9259 10.8602 16.0454 11.3381 15.8184 11.7085ZM15.9259 8.86499C12.7001 6.9534 7.38351 6.77419 4.30108 7.70609C3.81123 7.86141 3.28554 7.57467 3.13023 7.08483C2.97491 6.59498 3.26165 6.06929 3.75149 5.91398C7.28793 4.83871 13.1661 5.05376 16.8698 7.25209C17.3118 7.51493 17.4552 8.08841 17.1924 8.53047C16.9415 8.98447 16.368 9.12784 15.9259 8.86499Z" fill="#1ED760"></path></svg>
  )
}


function PodcastIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
      <path d="M8 14a5 5 0 1 1 8 0" />
      <circle cx="12" cy="11" r="1" />
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}