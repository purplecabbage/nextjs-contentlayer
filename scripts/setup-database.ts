import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupDatabase() {
  console.log('Setting up database tables...')

  // Create posts table
  const { error: postsError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        content TEXT NOT NULL,
        cover_image TEXT,
        published_at TIMESTAMPTZ NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "posts_public_read" ON posts;
      CREATE POLICY "posts_public_read" ON posts FOR SELECT USING (true);
      
      DROP POLICY IF EXISTS "posts_auth_insert" ON posts;
      CREATE POLICY "posts_auth_insert" ON posts FOR INSERT TO authenticated WITH CHECK (true);
      
      DROP POLICY IF EXISTS "posts_auth_update" ON posts;
      CREATE POLICY "posts_auth_update" ON posts FOR UPDATE TO authenticated USING (true);
      
      DROP POLICY IF EXISTS "posts_auth_delete" ON posts;
      CREATE POLICY "posts_auth_delete" ON posts FOR DELETE TO authenticated USING (true);
    `
  })

  if (postsError) {
    console.error('Error creating posts table:', postsError)
  } else {
    console.log('Posts table created successfully')
  }

  // Create pages table
  const { error: pagesError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS pages (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        content TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "pages_public_read" ON pages;
      CREATE POLICY "pages_public_read" ON pages FOR SELECT USING (true);
      
      DROP POLICY IF EXISTS "pages_auth_insert" ON pages;
      CREATE POLICY "pages_auth_insert" ON pages FOR INSERT TO authenticated WITH CHECK (true);
      
      DROP POLICY IF EXISTS "pages_auth_update" ON pages;
      CREATE POLICY "pages_auth_update" ON pages FOR UPDATE TO authenticated USING (true);
      
      DROP POLICY IF EXISTS "pages_auth_delete" ON pages;
      CREATE POLICY "pages_auth_delete" ON pages FOR DELETE TO authenticated USING (true);
    `
  })

  if (pagesError) {
    console.error('Error creating pages table:', pagesError)
  } else {
    console.log('Pages table created successfully')
  }

  // Create songs table
  const { error: songsError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS songs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        published_at TIMESTAMPTZ NOT NULL,
        visibility TEXT DEFAULT 'private',
        apple_music_link TEXT,
        spotify_link TEXT,
        amazon_music_link TEXT,
        stream_url TEXT,
        disco_track_id TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      ALTER TABLE songs ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "songs_public_read" ON songs;
      CREATE POLICY "songs_public_read" ON songs FOR SELECT USING (true);
      
      DROP POLICY IF EXISTS "songs_auth_insert" ON songs;
      CREATE POLICY "songs_auth_insert" ON songs FOR INSERT TO authenticated WITH CHECK (true);
      
      DROP POLICY IF EXISTS "songs_auth_update" ON songs;
      CREATE POLICY "songs_auth_update" ON songs FOR UPDATE TO authenticated USING (true);
      
      DROP POLICY IF EXISTS "songs_auth_delete" ON songs;
      CREATE POLICY "songs_auth_delete" ON songs FOR DELETE TO authenticated USING (true);
    `
  })

  if (songsError) {
    console.error('Error creating songs table:', songsError)
  } else {
    console.log('Songs table created successfully')
  }

  // Create press table
  const { error: pressError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS press (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        content TEXT NOT NULL,
        cover_image TEXT,
        published_at TIMESTAMPTZ NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      ALTER TABLE press ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "press_public_read" ON press;
      CREATE POLICY "press_public_read" ON press FOR SELECT USING (true);
      
      DROP POLICY IF EXISTS "press_auth_insert" ON press;
      CREATE POLICY "press_auth_insert" ON press FOR INSERT TO authenticated WITH CHECK (true);
      
      DROP POLICY IF EXISTS "press_auth_update" ON press;
      CREATE POLICY "press_auth_update" ON press FOR UPDATE TO authenticated USING (true);
      
      DROP POLICY IF EXISTS "press_auth_delete" ON press;
      CREATE POLICY "press_auth_delete" ON press FOR DELETE TO authenticated USING (true);
    `
  })

  if (pressError) {
    console.error('Error creating press table:', pressError)
  } else {
    console.log('Press table created successfully')
  }

  console.log('Database setup complete!')
}

setupDatabase().catch(console.error)
