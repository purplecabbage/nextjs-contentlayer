import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { getAllPages, getPageBySlug } from "@/lib/data"

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPageFromParams(params: PageProps["params"]) {
  const { slug } = await params
  const slugString = slug?.join("/")
  const page = await getPageBySlug(slugString)
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
    description: page.description || undefined,
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug.split("/"),
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
      <Mdx content={page.content} />
    </article>
  )
}
