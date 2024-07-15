'use client';

import Image, { ImageProps } from 'next/image';

import contentfulLoader from '@/utils/image-loader';

interface Props extends ImageProps {
  src: string;
  alt: string;
  width?: number;
  quality?: number;
}

export default function ContentfulImage({ alt, ...props }: Props) {
  return <Image loader={contentfulLoader} alt={alt} {...props} />;
}
