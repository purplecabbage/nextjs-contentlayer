import { createClient } from "@supabase/supabase-js"
import * as fs from "fs"
import * as path from "path"
import matter from "gray-matter"

// Run with: npx tsx scripts/migrate-content.ts
// Requires: NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_SERVICE_ROLE_KEY

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY2_SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function migrateContent() {
  console.log("Starting content migration...")

  // Migrate Posts
  const postsDir = path.join(process.cwd(), "content/posts")
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))
    console.log(`Found ${postFiles.length} posts`)

    for (const file of postFiles) {
      const filePath = path.join(postsDir, file)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(".mdx", "")

      const post = {
        slug,
        title: data.title || slug,
        description: data.description || null,
        content: content.trim(),
        cover_image: data.coverImage || null,
        published_at: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      }

      const { error } = await supabase.from("posts").upsert(post, { onConflict: "slug" })
      if (error) {
        console.error(`Error migrating post ${slug}:`, error.message)
      } else {
        console.log(`Migrated post: ${slug}`)
      }
    }
  }

  // Migrate Pages
  const pagesDir = path.join(process.cwd(), "content/pages")
  if (fs.existsSync(pagesDir)) {
    const pageFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".mdx"))
    console.log(`Found ${pageFiles.length} pages`)

    for (const file of pageFiles) {
      const filePath = path.join(pagesDir, file)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(".mdx", "")

      const page = {
        slug,
        title: data.title || slug,
        description: data.description || null,
        content: content.trim(),
      }

      const { error } = await supabase.from("pages").upsert(page, { onConflict: "slug" })
      if (error) {
        console.error(`Error migrating page ${slug}:`, error.message)
      } else {
        console.log(`Migrated page: ${slug}`)
      }
    }
  }

  // Migrate Songs (JSON files)
  const songsDir = path.join(process.cwd(), "content/songs")
  if (fs.existsSync(songsDir)) {
    const songFiles = fs.readdirSync(songsDir).filter((f) => f.endsWith(".json"))
    console.log(`Found ${songFiles.length} songs`)

    for (const file of songFiles) {
      const filePath = path.join(songsDir, file)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const data = JSON.parse(fileContent)
      const slug = file.replace(".json", "")

      const song = {
        slug,
        title: data.title || slug,
        description: data.description || null,
        published_at: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        visibility: data.visibility || "private",
        apple_music_link: data.appleMusicLink || null,
        spotify_link: data.spotifyLink || null,
        amazon_music_link: data.amazonMusicLink || null,
        stream_url: data.streamUrl || null,
        disco_track_id: data.discoTrackId || null,
      }

      const { error } = await supabase.from("songs").upsert(song, { onConflict: "slug" })
      if (error) {
        console.error(`Error migrating song ${slug}:`, error.message)
      } else {
        console.log(`Migrated song: ${slug}`)
      }
    }
  }

  // Migrate Press
  const pressDir = path.join(process.cwd(), "content/press")
  if (fs.existsSync(pressDir)) {
    const pressFiles = fs.readdirSync(pressDir).filter((f) => f.endsWith(".mdx"))
    console.log(`Found ${pressFiles.length} press articles`)

    for (const file of pressFiles) {
      const filePath = path.join(pressDir, file)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(".mdx", "")

      const press = {
        slug,
        title: data.title || slug,
        description: data.description || null,
        content: content.trim(),
        cover_image: data.coverImage || null,
        published_at: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      }

      const { error } = await supabase.from("press").upsert(press, { onConflict: "slug" })
      if (error) {
        console.error(`Error migrating press ${slug}:`, error.message)
      } else {
        console.log(`Migrated press: ${slug}`)
      }
    }
  }

  console.log("Migration complete!")
}

migrateContent().catch(console.error)
