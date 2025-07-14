import { notFound } from "next/navigation"
import { allPresses } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"

interface PressProps {
  params: {
    slug: string[]
  }
}

async function getPressFromParams(params: PressProps["params"]) {
  const slug = params?.slug?.join("/")
  const press = allPresses.find((press) => press.slugAsParams === slug)

  if (!press) {
    return null
  }
  return press
}

export async function generateMetadata({
  params,
}: PressProps): Promise<Metadata> {
  const press = await getPressFromParams(params)

  if (!press) {
    return {}
  }

  return {
    title: press.title,
    description: press.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPresses.map((press) => ({
    slug: press.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  // console.log('params = ', params)
  const press = await getPressFromParams(params)
  console.log("Post not found ", allPresses)
  if (!press) {
    
    return allPresses.map((press) => (
      <p key={press._id}>{press.title}</p>
    ))
  }

  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1 className="text-xxl">{press.title}</h1>
      {press.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {press.description}
        </p>
      )}
      here comes the body
      <Mdx code={press.body.code} />
      there it goes
    </article>
  )
}
