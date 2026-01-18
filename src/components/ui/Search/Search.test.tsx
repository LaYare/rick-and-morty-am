import { render, screen, fireEvent, act } from '@testing-library/react';
import { Search } from './index';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Search Component', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });



  it('debe renderizarse correctamente', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find your character...');
    expect(input).toBeInTheDocument();
  });

  it('debe mostrar el valor inicial si viene en la URL', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('name=rick'));

    render(<Search />);
    const input = screen.getByPlaceholderText('Find your character...') as HTMLInputElement;
    
    expect(input.value).toBe('rick');
  });

  it('debe actualizar la URL cuando el usuario presiona Enter', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find your character...');

    fireEvent.change(input, { target: { value: 'morty' } });
    
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockReplace).toHaveBeenCalledWith('/?page=1&name=morty');
  });

  it('debe limpiar el parámetro name si el input está vacío y presiona Enter', () => {
    
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('name=rick'));
    
    render(<Search />);
    const input = screen.getByPlaceholderText('Find your character...');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockReplace).toHaveBeenCalledWith('/?page=1');
  });

  it('debe actualizar la URL automáticamente después de dejar de escribir (Debounce)', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find your character...');

    fireEvent.change(input, { target: { value: 'morty' } });

    expect(mockReplace).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockReplace).toHaveBeenCalledWith('/?page=1&name=morty');
  });

});