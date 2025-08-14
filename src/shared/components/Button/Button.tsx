// src/shared/components/button/Button.tsx

import styles from './Button.module.scss';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline';

export default function Button({
  size = 'md',
  variant = 'solid',
  children,
  onClick,
  leftIcon,
  stretch = false,
  disabled = false,
  className,
}: {
  size?: Size;
  variant?: Variant;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  stretch?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  const classes = [
    styles.button,
    styles[size],
    styles[variant],
    stretch && styles.stretch,
    className,
  ];

  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {children}
    </button>
  );
}
