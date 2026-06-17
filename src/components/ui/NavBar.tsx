'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconHome,
  IconBooks,
  IconPlus,
  IconHistory,
  IconSettings,
  IconDice,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ThemeToggle'

const navItems = [
  { href: '/',         icon: IconHome,    label: 'Home' },
  { href: '/library',  icon: IconBooks,   label: 'Library' },
  { href: '/sessions', icon: IconHistory, label: 'History' },
  { href: '/settings', icon: IconSettings,label: 'Settings' },
]

export default function NavBar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Desktop top nav (md+) ── */}
      <header
        className="hidden md:flex fixed top-0 inset-x-0 z-40 h-14 items-center px-6"
        style={{ background: 'var(--color-nav-bg)', borderBottom: '1px solid var(--color-nav-border)' }}
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 mr-8">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: 'var(--color-violet)' }}
          >
            <IconDice size={16} stroke={1.5} className="text-white" />
          </div>
          <span
            className="font-display font-black text-[15px]"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Rally
          </span>
        </Link>

        {/* Center links */}
        <nav className="flex flex-1 items-center justify-center gap-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-ui text-[13px] font-medium transition-colors',
                  active
                    ? 'font-semibold'
                    : 'opacity-70 hover:opacity-100'
                )}
                style={{
                  color: active ? 'var(--color-violet)' : 'var(--color-text-secondary)',
                  background: active ? 'var(--color-icon-bg)' : undefined,
                }}
              >
                <Icon size={15} stroke={active ? 2 : 1.5} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/sessions/new"
            className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90"
            style={{
              background: 'var(--color-violet)',
              boxShadow: '0 4px 14px rgba(108,86,196,0.35)',
            }}
          >
            <IconPlus size={15} stroke={2} />
            New game
          </Link>
        </div>
      </header>

      {/* ── Mobile bottom nav (below md) ── */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-end pb-safe"
        style={{ background: 'var(--color-nav-bg)', borderTop: '1px solid var(--color-nav-border)' }}
      >
        {/* Home */}
        <MobileNavItem href="/" icon={IconHome} label="Home" active={isActive('/')} />
        {/* Library */}
        <MobileNavItem href="/library" icon={IconBooks} label="Library" active={isActive('/library')} />

        {/* FAB — New game */}
        <div className="flex flex-1 flex-col items-center pb-2 pt-1">
          <Link
            href="/sessions/new"
            className="flex h-14 w-14 items-center justify-center rounded-full text-white -translate-y-4"
            style={{
              background: 'var(--color-violet)',
              boxShadow: '0 4px 14px rgba(108,86,196,0.4)',
            }}
            aria-label="New game"
          >
            <IconPlus size={26} stroke={2} />
          </Link>
        </div>

        {/* History */}
        <MobileNavItem href="/sessions" icon={IconHistory} label="History" active={isActive('/sessions')} />
        {/* Settings */}
        <MobileNavItem href="/settings" icon={IconSettings} label="Settings" active={isActive('/settings')} />
      </nav>
    </>
  )
}

function MobileNavItem({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string
  icon: React.ComponentType<{ size?: number; stroke?: number }>
  label: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className="flex flex-1 flex-col items-center gap-0.5 pb-2 pt-1 transition-opacity"
      style={{ color: active ? 'var(--color-violet)' : 'var(--color-text-muted)' }}
    >
      <Icon size={22} stroke={active ? 2 : 1.5} />
      <span className="font-ui text-[9px] font-semibold">{label}</span>
    </Link>
  )
}
