import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className }: Props) => {
  const labelClasses = twMerge('text-sm font-medium text-gray-900', className);

  return <label className={labelClasses}>{children}</label>;
};

export default Label;
