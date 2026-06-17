'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { IconDice } from '@tabler/icons-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import ScreenBackground from '@/components/ui/ScreenBackground'
import Card from '@/components/ui/Card'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/')
    router.refresh()
  }

  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: 'var(--color-violet)', boxShadow: '0 4px 14px rgba(108,86,196,0.35)' }}
            >
              <IconDice size={30} stroke={1.5} className="text-white" />
            </div>
            <h1
              className="font-display font-black text-[28px]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Tally
            </h1>
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              Sign in to your game night hub
            </p>
          </div>

          {/* Card */}
          <Card variant="l1" className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  className="font-ui text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    'w-full rounded-2xl px-3 py-2.5 font-ui text-[12px]',
                    'border focus:outline-none focus:ring-2 transition-colors',
                    'bg-white/50 dark:bg-white/5'
                  )}
                  style={{
                    borderColor: 'var(--color-nav-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  className="font-ui text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    'w-full rounded-2xl px-3 py-2.5 font-ui text-[12px]',
                    'border focus:outline-none focus:ring-2 transition-colors',
                    'bg-white/50 dark:bg-white/5'
                  )}
                  style={{
                    borderColor: 'var(--color-nav-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="rounded-2xl px-3 py-2 font-ui text-[12px] text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl py-2.5 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{
                  background: 'var(--color-violet)',
                  boxShadow: '0 4px 14px rgba(108,86,196,0.35)',
                }}
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          </Card>

          <p className="text-center font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
            No account?{' '}
            <Link href="/signup" className="font-semibold" style={{ color: 'var(--color-violet)' }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
