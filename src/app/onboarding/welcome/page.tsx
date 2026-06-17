'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ScreenBackground from '@/components/ui/ScreenBackground'

const STROKE_DUR = 0.28
const STROKE_GAP = 0.35

// Each stroke's delay
const delays = [0, 1, 2, 3].map((i) => i * STROKE_GAP)
const diagonalDelay = 4 * STROKE_GAP
const taglineDelay = diagonalDelay + 0.55
const buttonDelay = taglineDelay + 0.45

export default function OnboardingWelcomePage() {
  const router = useRouter()

  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-4">
        {/* Wordmark */}
        <h1
          className="font-display font-black text-[28px] tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Tally
        </h1>

        {/* Tally mark SVG */}
        <svg
          width="108"
          height="88"
          viewBox="0 0 108 88"
          fill="none"
          aria-label="Tally mark"
        >
          {/* Four vertical strokes — violet */}
          {([16, 38, 60, 82] as const).map((x, i) => (
            <motion.path
              key={x}
              d={`M ${x} 8 L ${x} 80`}
              stroke="var(--color-violet)"
              strokeWidth={7}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: delays[i], duration: STROKE_DUR, ease: 'easeOut' }}
            />
          ))}

          {/* Diagonal cross-slash — teal */}
          <motion.path
            d="M 4 80 L 104 8"
            stroke="var(--color-teal)"
            strokeWidth={7}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: diagonalDelay, duration: 0.38, ease: 'easeOut' }}
          />
        </svg>

        {/* Tagline */}
        <motion.p
          className="font-ui text-[16px] text-center"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: taglineDelay, duration: 0.45 }}
        >
          Keep score. Keep memories.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: buttonDelay, duration: 0.4 }}
        >
          <button
            onClick={() => router.push('/onboarding/profile')}
            className="rounded-full px-10 py-3.5 font-display font-extrabold text-[14px] text-white"
            style={{
              background: 'var(--color-violet)',
              boxShadow: '0 4px 14px rgba(108,86,196,0.35)',
            }}
          >
            Get started
          </button>
          <Link
            href="/login"
            className="font-ui text-[12px]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Already have an account?{' '}
            <span className="font-semibold" style={{ color: 'var(--color-violet)' }}>
              Log in
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  )
}
