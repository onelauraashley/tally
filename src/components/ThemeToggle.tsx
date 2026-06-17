'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-8 w-8" />

  const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
  const icon =
    theme === 'dark'   ? <IconMoon size={16} stroke={1.5} /> :
    theme === 'light'  ? <IconSun size={16} stroke={1.5} /> :
                         <IconDeviceDesktop size={16} stroke={1.5} />

  return (
    <button
      onClick={() => setTheme(next)}
      className="flex h-8 w-8 items-center justify-center rounded-xl transition-colors"
      style={{ color: 'var(--color-text-secondary)' }}
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  )
}
