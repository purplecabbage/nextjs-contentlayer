import { createClient } from "@/lib/supabase/server"
import { PageForm } from "@/components/admin/page-form"
import { notFound } from "next/navigation"

export default async function EditPagePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: page } = await supabase
    .from("pages")
    .select("*")
    .eq("id", id)
    .single()

  if (!page) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Page</h1>
      <PageForm page={page} />
    </div>
  )
}
