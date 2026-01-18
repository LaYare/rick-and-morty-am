import { Button } from '@/components/button';
import { HeartIcon } from '@/components/icons';
import { LikeButtonProps } from './LikeButton';

export const LikeButton = ({ isFavorite, onClick, characterName, className }: LikeButtonProps) => {
  return (
    <Button
      className={className}
      onClick={() => {
        onClick();
      }}
      aria-label={'like'}
    >
      <HeartIcon 
        fill={isFavorite ? "currentColor" : "none"} 
        color={isFavorite ? "#FF0000" : "currentColor"} 
        size={24}
      />
      <span>Like</span>
    </Button>
  );
};