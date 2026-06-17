@AGENTS.md
# Rally — Claude Code Agent Guide

Rally is a cozy, warm game night score tracking web app. Responsive web first, mobile PWA second. Built with Next.js 14 App Router + Supabase + Tailwind CSS.

## Read these docs every session
- docs/BRIEF.md
- docs/DESIGN_SYSTEM.md
- docs/ARCHITECTURE.md
- docs/GAMES.md
- docs/BACKLOG.md

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS with CSS variables
- @supabase/supabase-js + @supabase/ssr
- @tabler/icons-react
- next-themes (light/dark/system)
- Framer Motion (animations)
- clsx + tailwind-merge

## Absolute rules — never break these
- Never use AsyncStorage — causes window is not defined SSR errors
- Never use React Native or Expo packages
- Never hardcode hex color values — use CSS variables
- Never use all-caps button labels
- Never build generic white card + blue button layouts
- Never make it look like a SaaS dashboard or AI chat interface
- Always use ScreenBackground on every page
- Always use Card component for cards — never raw divs with inline styles
- Always use GameIcon for game icons — never raw Tabler imports in pages
- Always use font-display (Nunito) for scores, titles, game names, buttons
- Always use font-ui (Open Sans) for labels, metadata, inputs, timestamps
- Always use next-themes for light/dark mode
- Always use @supabase/ssr with createBrowserClient and createServerClient
- Never use the old @supabase/auth-helpers package
- npm only — no yarn, no bun
- Ask before making any architectural decision not covered in these docs

## Lessons from previous build — do not repeat
- Do not use Expo or React Native — caused endless SSR and bundler issues
- Do not use AsyncStorage — causes window is not defined on Vercel
- Do not use NativeWind — use Tailwind CSS
- Do not use Reanimated — use Framer Motion
- Do not use @tabler/icons-react-native — use @tabler/icons-react
- Do not add custom Vercel build commands — framework: nextjs is all that is needed
- Do not mix package managers — npm and package-lock.json only
- Do not initialize Supabase with AsyncStorage storage adapter
- Do not write one giant prompt — chunk work into focused sessions
- Do not skip creating docs first — always create docs before writing code

## Responsive nav behavior
- Below md (768px): fixed bottom nav with FAB center button
- At md and above: fixed top nav with wordmark left, links center, actions right
- Implemented in src/components/ui/NavBar.tsx

## Current session priority
Check docs/BACKLOG.md and confirm with Laura before starting any session.