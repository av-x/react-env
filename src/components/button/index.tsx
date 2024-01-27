import React from 'react';
import { cx, css } from '@emotion/css';

import { Icon } from '../icon';

const styles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  backgroundColor: 'var(--color-gray-50)',
  border: '1px solid var(--color-gray-500)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--color-gray-800)',
  fontWeight: 700,
  padding: '8px 12px',
  letterSpacing: 2,
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: 'all 100ms ease',
  cursor: 'pointer',

  '&:hover:not([disabled])': {
    backgroundColor: 'var(--color-gray-200)',
  },

  '&[disabled]': {
    cursor: 'default',
    opacity: 0.4,
  },

  '&.sm': {
    padding: '4px 8px',
    letterSpacing: 0,
    textTransform: 'capitalize',
    fontWeight: 500,
  },

  '&.xs': {
    padding: '2px 8px',
    letterSpacing: 0,
    textTransform: 'initial',
    fontWeight: 500,
  },

  '> svg': {
    height: 16,
    width: 16,
    minHeight: 16,
    minWidth: 16,
  },

  '> span': {
    flex: 2,
  },
});

const errorStyles = css({
  backgroundColor: 'var(--color-error-400)',
  border: '1px solid var(--color-error-500)',
  color: 'var(--color-error-50)',

  '&:hover:not([disabled])': {
    backgroundColor: 'var(--color-error-500)',
  },
});

const successStyles = css({
  backgroundColor: 'var(--color-success-400)',
  border: '1px solid var(--color-success-500)',
  color: 'var(--color-success-50)',

  '&:hover:not([disabled])': {
    backgroundColor: 'var(--color-success-500)',
  },
});

const roundStyles = css({
  borderRadius: '20px',
});

type Props = {
  className?: string;
  onClick?: () => void;
  theme?: 'success' | 'error';
  size?: 'xs' | 'sm' | 'md';
  icon?: string;
  text?: string;
  round?: boolean;
};

export const Button: React.FC<Props> = ({
  className,
  text,
  theme,
  icon,
  round = false,
  size = 'md',
  ...rest
}: Props) => (
  <button
    className={cx(
      styles,
      className,
      size,
      { [roundStyles]: round },
      { [errorStyles]: theme === 'error' },
      { [successStyles]: theme === 'success' }
    )}
    {...rest}
  >
    {text && <span>{text}</span>}
    {icon && <Icon name={icon} />}
  </button>
);
