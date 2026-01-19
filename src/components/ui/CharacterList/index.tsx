'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Character } from '@/types';
import { CharacterCard } from '@/components/ui/CharacterCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFavoriteAsync, fetchFavorites } from '@/store/slices/favoritesSlice';
import styles from './CharacterList.module.css';
import { FavoritesDropdown } from '../FavoritesDropdown';

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const urlId = Number(searchParams.get('characterId'));
  const isUrlIdValid = characters.some((c) => c.id === urlId);
  const selectedId = isUrlIdValid ? urlId : characters[0]?.id;

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleAddFavorite = (character: Character) => {
    dispatch(addFavoriteAsync(character));
  };
  const handleSelect = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('characterId', id.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  if (!characters?.length) return <div style={{color:'white'}}>No hay resultados</div>;

  return (
    <div className={styles.grid}>
      {characters.map((char) => { 
        const isFav = favorites.some((fav) => fav.id === char.id);

        return(
        <CharacterCard
          key={char.id}
          character={char}
          isFavorite={isFav}
          onAddFavorite={() => !isFav && handleAddFavorite(char)}
          isActive={char.id === selectedId}
          onClick={() => handleSelect(char.id)}
        />
      )})}
      <FavoritesDropdown />
    </div>
  );
};