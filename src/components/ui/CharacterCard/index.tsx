import Image from 'next/image';
import styles from './CharacterCard.module.css';
import { CharacterCardProps } from './CharacterCard';
import { LikeButton } from '../LikeButton';

export const CharacterCard = ({ 
  character, 
  isFavorite, 
  onToggleFavorite 
}: CharacterCardProps) => {

  return (
    <article className={styles.card}>
      <h3 className={styles.name} title={character.name}>
        {character.name}
      </h3>

      <div className={styles.imageWrapper}>
        <Image
          src={character.image}
          alt={character.name}
          fill
          className={styles.image}
        />
      </div>

      <LikeButton 
        isFavorite={isFavorite}
        onClick={() => onToggleFavorite(character.id)}
        characterName={character.name}
        className={styles.likeButton}
      />
    </article>
  );
};