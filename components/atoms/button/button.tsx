'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import SpinnerIcon from '@/icons/spinner';
import { getSize, getVariant } from '@/utils/button';

export type ButtonVariant = 'contained' | 'outlined';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ className, startIcon, endIcon, loading, disabled, children, variant = 'contained', fullWidth, size = 'md', ...rest }: Props) => {
  const merged = twMerge('btn', getVariant(variant), getSize(size), disabled && 'btn-disabled', fullWidth && 'w-full', className);

  return (
    <button className={merged} disabled={disabled} {...rest}>
      {loading ? (
        <>
          Ładowanie...
          <SpinnerIcon className="motion-reduce:hidden inline w-4 h-4 animate-spin" />
        </>
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </button>
  );
};

export default Button;
