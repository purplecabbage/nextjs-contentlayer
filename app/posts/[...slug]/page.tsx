import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { getAllPosts, getPostBySlug } from "@/lib/data"

// Use dynamic rendering since database may not be available at build time
export const dynamic = 'force-dynamic'

interface PostProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: PostProps["params"]) {
  const { slug } = await params
  const slugString = slug?.join("/")
  const post = await getPostBySlug(slugString)
  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description || undefined,
  }
}



export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)
  
  if (!post) {
    // Show list of all posts if no specific post found
    const allPosts = await getAllPosts()
    if (allPosts.length === 0) {
      return (
        <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
          <h1>Posts</h1>
          <p>No posts found. Add some content in the admin panel.</p>
        </article>
      )
    }
    return (
      <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
        <h1>Posts</h1>
        {allPosts.map((post) => (
          <p key={post.id}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </p>
        ))}
      </article>
    )
  }

  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx content={post.content} />
    </article>
  )
}
