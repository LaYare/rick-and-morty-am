import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('Button Component', () => {
  const MockIcon = () => <svg data-testid="mock-icon">Icon</svg>;

  it('debe renderizarse correctamente con el ícono y el aria-label', () => {
    render(
      <Button aria-label="Eliminar elemento">
        <MockIcon />
      </Button>
    );

    const button = screen.getByRole('button', { name: /eliminar elemento/i });
    expect(button).toBeInTheDocument();

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    
    expect(button).toHaveAttribute('title', 'Eliminar elemento');
  });

  it('debe ejecutar la función onClick cuando se hace click', () => {
    const handleClick = jest.fn();
    
    render(
      <Button aria-label="Like" onClick={handleClick}>
        <MockIcon />
      </Button>
    );

    const button = screen.getByRole('button', { name: /like/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('no debe permitir click cuando está deshabilitado (disabled)', () => {
    const handleClick = jest.fn();
    
    render(
      <Button aria-label="Like" onClick={handleClick} disabled>
        <MockIcon />
      </Button>
    );

    const button = screen.getByRole('button', { name: /like/i });
    
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('debe aceptar y aplicar clases CSS personalizadas', () => {
    render(
      <Button aria-label="Editar" className="custom-class">
        <MockIcon />
      </Button>
    );

    const button = screen.getByRole('button', { name: /editar/i });
    expect(button).toHaveClass('custom-class');
  });
});