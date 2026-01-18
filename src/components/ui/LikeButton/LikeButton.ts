export interface LikeButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  characterName: string;
  className?: string;
}