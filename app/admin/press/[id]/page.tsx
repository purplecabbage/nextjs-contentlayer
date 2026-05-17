import { createClient } from "@/lib/supabase/server"
import { PressForm } from "@/components/admin/press-form"
import { notFound } from "next/navigation"

export default async function EditPressPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: press } = await supabase
    .from("press")
    .select("*")
    .eq("id", id)
    .single()

  if (!press) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Press Article</h1>
      <PressForm press={press} />
    </div>
  )
}
