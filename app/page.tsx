import { allPosts } from "@/.contentlayer/generated"
import StreamLinks from "@/components/StreamLinks"
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-w-full">
      <article key='comingSoon' className='m-auto'>
        <StreamLinks/>
      </article>
    </div>
  )
}
