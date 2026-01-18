import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterCard } from './index';
import { Character } from '@/types';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Earth', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: ''
};

describe('CharacterCard Component', () => {
  const mockToggle = jest.fn();

  it('debe renderizar correctamente', () => {
    render(
      <CharacterCard 
        character={mockCharacter} 
        isFavorite={false} 
        onToggleFavorite={mockToggle} 
      />
    );
    expect(screen.getByRole('heading', { name: /rick sanchez/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
  });

  it('debe ejecutar el toggle al hacer click', () => {
    render(
      <CharacterCard 
        character={mockCharacter} 
        isFavorite={false} 
        onToggleFavorite={mockToggle} 
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});