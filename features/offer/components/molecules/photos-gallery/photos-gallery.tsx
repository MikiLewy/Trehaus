'use client';

import Image from 'next/image';
import { useState } from 'react';

import AttachmentsGallery from '@/components/atoms/attachments-gallery/attachments-gallery';
import ImageSkeleton from '@/components/atoms/image-skeleton/image-skeleton';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';
import { createHttpsUrl } from '@/utils/create-https-url';

interface Props {
  slug: string;
}

const PhotosGallery = ({ slug }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { data, isLoading } = useOffer(slug);

  if (isLoading) {
    return <ImageSkeleton />;
  }

  if (!data) {
    return <SomethingWentWrong />;
  }

  const { mainImage, thumbnails } = data;

  const images = [mainImage, ...(thumbnails ?? [])];

  const transformedImages = images.map(image => ({
    src: image.fields.file?.url as string,
    alt: image.fields.title as string,
  }));

  return (
    <>
      <Image
        src={createHttpsUrl(mainImage?.fields.file?.url as string)}
        alt={(mainImage?.fields.title as string) ?? 'główne zdjęcie projektu'}
        width={400}
        height={400}
        onClick={() => setSelectedIndex(0)}
        className="w-full h-full object-cover max-h-[400px] cursor-pointer"
      />
      <div className="grid grid-cols-4 gap-2 mt-2">
        {thumbnails.slice(0, 4)?.map((image, index) => (
          <div
            key={`${image.fields.file?.url}`}
            className="relative cursor-pointer"
            onClick={() => {
              setSelectedIndex(index + 1);
            }}>
            <Image
              src={createHttpsUrl(image.fields.file?.url as string)}
              alt={image.fields.title as string}
              className="relative inset-0 w-full h-full max-h-36 object-cover  hover:opacity-80"
              width={200}
              height={200}
            />
            {thumbnails?.slice(0, 4)?.length - 1 === index &&
            thumbnails?.length > 4 ? (
              <div className="absolute inset-0 z-10 bg-white/60 flex items-center justify-center">
                <p className="text-lg  lg:text-xl">+{thumbnails?.length - 4}</p>
              </div>
            ) : null}
          </div>
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