import Image from 'next/image';
import { Character } from '@/types';
import styles from './CharacterDetail.module.css';

interface CharacterDetailProps {
  character: Character;
}

export const CharacterDetail = ({ 
  character, 
}: CharacterDetailProps) => {

  return (
    <article className={styles.container}>
      <Image
        src={character.image}
        alt={character.name}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      <div className={styles.statusBadge}>
        <span 
          className={styles.statusDot} 
          data-live-status={character.status.toLocaleLowerCase()}
        />
        {character.status}
      </div>

      <div className={styles.overlay}>     
        <div className={styles.header}>
          <h2 className={styles.name}>{character.name}</h2>
          <span className={styles.species}>
            {character.species} {character.type ? `- ${character.type}` : ''}
          </span>
        </div>

        <div className={styles.infoGrid}>          
          <div className={styles.infoItem}>
            <span className={styles.label}>Origin</span>
            <span className={styles.value} title={character.origin.name}>
              {character.origin.name}
            </span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Location</span>
            <span className={styles.value} title={character.location.name}>
              {character.location.name}
            </span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{character.gender}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Episodes</span>
            <span className={styles.value}>{character.episode.length}</span>
          </div>

        </div>
      </div>
    </article>
  );
};