'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import SpinnerIcon from '@/icons/spinner';
import { getVariant } from '@/utils/button';

export type ButtonVariant = 'contained' | 'outlined';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ className, startIcon, endIcon, loading, disabled, children, variant = 'contained', fullWidth, ...rest }: Props) => {
  const merged = twMerge('btn', getVariant(variant), disabled && 'btn-disabled', fullWidth && 'w-full', className);

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
