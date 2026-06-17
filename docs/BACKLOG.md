# Tally Feature Backlog

## Current status
Framework: Next.js 14 App Router
Scaffold: In progress
Deployed: No — pending Vercel setup

## Session queue

### Next up — Session 1 complete: verify and fix scaffold
- [ ] Verify TypeScript compiles with zero errors (npx tsc --noEmit)
- [ ] Verify csstype and all dependencies are healthy
- [ ] Confirm CSS variables are defined correctly in globals.css for light and dark mode
- [ ] Confirm Nunito and Open Sans are loading via next/font
- [ ] Confirm NavBar renders correctly — bottom on mobile, top on desktop
- [ ] Confirm ScreenBackground radial gradient is visible in both modes
- [ ] Confirm Card component l1 and l2 glass variants render correctly
- [ ] Confirm GameIcon maps all 25 icon names correctly
- [ ] Confirm Supabase client.ts and server.ts exist and are SSR safe
- [ ] Confirm middleware.ts auth session refresh is working
- [ ] Confirm vercel.json exists with framework: nextjs only
- [ ] Push to GitHub and confirm Vercel deploys successfully

### Session 2 — Auth and onboarding
- [ ] Login page — email + password, error handling, redirect to / on success
- [ ] Signup page — email + password, display name, redirect to onboarding on success
- [ ] auth/callback/route.ts — handle email confirmation redirect
- [ ] Create profile row in Supabase on signup
- [ ] Onboarding welcome — tally mark draw-in animation with Framer Motion
- [ ] Onboarding profile — display name + emoji avatar picker (12 options)
- [ ] Onboarding games — 25 game multi-select grid with category filter
- [ ] Onboarding tour — 3-step coach mark walkthrough
- [ ] Google OAuth (stub with TODO)
- [ ] Apple OAuth (stub with TODO)
- [ ] Route guard — middleware redirects new users to onboarding

### Session 3 — Home dashboard and game library
- [ ] Home dashboard — greeting, hero card (last played game), library preview, friend activity
- [ ] Hero card — game icon, last played date, result, win streak dots, Play again button
- [ ] Library preview — first 3 games from user_games joined with games
- [ ] Friend activity — placeholder cards for now
- [ ] Library page — search bar, category filter pills, game rows with icon + win%
- [ ] useLibrary hook — fetches user_games joined with games, loading + error states
- [ ] Empty states — no games yet, no sessions yet
- [ ] Long press on game row — action sheet (Play / Rules / Leaderboard / Remove)

### Session 4 — Start a game and live scoring
- [ ] Play page — select game from library, add players (registered + guest), team setup
- [ ] Session setup — choose live or final score mode, optional location note
- [ ] Live scoring screen — hero score card, player rows, round counter, undo, Add points
- [ ] Final score entry — simple form, each player + final score
- [ ] End game flow — confirmation, save session to Supabase, navigate to results
- [ ] Win celebration — confetti animation with Framer Motion
- [ ] Tally mark animation on score increment

### Session 5 — Leaderboard
- [ ] Per-game leaderboard — all time and year to date tabs
- [ ] Metrics — wins, win rate %, best score, current streak, longest streak
- [ ] Rank badges — #1 teal, #2 violet, #3 muted violet, rest neutral
- [ ] Scope toggle — friends only vs all public users
- [ ] User's own rank pinned at bottom if outside visible range
- [ ] Cross-game leaderboard on main leaderboard tab

### Session 6 — User profile and settings
- [ ] Profile page — avatar, display name, stats summary, game history
- [ ] Settings page — light/dark/system theme toggle, notification preferences
- [ ] Edit profile — update display name and avatar
- [ ] Profile visibility — public / friends only / private
- [ ] Account management — sign out, delete account

### Session 7 — Friends
- [ ] Friends page — friend list with avatar, name, favorite game, mutual game count
- [ ] Add friends — search by username
- [ ] Add friends — search by email
- [ ] Add friends — search by phone number
- [ ] Suggested friends — based on mutual connections
- [ ] Invite link — shareable deep link
- [ ] Friend requests — pending, accept, decline
- [ ] Block user

### Session 8 — AI rules chat
- [ ] Rules screen per game — static content (objective, setup, how to play, scoring, winning)
- [ ] AI chat interface — ask a question button, chat UI
- [ ] Claude API integration — system prompt scoped to game's rules JSON
- [ ] Rate limiting — 10 questions per user per day via ai_usage table
- [ ] Rate limit message — friendly copy when limit reached
- [ ] No AI chat for custom games — show user-written rules only

### Session 9 — Visual polish and animations
- [ ] Tally mark draw-in animation on score increment (Framer Motion)
- [ ] Win confetti burst (Framer Motion)
- [ ] Card hover and press micro-interactions
- [ ] Page transition animations
- [ ] Loading skeletons for all data-fetching screens
- [ ] Empty state illustrations
- [ ] A11Y audit — WCAG AA compliance check across all screens

### Session 10 — Custom games
- [ ] Create custom game form — name, category, min/max players, team toggle, score type
- [ ] Custom game icon — emoji picker
- [ ] Optional house rules — free text field
- [ ] Edit and delete custom games
- [ ] Custom games appear in library and can be played

### Session 11 — Notifications
- [ ] Web push notification setup
- [ ] Win streak notifications
- [ ] Friend activity alerts
- [ ] Game invite notifications
- [ ] Notification preferences in settings

### Session 12 — PWA and performance
- [ ] PWA manifest and icons
- [ ] Offline support — service worker
- [ ] Install prompt — add to home screen
- [ ] Performance audit — Core Web Vitals
- [ ] Image optimization

### Phase 2 — Tally Pro
- [ ] Stripe integration
- [ ] Tally Pro paywall — $2.99/month or $19.99/year
- [ ] Unlimited AI rules chat for Pro users
- [ ] Shareable score summary cards (image export)
- [ ] Extended game history beyond 6 months
- [ ] Profile themes and badge customization

## Feature additions from competitive analysis

### Competitive analysis additions — prioritized

High priority (add to Session 4 — game session):
- [ ] Score entry numpad — dedicated modal with large number buttons instead of text input. Much more usable at a game table. Numpad grid: 1-9, 0, backspace, confirm.
- [ ] Colored player avatars — assign each player a color from the 8-color palette in DESIGN_SYSTEM.md. Color carries through avatar, score card tint, and any per-player charts.
- [ ] Win celebration screen — full screen moment after game ends. Tally marks animate in one by one (Framer Motion), then confetti bursts, winner name in Nunito 900 54px, teal "Play again" and ghost "Done" CTAs. Most shareable moment in the app.
- [ ] Pause / resume session — add pause state to sessions. Status: active / paused / completed / abandoned. Paused sessions appear on home screen with "Resume" CTA prominently.

Medium priority (add to Session 5 — game tools):
- [ ] Game tools drawer — slide-up panel accessible during a live session via tools icon in header. Contains: countdown timer (set minutes, start/pause/reset), dice roller (1 die or 2 dice, animated roll), random player picker (spins through player names, lands on one), coin flip (heads/tails animation). Framer Motion for all animations.
- [ ] Active session on home screen — if a session is in progress or paused, show it as a hero card on home with a "Resume" button instead of the last played card.

Medium priority (add to Session 5 — leaderboard):
- [ ] Rank movement indicators — show ↑2 in teal or ↓1 in muted rose next to each leaderboard rank. Compare current rank to rank from previous session.

Lower priority (Phase 2):
- [ ] Buzzer — hold-to-buzz interaction with haptic feedback. Fun but not core.
- [ ] Share celebration screen — export win celebration as an image to share to group chat.

## Known issues and tech debt
- csstype may have been corrupted during initial npm install — needs verification
- Geist fonts were used instead of Nunito + Open Sans — needs correction in root layout
- Some pages from the original folder structure may not have been created — audit needed
- yarn.lock may exist — delete if present, npm only

## Decisions locked
- Framework: Next.js 14 App Router (not Expo, not CRA)
- Styling: Tailwind CSS with CSS variables (not NativeWind, not styled-components)
- Animation: Framer Motion (not Reanimated)
- Icons: @tabler/icons-react (not react-native version)
- Auth storage: Supabase cookies via @supabase/ssr (not AsyncStorage)
- Package manager: npm only
- Deployment: Vercel with framework: nextjs only in vercel.json
- Colors: violet (#6C56C4 light / #A594F9 dark) for structure, teal (#0D9E87 light / #2DD4BF dark) for celebration
- Typography: Nunito 900 display, Open Sans 400/600 UI
- No native app store distribution planned