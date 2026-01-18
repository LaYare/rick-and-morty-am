import { ButtonProps } from './Button';
import styles from './Button.module.css';

export const Button = ({ 
  children, 
  className,
  'aria-label': ariaLabel,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      aria-label={ariaLabel}
      title={ariaLabel}
      type="button" 
      {...props}
    >
      {children}
    </button>
  );
};