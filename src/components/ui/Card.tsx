import { cn } from '@/lib/utils'

type CardVariant = 'l1' | 'l2'

interface CardProps {
  variant?: CardVariant
  className?: string
  children: React.ReactNode
}

export default function Card({ variant = 'l1', className, children }: CardProps) {
  return (
    <div
      className={cn(
        /* L1 — hero cards, score displays */
        variant === 'l1' && [
          'rounded-3xl backdrop-blur-xl',
          /* light */
          'bg-white/75 border border-white/80 shadow-[0_8px_28px_rgba(108,86,196,0.16),0_2px_6px_rgba(0,0,0,0.05)]',
          /* dark */
          'dark:bg-[rgba(26,24,40,0.80)] dark:border-white/[0.08] dark:shadow-[0_8px_28px_rgba(0,0,0,0.6)]',
        ],
        /* L2 — list rows, activity cards, inputs */
        variant === 'l2' && [
          'rounded-2xl backdrop-blur-md',
          /* light */
          'bg-white/60 border border-white/70 shadow-[0_1px_5px_rgba(108,86,196,0.08)]',
          /* dark */
          'dark:bg-white/[0.06] dark:border-white/[0.07]',
        ],
        className
      )}
    >
      {children}
    </div>
  )
}
