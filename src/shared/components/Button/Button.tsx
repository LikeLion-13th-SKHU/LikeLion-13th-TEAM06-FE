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
  type = 'button',
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
  type?: 'button' | 'submit' | 'reset';
}) {
  const classes = [
    styles.button,
    styles[size],
    styles[variant],
    stretch && styles.stretch,
    disabled && styles.disabled,
    className,
  ];

  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled} type={type}>
      {leftIcon && <img className={styles.leftIcon} src={leftIcon as string} alt="leftIcon" />}
      {children}
    </button>
  );
}
