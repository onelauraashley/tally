'use server'

import { createClient } from '@/lib/supabase/server'

// RLS policies required on public.profiles:
// CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
// CREATE POLICY "Users can read own profile"   ON public.profiles FOR SELECT USING (auth.uid() = id);
// CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

export async function createProfile() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const { error } = await supabase.from('profiles').insert({
    id: user.id,
    display_name: '',
    avatar_emoji: '🎲',
    theme_preference: 'system',
    profile_visibility: 'friends',
  })

  // Ignore duplicate — profile may already exist if signup was retried
  if (error && error.code !== '23505') throw new Error(error.message)
}

export async function saveProfile(displayName: string, avatarEmoji: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const { error } = await supabase
    .from('profiles')
    .update({ display_name: displayName.trim(), avatar_emoji: avatarEmoji })
    .eq('id', user.id)

  if (error) throw new Error(error.message)
}

export async function addUserGames(slugs: string[]) {
  if (!slugs.length) return

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const { data: games, error: fetchError } = await supabase
    .from('games')
    .select('id')
    .in('slug', slugs)

  if (fetchError) throw new Error(fetchError.message)
  if (!games?.length) return

  const { error } = await supabase.from('user_games').insert(
    games.map((g: { id: string }) => ({ user_id: user.id, game_id: g.id }))
  )

  if (error) throw new Error(error.message)
}
