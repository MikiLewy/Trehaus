import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: Props) => {
  const mergedClassName = twMerge('text-2xl xl:text-4xl font-medium', className);

  return <h2 className={mergedClassName}>{children}</h2>;
};

export default SectionTitle;
