import Link from 'next/link';


export default function Footer() {

  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`
  const copyrightName = 'RisingJ.com.';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 py-8 text-sm dark:border-neutral-700">
        <div className="mx-auto  flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>&copy; {copyrightDate} {copyrightName} All rights reserved.</p>
          {/* <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" /> */}
        </div>
      </div>
    </footer>
  )
}