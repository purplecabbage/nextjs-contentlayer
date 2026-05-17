"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Post } from "@/lib/types"

interface PostFormProps {
  post?: Post
}

export function PostForm({ post }: PostFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!post

  const [formData, setFormData] = useState({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    description: post?.description ?? "",
    content: post?.content ?? "",
    cover_image: post?.cover_image ?? "",
    published_at: post?.published_at 
      ? new Date(post.published_at).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16),
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const data = {
      ...formData,
      published_at: new Date(formData.published_at).toISOString(),
    }

    if (isEditing) {
      const { error } = await supabase
        .from("posts")
        .update(data)
        .eq("id", post.id)

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
    } else {
      const { error } = await supabase.from("posts").insert(data)

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
    }

    router.push("/admin/posts")
    router.refresh()
  }

  const handleDelete = async () => {
    if (!post) return

    setLoading(true)
    const { error } = await supabase.from("posts").delete().eq("id", post.id)

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/admin/posts")
    router.refresh()
  }

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    setFormData({ ...formData, slug })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Post" : "New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                onBlur={() => !isEditing && !formData.slug && generateSlug()}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (MDX)</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={15}
              className="font-mono text-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cover_image">Cover Image URL</Label>
              <Input
                id="cover_image"
                value={formData.cover_image}
                onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="published_at">Published At</Label>
              <Input
                id="published_at"
                type="datetime-local"
                value={formData.published_at}
                onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                required
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={() => router.push("/admin/posts")}
              disabled={loading}
              className="border py-2 px-4 rounded-md hover:bg-muted disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? "Saving..." : isEditing ? "Update Post" : "Create Post"}
            </button>
            {isEditing && !confirmDelete && (
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                disabled={loading}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                Delete
              </button>
            )}
            {isEditing && confirmDelete && (
              <>
                <span className="text-sm text-red-600 font-medium">Are you sure?</span>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={loading}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  Yes, delete
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  disabled={loading}
                  className="border py-2 px-4 rounded-md hover:bg-muted disabled:opacity-50"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
