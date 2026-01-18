'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SearchIcon, UserIcon } from '@/components/icons';
import styles from './Search.module.css';

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = (character: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (character) {
      params.set('name', character);
    } else {
      params.delete('name');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onInputChange = (character: string) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      handleSearch(character);
    }, 500);

    setTypingTimeout(newTimeout);
  };

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <SearchIcon className={styles.iconLeft} />

      <input
        className={styles.input}
        type="text"
        placeholder="Find your character..." 
        defaultValue={searchParams.get('name')?.toString()}
        onChange={(e) => {
            onInputChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (typingTimeout) clearTimeout(typingTimeout);
            handleSearch(e.currentTarget.value);
          }
        }}
      />
      <UserIcon className={styles.iconRight}/>
    </div>
    </div>
  );
};