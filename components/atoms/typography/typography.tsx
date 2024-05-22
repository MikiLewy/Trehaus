import React from 'react';
import { twMerge } from 'tailwind-merge';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2';

const getVariantClassName = (variant: TypographyTag) => {
  switch (variant) {
    case 'h1':
      return 'text-3xl lg:text-5xl  font-medium lg:leading-snug';
    case 'h2':
      return 'text-2xl lg:text-3xl xl:text-5xl font-medium lg:leading-snug';
    case 'h3':
      return 'text-xl lg:text-2xl xl:text-4xl font-medium lg:leading-snug';
    case 'h4':
      return 'text-lg lg:text-xl xl:text-3xl font-medium lg:leading-snug';
    case 'h5':
      return 'text-base lg:text-lg xl:text-2xl font-medium lg:leading-snug';
    case 'h6':
      return 'text-sm lg:text-base xl:text-xl font-medium lg:leading-snug';
    case 'p1':
      return 'text-sm lg:text-base xl:text-lg font-normal lg:leading-snug';
    case 'p2':
      return 'text-xs lg:text-sm xl:text-base font-normal lg:leading-snug';
  }
};

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  variant: TypographyTag;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<Props> = ({
  variant = 'p1',
  children,
  className,
  ...other
}) => {
  const Tag = variant === 'p1' || variant === 'p2' ? 'p' : variant;

  const mergedClassName = twMerge(getVariantClassName(variant), className);

  return (
    <Tag {...other} className={mergedClassName}>
      {children}
    </Tag>
  );
};

export default Typography;
