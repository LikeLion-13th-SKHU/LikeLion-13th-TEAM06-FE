// src/shared/components/TextFieldInput/TextFieldInput.tsx

// src/shared/components/Form/TextInputField/TextInputField.tsx
import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './TextInputField.module.scss';

type Props = {
  label: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInputField = forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, hint, fullWidth = true, className, disabled, ...rest }, ref) => {
    return (
      <div className={`${styles.field} ${fullWidth ? styles.full : ''} ${className ?? ''}`}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
          disabled={disabled}
          {...rest}
        />
        <div className={styles.underline} aria-hidden />
        {error ? (
          <p className={styles.errorText}>{error}</p>
        ) : hint ? (
          <p className={styles.hint}>{hint}</p>
        ) : null}
      </div>
    );
  }
);

TextInputField.displayName = 'TextInputField';
export default TextInputField;
