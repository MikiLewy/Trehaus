import React from 'react';
import { twMerge } from 'tailwind-merge';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const getVariant = (variant: TypographyTag) => {
  switch (variant) {
    case 'h1':
      return 'text-3xl text-white lg:text-4xl xl:text-5xl font-medium xl:leading-snug';
  }
};

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  variant: TypographyTag;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<Props> = ({
  variant = 'p',
  children,
  className,
  ...other
}) => {
  const Tag = variant;

  const mergedClassName = twMerge(className);

  return <Tag {...other}>{children}</Tag>;
};

export default Typography;
