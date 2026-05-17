import { createClient } from '@/lib/supabase/server'
import type { Post, Page, Song, Press } from './types'

// Posts
export async function getAllPosts(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }
  return data || []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('Error fetching post:', error)
    return null
  }
  return data
}

// Pages
export async function getAllPages(): Promise<Page[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .order('title', { ascending: true })
  
  if (error) {
    console.error('Error fetching pages:', error)
    return []
  }
  return data || []
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('Error fetching page:', error)
    return null
  }
  return data
}

// Songs
export async function getAllSongs(): Promise<Song[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching songs:', error)
    return []
  }
  return data || []
}

export async function getSongBySlug(slug: string): Promise<Song | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('Error fetching song:', error)
    return null
  }
  return data
}

export async function getPublicSongs(): Promise<Song[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('visibility', 'public')
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching public songs:', error)
    return []
  }
  return data || []
}

// Press
export async function getAllPress(): Promise<Press[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('press')
    .select('*')
    .order('published_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching press:', error)
    return []
  }
  return data || []
}

export async function getPressBySlug(slug: string): Promise<Press | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('press')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('Error fetching press:', error)
    return null
  }
  return data
}
