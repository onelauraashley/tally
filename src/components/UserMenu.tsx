'use client'

import { useRouter } from 'next/navigation'
import { IconLogout } from '@tabler/icons-react'
import { createClient } from '@/lib/supabase/client'

export function UserMenu() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex h-8 w-8 items-center justify-center rounded-xl transition-colors"
      style={{ color: 'var(--color-text-secondary)' }}
      aria-label="Sign out"
    >
      <IconLogout size={16} stroke={1.5} />
    </button>
  )
}
