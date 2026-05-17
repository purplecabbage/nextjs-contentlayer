import { createClient } from "@/lib/supabase/server"
import { PostForm } from "@/components/admin/post-form"
import { notFound } from "next/navigation"

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single()

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostForm post={post} />
    </div>
  )
}
