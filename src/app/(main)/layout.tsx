import NavBar from '@/components/ui/NavBar'
import ScreenBackground from '@/components/ui/ScreenBackground'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScreenBackground />
      <NavBar />
      {/* pt-14 reserves desktop top nav; pb-24 reserves mobile bottom nav */}
      <main className="mx-auto w-full max-w-xl px-4 pt-6 pb-28 md:pt-20 md:pb-10">
        {children}
      </main>
    </>
  )
}
