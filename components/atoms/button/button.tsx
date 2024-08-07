'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { getVariant } from '@/components/atoms/button/utils/button';
import SpinnerIcon from '@/icons/spinner';

export type ButtonVariant = 'contained' | 'outlined';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
  href?: string;
}

const Button = ({
  className,
  href,
  startIcon,
  endIcon,
  loading,
  disabled,
  children,
  variant = 'contained',
  fullWidth,
  ...rest
}: Props) => {
  const buttonClasses = twMerge(
    'btn',
    getVariant(variant),
    disabled && 'btn-disabled',
    fullWidth && 'w-full',
  );

  const merged = twMerge(buttonClasses, className);

  return href ? (
    <Link href={href} className={className}>
      <button className={buttonClasses} disabled={disabled} {...rest}>
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
    </Link>
  ) : (
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
