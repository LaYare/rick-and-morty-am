import { getCharacters as clientGetCharacters, getCharacter as clientGetCharacter } from 'rickmortyapi';
import { ApiResponse, Character, CharacterFilters } from '@/types';

export const getCharacters = async (page: number = 1, filters?: CharacterFilters): Promise<ApiResponse> => {
  
  const response = await clientGetCharacters({ 
    page, 
    ...(filters?.name?.trim() ? { name: filters.name } : {})
  });
  
  if (response.status !== 200 || !response.data) {
    if (response.status === 404) {
        return {
            info: {count: 0, pages: 0, next: null, prev: null},
            results: []
        }
    }
    throw new Error('Error fetching characters from SDK');
  }

  return response.data as unknown as ApiResponse;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await clientGetCharacter(id);

  if (response.status !== 200 || !response.data) {
    throw new Error(`Character with id ${id} not found`);
  }

  return response.data as unknown as Character;
};