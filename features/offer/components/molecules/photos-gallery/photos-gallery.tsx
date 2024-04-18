'use client';

import Image from 'next/image';
import { useState } from 'react';

import AttachmentsGallery from '@/components/atoms/attachments-gallery/attachments-gallery';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

interface Props {
  slug: string;
}

const PhotosGallery = ({ slug }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { data, isLoading } = useOffer(slug);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return 'Brak danych';
  }

  const {
    fields: { mainImage, thumbnails },
  } = data[0];

  const images = [mainImage, ...(thumbnails ?? [])];

  const transformedImages = images.map(image => ({
    src: image.fields.file?.url as string,
    alt: image.fields.title as string,
  }));

  return (
    <>
      <Image
        src={`https://${mainImage?.fields.file?.url}` ?? ''}
        alt={(mainImage?.fields.title as string) ?? 'główne zdjęcie projektu'}
        width={400}
        height={400}
        onClick={() => setSelectedIndex(0)}
        className="w-full h-full object-cover max-h-[400px] cursor-pointer"
      />
      <div className="grid grid-cols-4 gap-2 mt-2">
        {thumbnails?.map((image, index) => (
          <Image
            key={`${image.fields.file?.url}`}
            src={`https://${image.fields.file?.url}`}
            alt={image.fields.title as string}
            onClick={() => {
              setSelectedIndex(index + 1);
            }}
            className="w-full h-full max-h-36 object-cover cursor-pointer hover:opacity-80"
            width={200}
            height={200}
          />
        ))}
        <AttachmentsGallery
          attachments={transformedImages}
          onClose={() => setSelectedIndex(-1)}
          index={selectedIndex}
        />
      </div>
    </>
  );
};

export default PhotosGallery;
