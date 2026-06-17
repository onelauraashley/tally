export type GameCategory = 'Cards' | 'Dice' | 'Board' | 'Lawn' | 'Other'
export type ScoreType = 'high' | 'low' | 'win_only'

export interface PresetGame {
  name: string
  slug: string
  icon: string
  category: GameCategory
  players: string
  teams: boolean
  scoreType: ScoreType
}

export const PRESET_GAMES: PresetGame[] = [
  // Cards
  { name: 'Cribbage',        slug: 'cribbage',     icon: 'playing-card', category: 'Cards', players: '2–4',  teams: false, scoreType: 'high' },
  { name: 'Euchre',          slug: 'euchre',       icon: 'spade',        category: 'Cards', players: '4',    teams: true,  scoreType: 'high' },
  { name: 'Rummy',           slug: 'rummy',        icon: 'playing-card', category: 'Cards', players: '2–6',  teams: false, scoreType: 'low' },
  { name: 'Gin Rummy',       slug: 'gin-rummy',    icon: 'playing-card', category: 'Cards', players: '2–4',  teams: false, scoreType: 'low' },
  { name: 'Spades',          slug: 'spades',       icon: 'spade',        category: 'Cards', players: '4',    teams: true,  scoreType: 'high' },
  { name: 'Hearts',          slug: 'hearts',       icon: 'heart',        category: 'Cards', players: '4',    teams: false, scoreType: 'low' },
  { name: 'Canasta',         slug: 'canasta',      icon: 'playing-card', category: 'Cards', players: '2–6',  teams: true,  scoreType: 'high' },
  { name: 'War',             slug: 'war',          icon: 'playing-card', category: 'Cards', players: '2',    teams: false, scoreType: 'high' },
  // Dice
  { name: 'Farkle',          slug: 'farkle',       icon: 'dice-5',       category: 'Dice',  players: '2–8',  teams: false, scoreType: 'high' },
  { name: 'Yahtzee',         slug: 'yahtzee',      icon: 'dice-3',       category: 'Dice',  players: '2–8',  teams: false, scoreType: 'high' },
  { name: 'Bunco',           slug: 'bunco',        icon: 'dice-6',       category: 'Dice',  players: '6–12', teams: true,  scoreType: 'high' },
  { name: 'Left Right Center', slug: 'lrc',        icon: 'dice-1',       category: 'Dice',  players: '3–12', teams: false, scoreType: 'win_only' },
  // Board
  { name: 'Catan',           slug: 'catan',        icon: 'hexagons',     category: 'Board', players: '3–4',  teams: false, scoreType: 'high' },
  { name: 'Ticket to Ride',  slug: 'ticket-ride',  icon: 'train',        category: 'Board', players: '2–5',  teams: false, scoreType: 'high' },
  { name: 'Scrabble',        slug: 'scrabble',     icon: 'puzzle',       category: 'Board', players: '2–4',  teams: false, scoreType: 'high' },
  { name: 'Clue',            slug: 'clue',         icon: 'chess-king',   category: 'Board', players: '3–6',  teams: false, scoreType: 'win_only' },
  { name: 'Monopoly',        slug: 'monopoly',     icon: 'chess-king',   category: 'Board', players: '2–8',  teams: false, scoreType: 'high' },
  { name: 'Pandemic',        slug: 'pandemic',     icon: 'circles',      category: 'Board', players: '2–4',  teams: true,  scoreType: 'win_only' },
  // Lawn
  { name: 'Kubb',            slug: 'kubb',         icon: 'target',       category: 'Lawn',  players: '2–12', teams: true,  scoreType: 'win_only' },
  { name: 'Cornhole',        slug: 'cornhole',     icon: 'target',       category: 'Lawn',  players: '2–4',  teams: true,  scoreType: 'high' },
  { name: 'Bocce',           slug: 'bocce',        icon: 'target',       category: 'Lawn',  players: '2–8',  teams: true,  scoreType: 'high' },
  { name: 'Horseshoes',      slug: 'horseshoes',   icon: 'target',       category: 'Lawn',  players: '2–4',  teams: true,  scoreType: 'high' },
  // Other
  { name: 'Dominoes',        slug: 'dominoes',     icon: 'puzzle',       category: 'Other', players: '2–4',  teams: false, scoreType: 'low' },
  { name: 'Mahjong',         slug: 'mahjong',      icon: 'puzzle',       category: 'Other', players: '4',    teams: false, scoreType: 'high' },
  { name: 'Sequence',        slug: 'sequence',     icon: 'puzzle',       category: 'Other', players: '2–12', teams: true,  scoreType: 'win_only' },
]

export const GAME_CATEGORIES: GameCategory[] = ['Cards', 'Dice', 'Board', 'Lawn', 'Other']
