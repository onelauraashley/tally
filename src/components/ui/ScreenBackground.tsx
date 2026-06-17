'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ScreenBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const gradient = mounted && resolvedTheme === 'dark'
    ? 'radial-gradient(ellipse at 65% 0%, #081E1B 0%, #0E0D18 52%)'
    : 'radial-gradient(ellipse at 65% 0%, #DDF4F0 0%, #ECEAF6 52%)'

  return (
    <div
      aria-hidden="true"
      style={{ background: gradient }}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
