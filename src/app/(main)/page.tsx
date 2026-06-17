import Link from 'next/link'
import { IconPlus, IconTrophy, IconUsers, IconClock } from '@tabler/icons-react'
import Card from '@/components/ui/Card'

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="space-y-1">
        <h2 className="font-display font-black text-[28px]" style={{ color: 'var(--color-text-primary)' }}>
          Game Night
        </h2>
        <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
          Track scores, crown champions, and relive the glory.
        </p>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Link href="/sessions/new" className="group">
          <Card variant="l2" className="flex flex-col items-center gap-2 p-5 text-center transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: 'var(--color-violet)', boxShadow: '0 4px 14px rgba(108,86,196,0.35)' }}
            >
              <IconPlus size={22} stroke={2} className="text-white" />
            </div>
            <span className="font-display font-extrabold text-[13px]" style={{ color: 'var(--color-text-primary)' }}>
              New Session
            </span>
          </Card>
        </Link>

        <Link href="/library" className="group">
          <Card variant="l2" className="flex flex-col items-center gap-2 p-5 text-center transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--color-icon-bg)' }}>
              <IconTrophy size={22} stroke={1.5} style={{ color: 'var(--color-violet)' }} />
            </div>
            <span className="font-display font-extrabold text-[13px]" style={{ color: 'var(--color-text-primary)' }}>
              Library
            </span>
          </Card>
        </Link>

        <Link href="/sessions" className="col-span-2 group sm:col-span-1">
          <Card variant="l2" className="flex flex-col items-center gap-2 p-5 text-center transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--color-icon-bg)' }}>
              <IconClock size={22} stroke={1.5} style={{ color: 'var(--color-violet)' }} />
            </div>
            <span className="font-display font-extrabold text-[13px]" style={{ color: 'var(--color-text-primary)' }}>
              History
            </span>
          </Card>
        </Link>
      </section>

      {/* Recent sessions */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <span
            className="font-ui text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Recent
          </span>
          <Link href="/sessions" className="font-ui text-[11px] font-semibold" style={{ color: 'var(--color-violet)' }}>
            See all
          </Link>
        </div>

        <Card variant="l1" className="flex flex-col items-center gap-3 p-10 text-center">
          <IconUsers size={36} stroke={1} style={{ color: 'var(--color-text-muted)' }} />
          <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
            No sessions yet — start your first game night!
          </p>
        </Card>
      </section>
    </div>
  )
}
