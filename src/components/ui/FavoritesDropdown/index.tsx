'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeFavoriteAsync } from '@/store/slices/favoritesSlice';
import styles from './FavoritesDropdown.module.css';
import { Button } from '@/components/button';
import { TrashIcon } from '@/components/icons';

export const FavoritesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const handleRemove = (id: number) => {
    dispatch(removeFavoriteAsync(id));
    if (favorites.length === 1) setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Button 
        aria-label='Toggle favoritos'
        className={styles.triggerBtn} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Favs</span>
      </Button>

      {isOpen && (
        <ul className={styles.list}>
          {favorites.map((char) => (
            <li key={char.id} className={styles.item}>
              <span className={styles.name}>{char.name}</span>
              
              <Button 
                aria-label='Eliminar favorito'
                onClick={() => handleRemove(char.id)}
                className={styles.trashBtn}
              >
                <TrashIcon size={20}/>
              </Button>
            </li>
          ))}
          {
            favorites.length === 0 && <li className={styles.itemEmpty}>No tienes favoritos</li>
          }
        </ul>
      )}
    </div>
  );
};