import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  className?: string;
  htmlFor: string;
}

const Label = ({ children, className, htmlFor }: Props) => {
  const labelClasses = twMerge('text-sm font-medium text-gray-900', className);

  return (
    <label htmlFor={htmlFor} className={labelClasses}>
      {children}
    </label>
  );
};

export default Label;
