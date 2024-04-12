'use client';

import Image from 'next/image';
import { useState } from 'react';

import AttachmentsGallery from '@/components/atoms/attachments-gallery/attachments-gallery';

// TODO: Replace with real data
const images = [
  {
    key: 'main-image',
    src: '/bilbo.webp',
    alt: 'główne zdjęcie projektu',
    mainImage: true,
  },
  {
    key: 'thumbnail-1',
    src: '/bilbo.webp',
    alt: 'zdjęcie projektu',
    thumbnail: true,
  },
  {
    key: 'thumbnail-2',
    src: '/footer.webp',
    alt: 'zdjęcie projektu',
    thumbnail: true,
  },
  {
    key: 'thumbnail-3',
    src: '/hero.webp',
    alt: 'zdjęcie projektu',
    thumbnail: true,
  },
  {
    key: 'thumbnail-4',
    src: '/sub-page-hero.webp',
    alt: 'zdjęcie projektu',
    thumbnail: true,
  },
];

const PhotosGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const thumbnails = images.filter(image => image.thumbnail);

  const mainImage = images.find(image => image.mainImage);

  return (
    <>
      <Image
        src={mainImage?.src ?? ''}
        alt={mainImage?.alt ?? 'główne zdjęcie projektu'}
        width={400}
        height={400}
        onClick={() => setSelectedIndex(0)}
        className="w-full h-full object-cover max-h-[400px] cursor-pointer"
      />
      <div className="hidden lg:grid grid-cols-4 gap-2 mt-2">
        {thumbnails.map((image, index) => (
          <Image
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            onClick={() => {
              setSelectedIndex(index + 1);
            }}
            className="w-full h-full max-h-36 object-cover cursor-pointer hover:opacity-80"
            width={200}
            height={200}
          />
        ))}
        <AttachmentsGallery
          attachments={images}
          onClose={() => setSelectedIndex(-1)}
          index={selectedIndex}
        />
      </div>
    </>
  );
};

export default PhotosGallery;
