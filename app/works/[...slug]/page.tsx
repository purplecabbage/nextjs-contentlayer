export const dynamic = 'force-dynamic'

interface WorksProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Works({ params }: WorksProps) {
  const { slug } = await params
  const slugString = slug?.join("/")
  return (
    <article className="py-20 prose dark:prose-invert min-w-full px-5 sm:px-20">
      <h1>Works</h1>
      <p>{slugString}</p>
    </article>
  );
}