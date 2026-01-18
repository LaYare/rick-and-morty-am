'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Character } from '@/types';
import { CharacterCard } from '@/components/ui/CharacterCard';
import styles from './CharacterList.module.css';

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const urlId = Number(searchParams.get('characterId'));
  const isUrlIdValid = characters.some((c) => c.id === urlId);
  const selectedId = isUrlIdValid ? urlId : characters[0]?.id;

  // Estado temporal de favoritos
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id] 
    );
  };

  const handleSelect = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('characterId', id.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
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
          isActive={char.id === selectedId}
          onClick={() => handleSelect(char.id)}
        />
      ))}
    </div>
  );
};