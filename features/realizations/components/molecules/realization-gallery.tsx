'use client';

import Image from 'next/image';
import { useState } from 'react';

import AttachmentsGallery from '@/components/atoms/attachments-gallery/attachments-gallery';

// TODO: Replace with real data
const imageUrls = [
  { src: '/about-us.jpg' },
  { src: '/bilbo-implementation.webp' },
  { src: '/bilbo.webp' },
  { src: '/hero.webp' },
];

const RealizationGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {imageUrls.map((image, index) => (
        <Image
          key={`${image.src}-${index}`}
          src={image.src}
          alt={`Realizacja-${index}`}
          onClick={() => {
            setSelectedIndex(index);
          }}
          className="w-full h-52 object-cover cursor-pointer"
          width={400}
          height={400}
        />
      ))}
      <AttachmentsGallery
        attachments={imageUrls}
        onClose={() => setSelectedIndex(-1)}
        index={selectedIndex}
      />
    </div>
  );
};

export default RealizationGallery;
