import {
  IconCards,
  IconSpade,
  IconHeart,
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
  IconHexagons,
  IconTrain,
  IconPuzzle,
  IconChessKing,
  IconCircles,
  IconTarget,
} from '@tabler/icons-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number; className?: string }>> = {
  'playing-card': IconCards,
  'spade':        IconSpade,
  'heart':        IconHeart,
  'dice-1':       IconDice1,
  'dice-2':       IconDice2,
  'dice-3':       IconDice3,
  'dice-4':       IconDice4,
  'dice-5':       IconDice5,
  'dice-6':       IconDice6,
  'hexagons':     IconHexagons,
  'train':        IconTrain,
  'puzzle':       IconPuzzle,
  'chess-king':   IconChessKing,
  'circles':      IconCircles,
  'target':       IconTarget,
}

interface GameIconProps {
  iconName: string
  size?: number
  className?: string
}

export default function GameIcon({ iconName, size = 22, className }: GameIconProps) {
  const Icon = iconMap[iconName] ?? IconPuzzle
  return <Icon size={size} stroke={1.5} className={className} />
}
