import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import ConvertkitSignupForm from "@/components/ConvertkitSignupForm"

export default function Home() {
  return (
    <div className="prose dark:prose-invert min-w-full">
      <article key='comingSoon' className='m-auto'>
        <h4>Coming Soon ...</h4>
        <img src='/RisingJ-1.png' alt='Rising J Upcoming' className='comingSoon'/>
        <p>A new look, a new focus, a new day.</p>
      </article>
      {/* {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))} */}
      {/* <ConvertkitSignupForm formId={52}/> */}
    </div>
  )
}
