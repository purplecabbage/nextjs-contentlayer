"use client"

import { useRef, useState } from "react"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface ImageUploadProps {
  label?: string
  value: string
  onChange: (url: string) => void
}

export function ImageUpload({ label = "Cover Image", value, onChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setUploadError(null)

    try {
      const response = await fetch(
        `/api/projects/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        }
      )

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error ?? "Upload failed")
      }

      const blob = await response.json()
      onChange(blob.url)
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
      // reset so the same file can be re-selected
      if (inputRef.current) inputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {value && (
        <div className="relative w-full max-w-sm">
          <img
            src={value}
            alt="Cover preview"
            className="rounded-md border object-cover w-full max-h-48"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-1 right-1 bg-black/60 text-white text-xs rounded px-1.5 py-0.5 hover:bg-black/80"
          >
            Remove
          </button>
        </div>
      )}

      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={uploading}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="border py-2 px-4 rounded-md text-sm hover:bg-muted disabled:opacity-50"
        >
          {uploading ? "Uploading…" : value ? "Replace Image" : "Upload Image"}
        </button>

        {/* manual URL fallback */}
        <input
          type="url"
          placeholder="or paste URL"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 border rounded-md px-3 py-2 text-sm bg-background"
        />
      </div>

      {uploadError && <p className="text-sm text-red-500">{uploadError}</p>}
    </div>
  )
}
