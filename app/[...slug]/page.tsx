import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPages } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h2>{page.title}</h2>
      {page.description && <p className="text-xl">{page.description}</p>}
      <Mdx code={page.body.code} />
    </article>
  )
}
