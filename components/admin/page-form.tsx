"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Page } from "@/lib/types"

interface PageFormProps {
  page?: Page
}

export function PageForm({ page }: PageFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!page

  const [formData, setFormData] = useState({
    title: page?.title ?? "",
    slug: page?.slug ?? "",
    description: page?.description ?? "",
    content: page?.content ?? "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (isEditing) {
      const { error } = await supabase
        .from("pages")
        .update(formData)
        .eq("id", page.id)

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
    } else {
      const { error } = await supabase.from("pages").insert(formData)

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
    }

    router.push("/admin/pages")
    router.refresh()
  }

  const handleDelete = async () => {
    if (!page || !confirm("Are you sure you want to delete this page?")) return

    setLoading(true)
    const { error } = await supabase.from("pages").delete().eq("id", page.id)

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/admin/pages")
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
        <CardTitle>{isEditing ? "Edit Page" : "New Page"}</CardTitle>
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

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? "Saving..." : isEditing ? "Update Page" : "Create Page"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
