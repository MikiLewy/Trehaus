import Image from 'next/image';

import { Image as ImageInterface } from '@/types/interfaces/image';

interface Props {
  title: string;
  description: string;
  img: ImageInterface;
  direction: 'left' | 'right';
}

const ContentSection = ({ title, description, img, direction }: Props) => {
  return (
    <section className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20 content-container vertical-section-spacing">
      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2">
        <h3 className="text-2xl  xl:text-3xl font-semibold">{title}</h3>
        <p className="text-sm lg:text-base xl:text-lg text-gray-950/90">
          {description}
        </p>
      </div>
      <div
        className={`basis-1/2 xl:basis-[55%] ${direction === 'left' ? 'sm:-order-1' : 'sm:order-1'} `}>
        <Image
          src={img.static}
          draggable={false}
          alt={img.alt}
          width={400}
          height={400}
          placeholder="blur"
          layout="responsive"
          className="rounded-md h-full xl:min-h-[400px]"
        />
      </div>
    </section>
  );
};

export default ContentSection;
