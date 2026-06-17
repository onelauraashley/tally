'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveProfile } from '@/app/actions/auth'
import { cn } from '@/lib/utils'
import ScreenBackground from '@/components/ui/ScreenBackground'
import Card from '@/components/ui/Card'

const AVATARS = ['🎲', '🃏', '🎯', '🏆', '🎮', '♟️', '🎳', '🎪', '🌟', '🔥', '👑', '🎊']

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: i === current - 1 ? '20px' : '6px',
            background: i === current - 1 ? 'var(--color-violet)' : 'var(--color-text-muted)',
          }}
        />
      ))}
    </div>
  )
}

export default function OnboardingProfilePage() {
  const router = useRouter()
  const [displayName, setDisplayName] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState('🎲')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canContinue = displayName.trim().length > 0

  async function handleContinue() {
    if (!canContinue) return
    setLoading(true)
    setError(null)
    try {
      await saveProfile(displayName.trim(), selectedEmoji)
      router.push('/onboarding/games')
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen flex-col px-4 pt-14 pb-10">
        {/* Step indicator */}
        <div className="mb-10">
          <StepDots current={1} total={3} />
        </div>

        <div className="flex flex-1 flex-col gap-6 mx-auto w-full max-w-sm">
          <div className="space-y-1">
            <h1
              className="font-display font-black text-[28px]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              What should we call you?
            </h1>
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              This is how you'll appear to friends.
            </p>
          </div>

          {/* Name input */}
          <Card variant="l2" className="px-4 py-3">
            <input
              type="text"
              autoFocus
              maxLength={30}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent font-ui text-[15px] focus:outline-none"
              style={{ color: 'var(--color-text-primary)' }}
            />
          </Card>

          {/* Avatar picker */}
          <div className="space-y-3">
            <p
              className="font-ui text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Pick an avatar
            </p>
            <div className="grid grid-cols-6 gap-2">
              {AVATARS.map((emoji) => {
                const selected = emoji === selectedEmoji
                return (
                  <button
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={cn(
                      'flex items-center justify-center rounded-2xl py-3 text-2xl transition-all duration-150',
                      selected ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    )}
                    style={{
                      background: selected ? 'var(--color-icon-bg)' : 'var(--color-round-tag)',
                      border: selected ? '2px solid var(--color-violet)' : '2px solid transparent',
                      boxShadow: selected ? '0 1px 5px rgba(108,86,196,0.18)' : undefined,
                    }}
                    aria-label={emoji}
                  >
                    {emoji}
                  </button>
                )
              })}
            </div>
          </div>

          {error && (
            <p className="rounded-2xl px-3 py-2 font-ui text-[12px] text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </p>
          )}

          {/* Continue */}
          <button
            onClick={handleContinue}
            disabled={!canContinue || loading}
            className="mt-auto w-full rounded-2xl py-3 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
            style={{
              background: 'var(--color-violet)',
              boxShadow: canContinue ? '0 4px 14px rgba(108,86,196,0.35)' : undefined,
            }}
          >
            {loading ? 'Saving…' : 'Continue'}
          </button>
        </div>
      </div>
    </>
  )
}
