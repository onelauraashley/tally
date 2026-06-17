import { IconPlus, IconBooks } from '@tabler/icons-react'
import Card from '@/components/ui/Card'

export default function LibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-black text-[28px]" style={{ color: 'var(--color-text-primary)' }}>
            Library
          </h2>
          <p className="mt-0.5 font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
            Your collection of games and their rules.
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 rounded-2xl px-4 py-2 font-display font-extrabold text-[14px] text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-violet)', boxShadow: '0 4px 14px rgba(108,86,196,0.35)' }}
        >
          <IconPlus size={16} stroke={2} />
          Add game
        </button>
      </div>

      <Card variant="l1" className="flex flex-col items-center gap-3 p-12 text-center">
        <IconBooks size={40} stroke={1} style={{ color: 'var(--color-text-muted)' }} />
        <h3 className="font-display font-extrabold text-[15px]" style={{ color: 'var(--color-text-primary)' }}>
          No games yet
        </h3>
        <p className="font-ui text-[12px]" style={{ color: 'var(--color-text-secondary)' }}>
          Add your first game to start tracking scores.
        </p>
      </Card>
    </div>
  )
}
