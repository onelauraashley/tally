'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconCheck } from '@tabler/icons-react'
import { PRESET_GAMES, GAME_CATEGORIES, type GameCategory } from '@/constants/games'
import { addUserGames } from '@/app/actions/auth'
import { cn } from '@/lib/utils'
import ScreenBackground from '@/components/ui/ScreenBackground'
import GameIcon from '@/components/ui/GameIcon'

type Filter = 'All' | GameCategory

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

export default function OnboardingGamesPage() {
  const router = useRouter()
  const [filter, setFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)

  const filters: Filter[] = ['All', ...GAME_CATEGORIES]

  const visible = filter === 'All'
    ? PRESET_GAMES
    : PRESET_GAMES.filter((g) => g.category === filter)

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      return next
    })
  }

  async function handleContinue() {
    setLoading(true)
    try {
      await addUserGames(Array.from(selected))
      router.push('/onboarding/tour')
    } catch {
      setLoading(false)
    }
  }

  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <div className="px-4 pt-14 pb-4">
          <StepDots current={2} total={3} />
          <div className="mt-8 space-y-1">
            <h1
              className="font-display font-black text-[28px]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Pick your games
            </h1>
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              Add any you play — change this anytime.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {filters.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="flex-shrink-0 rounded-full px-4 py-1.5 font-ui text-[12px] font-semibold transition-colors"
                  style={{
                    background: active ? 'var(--color-violet)' : 'var(--color-round-tag)',
                    color: active ? '#fff' : 'var(--color-text-secondary)',
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        {/* Game grid */}
        <div className="flex-1 overflow-y-auto px-4 pb-36">
          <div className="grid grid-cols-2 gap-3">
            {visible.map((game) => {
              const isSelected = selected.has(game.slug)
              return (
                <button
                  key={game.slug}
                  onClick={() => toggle(game.slug)}
                  className={cn(
                    'relative flex flex-col gap-2.5 rounded-2xl p-4 text-left backdrop-blur-md transition-all duration-150',
                    'border',
                    isSelected
                      ? 'scale-[0.98]'
                      : 'hover:scale-[1.01]'
                  )}
                  style={{
                    background: isSelected
                      ? 'var(--color-icon-bg)'
                      : 'rgba(255,255,255,0.60)',
                    borderColor: isSelected ? 'var(--color-violet)' : 'rgba(255,255,255,0.70)',
                    boxShadow: isSelected
                      ? '0 1px 5px rgba(108,86,196,0.18)'
                      : '0 1px 5px rgba(108,86,196,0.08)',
                  }}
                >
                  {/* Icon + checkmark row */}
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: 'var(--color-icon-bg)' }}
                    >
                      <GameIcon
                        iconName={game.icon}
                        size={22}
                        className={cn(isSelected ? 'text-[--color-violet]' : 'text-[--color-text-secondary]')}
                      />
                    </div>
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all"
                      style={{
                        borderColor: isSelected ? 'var(--color-violet)' : 'var(--color-text-muted)',
                        background: isSelected ? 'var(--color-violet)' : 'transparent',
                      }}
                    >
                      {isSelected && <IconCheck size={12} stroke={3} className="text-white" />}
                    </div>
                  </div>

                  {/* Name + meta */}
                  <div>
                    <p
                      className="font-display font-extrabold text-[13px] leading-tight"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {game.name}
                    </p>
                    <p className="mt-0.5 font-ui text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
                      {game.category} · {game.players}p
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Sticky footer */}
        <div
          className="fixed bottom-0 inset-x-0 px-4 pb-8 pt-4"
          style={{ background: 'var(--color-nav-bg)', borderTop: '1px solid var(--color-nav-border)' }}
        >
          <div className="mx-auto flex max-w-sm items-center justify-between">
            <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
              {selected.size > 0 ? `${selected.size} game${selected.size === 1 ? '' : 's'} added` : 'No games selected'}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/onboarding/tour')}
                className="font-ui text-[12px] font-semibold"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Skip
              </button>
              <button
                onClick={handleContinue}
                disabled={loading}
                className="rounded-2xl px-6 py-2.5 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: 'var(--color-violet)', boxShadow: '0 4px 14px rgba(108,86,196,0.35)' }}
              >
                {loading ? 'Saving…' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
