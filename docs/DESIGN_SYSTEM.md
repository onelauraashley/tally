# Tally Design System

## Visual identity
Cozy, warm, board game night. NOT SaaS. NOT AI chat. NOT neon gaming. NOT generic Tailwind defaults.
iOS liquid glass feel — frosted panels, radial gradient backgrounds, layered elevation.

## Color system
Two-color story: violet for structure, teal for celebration.
Never hardcode hex values. Always use CSS variables.

### Light mode
--color-violet: #6C56C4
--color-teal: #0D9E87
--color-bg: #ECEAF6
--color-card1: #FFFFFF
--color-card2: rgba(255,255,255,0.82)
--color-text-primary: #1A1A2E
--color-text-secondary: #9B8FC0
--color-text-muted: #C0B8DC
--color-nav-bg: rgba(255,255,255,0.65)
--color-nav-border: rgba(108,86,196,0.07)
--color-icon-bg: rgba(108,86,196,0.1)
--color-pill-bg: rgba(13,158,135,0.1)
--color-pill-text: #0D9E87
--color-round-tag: rgba(108,86,196,0.08)
--color-round-tag-text: #7A6FA8
--color-streak-on: #0D9E87
--color-streak-off: rgba(13,158,135,0.25)

### Dark mode
--color-violet: #A594F9
--color-teal: #2DD4BF
--color-bg: #0E0D18
--color-card1: #1A1828
--color-card2: rgba(255,255,255,0.07)
--color-text-primary: #F0EEF8
--color-text-secondary: #7B6FA8
--color-text-muted: #5A5080
--color-nav-bg: rgba(14,13,24,0.85)
--color-nav-border: rgba(255,255,255,0.10)
--color-icon-bg: rgba(165,148,249,0.18)
--color-pill-bg: rgba(45,212,191,0.1)
--color-pill-text: #2DD4BF
--color-round-tag: rgba(165,148,249,0.08)
--color-round-tag-text: #7A6FA8
--color-streak-on: #2DD4BF
--color-streak-off: rgba(45,212,191,0.25)

Note: dark mode text-secondary (#7B6FA8) and text-muted (#5A5080) are contrast-corrected for WCAG AA.

## Background
Always use ScreenBackground component. Never set background color directly on pages.
Light: radial-gradient(ellipse at 65% 0%, #DDF4F0 0%, #ECEAF6 52%)
Dark: radial-gradient(ellipse at 65% 0%, #081E1B 0%, #0E0D18 52%)
Fixed position, full viewport, z-index -1.

## Elevation — liquid glass
Three levels only. Always use Card component.

### L1 — Hero cards, score displays
Light: bg rgba(255,255,255,0.75) backdrop-blur-xl border border-white/80 shadow-[0_8px_28px_rgba(108,86,196,0.16),0_2px_6px_rgba(0,0,0,0.05)] rounded-3xl
Dark: bg rgba(26,24,40,0.80) backdrop-blur-xl border border-white/8 shadow-[0_8px_28px_rgba(0,0,0,0.6)] rounded-3xl

### L2 — List rows, activity cards, inputs
Light: bg rgba(255,255,255,0.60) backdrop-blur-md border border-white/70 shadow-[0_1px_5px_rgba(108,86,196,0.08)] rounded-2xl
Dark: bg rgba(255,255,255,0.06) backdrop-blur-md border border-white/7 rounded-2xl

### FAB
shadow-[0_4px_14px_rgba(108,86,196,0.4)] light
shadow-[0_4px_14px_rgba(165,148,249,0.3)] dark

### Primary button
shadow-[0_4px_14px_rgba(108,86,196,0.35)] light
shadow-[0_4px_14px_rgba(165,148,249,0.25)] dark

## Typography

### Display — Nunito (font-display)
Scores, titles, game names, player names, CTA buttons, leaderboard values.
Weights: 400, 700, 800, 900.
Never use for labels, metadata, inputs, timestamps.

### UI — Open Sans (font-ui)
Labels, metadata, inputs, timestamps, pill text, nav labels, descriptions.
Weights: 400, 500, 600.
Never use for scores, titles, game names, buttons.

### Scale
text-[54px] font-display font-black — score hero
text-[28px] font-display font-black — page title
text-[22px] font-display font-black — stat values
text-[18px] font-display font-black — session/game header
text-[15px] font-display font-extrabold — lead player name
text-[14px] font-display font-extrabold — CTA buttons
text-[13px] font-display font-extrabold — game names in list
text-[12px] font-ui — body, greeting
text-[11px] font-ui — metadata, streak label
text-[10px] font-ui font-semibold uppercase tracking-wider — section labels
text-[9px] font-ui font-semibold — nav labels

## Border radius
rounded-3xl — hero cards
rounded-2xl — list rows, activity cards, inputs
rounded-xl — icon tiles
rounded-full — pills, FAB, avatars, streak dots

## Component patterns

### Game icon tile
w-11 h-11 rounded-xl bg-[--color-icon-bg] flex items-center justify-center flex-shrink-0

### Win pill
bg-[--color-pill-bg] text-[--color-pill-text] font-ui text-[10px] font-bold px-2 py-0.5 rounded-full

### Streak dots
5 dots, w-2 h-2 rounded-full
On: bg-[--color-streak-on]
Off: bg-[--color-streak-off]
Label: font-ui text-[10px] font-bold text-[--color-teal]

### Section label
font-ui text-[10px] font-semibold uppercase tracking-wider text-[--color-text-secondary] mb-2

### Avatar initials
w-8 h-8 rounded-full bg-[--color-icon-bg] text-[--color-violet] font-display font-black text-xs

### Round tag
bg-[--color-round-tag] text-[--color-round-tag-text] font-ui text-[11px] font-semibold px-3 py-1 rounded-full

### Primary button
bg-[--color-violet] text-white font-display font-extrabold text-sm px-4 py-2.5 rounded-2xl shadow-[0_4px_14px_rgba(108,86,196,0.35)]

### Ghost button
bg-[--color-round-tag] text-[--color-violet] font-display font-extrabold text-sm px-4 py-2.5 rounded-2xl