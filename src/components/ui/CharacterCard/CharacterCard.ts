import { Character } from '@/types';

export interface CharacterCardProps {
  character: Character;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}
