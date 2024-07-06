'use client';
import Image from 'next/image';
import { useState } from 'react';

import AttachmentsGallery from '@/components/atoms/attachments-gallery/attachments-gallery';
import CardSkeleton from '@/components/atoms/card-skeleton/card-skeleton';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import { createHttpsUrl } from '@/utils/create-https-url';

import { useRealization } from '../../hooks/query/use-realization';

interface Props {
  slug: string;
}

const RealizationGallery = ({ slug }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { data, isLoading } = useRealization(slug);

  if (isLoading) {
    return (
      <div className="content-container vertical-section-spacing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="content-container">
        <SomethingWentWrong />
      </div>
    );
  }

  const { galleryImages } = data;

  const transformedImages =
    galleryImages?.map(image => ({
      src: createHttpsUrl(image.fields?.file?.url as string),
      alt: image.fields?.title as string,
    })) ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {transformedImages.map((image, index) => (
        <Image
          key={`${image.src}-${index}`}
          src={image.src}
          alt={`Realizacja-${image?.alt}}`}
          onClick={() => {
            setSelectedIndex(index);
          }}
          className="w-full h-52 object-cover cursor-pointer"
          width={400}
          height={400}
        />
      ))}
      <AttachmentsGallery
        attachments={transformedImages}
        onClose={() => setSelectedIndex(-1)}
        index={selectedIndex}
      />
    </div>
  );
};

export default RealizationGallery;
