import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { getAllPress, getPressBySlug } from "@/lib/data"

// Use dynamic rendering since database may not be available at build time
export const dynamic = 'force-dynamic'

interface PressProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPressFromParams(params: PressProps["params"]) {
  const { slug } = await params
  const slugString = slug?.join("/")
  const press = await getPressBySlug(slugString)
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
    description: press.description || undefined,
  }
}



export default async function PressPage({ params }: PressProps) {
  const press = await getPressFromParams(params)
  
  if (!press) {
    // Show list of all press items if no specific one found
    const allPressItems = await getAllPress()
    if (allPressItems.length === 0) {
      return (
        <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
          <h1>Press</h1>
          <p>No press items found. Add some content in the admin panel.</p>
        </article>
      )
    }
    return (
      <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
        <h1>Press</h1>
        {allPressItems.map((item) => (
          <p key={item.id}>
            <a href={`/press/${item.slug}`}>{item.title}</a>
          </p>
        ))}
      </article>
    )
  }

  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1 className="text-xxl">{press.title}</h1>
      {press.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {press.description}
        </p>
      )}
      <Mdx content={press.content} />
    </article>
  )
}
