'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { IconBooks, IconTrophy, IconUsers } from '@tabler/icons-react'
import ScreenBackground from '@/components/ui/ScreenBackground'
import Card from '@/components/ui/Card'

const STEPS = [
  {
    icon: IconBooks,
    title: 'Your game library',
    description:
      'All your games in one place. Track sessions, see your win rate, and jump back in.',
  },
  {
    icon: IconTrophy,
    title: 'Start a game night',
    description:
      'Add players, track scores round by round, and celebrate the winner.',
  },
  {
    icon: IconUsers,
    title: "See who's really winning",
    description:
      'Leaderboards show all-time and year-to-date stats across your whole friend group.',
  },
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 48 : -48, opacity: 0 }),
}

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

export default function OnboardingTourPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)

  const current = STEPS[step]
  const Icon = current.icon
  const isLast = step === STEPS.length - 1

  function goNext() {
    if (isLast) {
      router.push('/')
      return
    }
    setDir(1)
    setStep((s) => s + 1)
  }

  function goBack() {
    if (step === 0) return
    setDir(-1)
    setStep((s) => s - 1)
  }

  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen flex-col items-center justify-between px-4 pt-14 pb-12">
        {/* Top step dots */}
        <StepDots current={step + 1} total={STEPS.length} />

        {/* Animated step content */}
        <div className="relative w-full max-w-sm overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <Card variant="l1" className="flex flex-col items-center gap-6 px-8 py-10 text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--color-icon-bg)' }}
                >
                  <Icon size={32} stroke={1.5} style={{ color: 'var(--color-violet)' }} />
                </div>

                <div className="space-y-3">
                  <h2
                    className="font-display font-black text-[22px]"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {current.title}
                  </h2>
                  <p
                    className="font-ui text-[13px] leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {current.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom navigation */}
        <div className="flex w-full max-w-sm items-center justify-between">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="font-ui text-[13px] font-semibold transition-opacity disabled:opacity-0"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Back
          </button>

          <button
            onClick={goNext}
            className="rounded-2xl px-8 py-3 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90"
            style={{
              background: 'var(--color-violet)',
              boxShadow: '0 4px 14px rgba(108,86,196,0.35)',
            }}
          >
            {isLast ? "Let's play" : 'Next'}
          </button>
        </div>
      </div>
    </>
  )
}
