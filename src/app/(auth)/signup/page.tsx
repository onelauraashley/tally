'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { IconDice } from '@tabler/icons-react'
import { createClient } from '@/lib/supabase/client'
import { createProfile } from '@/app/actions/auth'
import { cn } from '@/lib/utils'
import ScreenBackground from '@/components/ui/ScreenBackground'
import Card from '@/components/ui/Card'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const passwordTooShort = password.length > 0 && password.length < 8

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    if (data.session) {
      // Email confirmation disabled — user is logged in immediately
      try {
        await createProfile()
      } catch {
        // Profile may already exist; continue
      }
      router.push('/onboarding/welcome')
    } else {
      // Email confirmation enabled — show check-email screen
      setAwaitingConfirmation(true)
      setLoading(false)
    }
  }

  if (awaitingConfirmation) {
    return (
      <>
        <ScreenBackground />
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="w-full max-w-sm space-y-6 text-center">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: 'var(--color-teal)', boxShadow: '0 4px 14px rgba(13,158,135,0.35)' }}
            >
              <IconDice size={32} stroke={1.5} className="text-white" />
            </div>
            <h2 className="font-display font-black text-[22px]" style={{ color: 'var(--color-text-primary)' }}>
              Check your email
            </h2>
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.
            </p>
            <Link
              href="/login"
              className="inline-block font-ui text-[12px] font-semibold"
              style={{ color: 'var(--color-violet)' }}
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </>
    )
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
            <h1 className="font-display font-black text-[28px]" style={{ color: 'var(--color-text-primary)' }}>
              Rally
            </h1>
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              Create your game night hub
            </p>
          </div>

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
                    'w-full rounded-2xl px-3 py-2.5 font-ui text-[12px] border transition-colors',
                    'focus:outline-none bg-white/50 dark:bg-white/5'
                  )}
                  style={{ borderColor: 'var(--color-nav-border)', color: 'var(--color-text-primary)' }}
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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    'w-full rounded-2xl px-3 py-2.5 font-ui text-[12px] border transition-colors',
                    'focus:outline-none bg-white/50 dark:bg-white/5',
                    passwordTooShort && 'border-red-400'
                  )}
                  style={{ borderColor: passwordTooShort ? undefined : 'var(--color-nav-border)', color: 'var(--color-text-primary)' }}
                  placeholder="8+ characters"
                />
                {passwordTooShort && (
                  <p className="font-ui text-[11px] text-red-500 dark:text-red-400">
                    At least 8 characters required
                  </p>
                )}
              </div>

              {error && (
                <p className="rounded-2xl px-3 py-2 font-ui text-[12px] text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || passwordTooShort}
                className="w-full rounded-2xl py-2.5 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: 'var(--color-violet)', boxShadow: '0 4px 14px rgba(108,86,196,0.35)' }}
              >
                {loading ? 'Creating account…' : 'Create account'}
              </button>
            </form>
          </Card>

          <p className="text-center font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
            Already have an account?{' '}
            <Link href="/login" className="font-semibold" style={{ color: 'var(--color-violet)' }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
