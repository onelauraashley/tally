# Tally Games Reference

## Preset games (25 — already seeded in Supabase with UUIDs)

### Card games
| Name | Slug | Icon | Score | Players | Teams |
|---|---|---|---|---|---|
| Cribbage | cribbage | playing-card | high | 2–4 | No |
| Euchre | euchre | spade | high | 4 | Yes |
| Rummy | rummy | playing-card | low | 2–6 | No |
| Gin Rummy | gin-rummy | playing-card | low | 2–4 | No |
| Spades | spades | spade | high | 4 | Yes |
| Hearts | hearts | heart | low | 4 | No |
| Canasta | canasta | playing-card | high | 2–6 | Yes |
| War | war | playing-card | high | 2 | No |

### Dice games
| Name | Slug | Icon | Score | Players | Teams |
|---|---|---|---|---|---|
| Farkle | farkle | dice-5 | high | 2–8 | No |
| Yahtzee | yahtzee | dice-3 | high | 2–8 | No |
| Bunco | bunco | dice-6 | high | 6–12 | Yes |
| Left Right Center | lrc | dice-1 | win_only | 3–12 | No |

### Board games
| Name | Slug | Icon | Score | Players | Teams |
|---|---|---|---|---|---|
| Catan | catan | hexagons | high | 3–4 | No |
| Ticket to Ride | ticket-ride | train | high | 2–5 | No |
| Scrabble | scrabble | puzzle | high | 2–4 | No |
| Clue | clue | chess-king | win_only | 3–6 | No |
| Monopoly | monopoly | chess-king | high | 2–8 | No |
| Pandemic | pandemic | circles | win_only | 2–4 | Yes |

### Lawn games
| Name | Slug | Icon | Score | Players | Teams |
|---|---|---|---|---|---|
| Kubb | kubb | target | win_only | 2–12 | Yes |
| Cornhole | cornhole | target | high | 2–4 | Yes |
| Bocce | bocce | target | high | 2–8 | Yes |
| Horseshoes | horseshoes | target | high | 2–4 | Yes |

### Other
| Name | Slug | Icon | Score | Players | Teams |
|---|---|---|---|---|---|
| Dominoes | dominoes | puzzle | low | 2–4 | No |
| Mahjong | mahjong | puzzle | high | 4 | No |
| Sequence | sequence | puzzle | win_only | 2–12 | Yes |

## Score types
- high — highest score wins
- low — lowest score wins
- win_only — no numeric score, win/loss only

## GameIcon usage
import GameIcon from '@/components/ui/GameIcon'
<GameIcon iconName={game.icon} size={22} className="text-[--color-violet]" />

## Icon name to Tabler mapping
playing-card → IconCards
spade → IconSpade
heart → IconHeart
dice-1 → IconDice1
dice-2 → IconDice2
dice-3 → IconDice3
dice-4 → IconDice4
dice-5 → IconDice5
dice-6 → IconDice6
hexagons → IconHexagons
train → IconTrain
puzzle → IconPuzzle
chess-king → IconChessKing
circles → IconCircles
target → IconTarget
fallback → IconPuzzle

## Custom games
Stored in games table with is_preset false and created_by = user UUID.
Custom games use emoji icons not Tabler icons.
No AI rules chat for custom games in v1.

## Friends discovery (planned)
- Search by username
- Search by email
- Search by phone number
- Suggested friends based on mutual connections