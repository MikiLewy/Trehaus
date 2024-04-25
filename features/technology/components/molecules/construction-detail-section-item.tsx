import Image from 'next/image';

import { Image as ImageInterface } from '@/types/interfaces/image';

import DetailsItem from '../atoms/details-item';

interface Props {
  title: string;
  img: ImageInterface;
  details: {
    key: string;
    title: string;
    description: string;
  }[];
  direction: 'left' | 'right';
}

const ConstructionDetailSectionItem = ({
  title,
  details,
  img,
  direction,
}: Props) => {
  return (
    <section className="flex flex-col items-center sm:flex-row sm:justify-between lg:items-start gap-6 md:gap-10 lg:gap-20 ">
      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 w-full sm:basis-1/2   ">
        <h3 className="text-2xl xl:text-3xl font-semibold">{title}</h3>
        <div className="border-2 border-gray-200  max-w-xl p-4 flex flex-col gap-4">
          {details?.map(({ key, title, description }, index) => (
            <DetailsItem
              key={key}
              title={title}
              index={index}
              description={description}
              isLastItem={details.length - 1 !== index}
            />
          ))}
        </div>
      </div>
      <div
        className={`sm:basis-1/2 xl:basis-[40%] ${direction === 'left' ? 'sm:order-1' : 'sm:-order-1'}`}>
        <Image
          src={img.src}
          draggable={false}
          alt={img.alt}
          width={300}
          height={300}
          layout="responsive"
          className="rounded-md h-full min-h-[300px]"
        />
      </div>
    </section>
  );
};

export default ConstructionDetailSectionItem;