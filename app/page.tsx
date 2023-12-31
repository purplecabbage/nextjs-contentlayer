import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import ConvertkitSignupForm from "@/components/ConvertkitSignupForm"

export default function Home() {
  return (
    <div className="prose dark:prose-invert min-w-full">
      { allPosts.slice(0,1).map((post) => (
        <article key={post._id} className="px-5 sm:px-20">
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
      <article key='comingSoon' className='m-auto'>
        <img src='/RisingJ-1.png' alt='Rising J Upcoming' className='comingSoon'/>
      </article>
    </div>
  )
}
