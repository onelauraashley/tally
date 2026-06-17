import ScreenBackground from '@/components/ui/ScreenBackground'

export default function GameSessionPage({ params }: { params: { sessionId: string } }) {
  return (
    <>
      <ScreenBackground />
      <div className="flex min-h-screen items-center justify-center px-4">
        <h1 className="font-display font-black text-[28px]" style={{ color: 'var(--color-text-primary)' }}>
          Session {params.sessionId}
        </h1>
      </div>
    </>
  )
}
