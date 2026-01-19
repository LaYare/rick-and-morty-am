import { Character } from '@/types';

export interface CharacterCardProps {
  character: Character;
  isFavorite: boolean;
  onAddFavorite: (id: number) => void;
  isActive?: boolean;
  onClick: () => void;
}
