'use client';
import { useState } from 'react';
import { Character } from '@/types';
import { CharacterCard } from '@/components/ui/CharacterCard';
import styles from './CharacterList.module.css';

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  // Estado local temporal para probar los corazones
  const [favorites, setFavorites] = useState<number[]>([]);

  // Esta función simula el agregar o quitar de favoritos
  const toggleFavorite = (id: number) => {
    setFavorites((prev) => 
      prev.includes(id) 
        ? prev.filter((favId) => favId !== id) 
        : [...prev, id] 
    );
  };

  if (!characters?.length) return <div style={{color:'white'}}>No hay resultados</div>;

  return (
    <div className={styles.grid}>
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          isFavorite={favorites.includes(char.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};