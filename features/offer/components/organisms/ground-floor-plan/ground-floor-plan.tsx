'use client';
import Image from 'next/image';

import ImageSkeleton from '@/components/atoms/image-skeleton/image-skeleton';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

interface Props {
  slug: string;
}

const GroundFloorPlan = ({ slug }: Props) => {
  const { data, isLoading } = useOffer(slug);

  console.log(data);

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <ImageSkeleton />
        <div className="flex-1">
          <TextSkeleton />
        </div>
      </div>
    );
  }

  if (!data) {
    return 'Brak danych';
  }

  const {
    fields: { groundFloorImage, groundFloorDetails },
  } = data[0];

  return (
    <section className="flex flex-col items-start md:items-center md:flex-row gap-4 my-2 md:my-5">
      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 md:basis-2/5">
        <h4 className="text-sm xl:text-base font-medium">Rzut projektu:</h4>
        {groundFloorDetails?.map(({ id, key, value }) => (
          <div key={id} className="flex items-center gap-1">
            <span className="text-xs xl:text-sm">{key}</span>
            <span className="text-xs xl:text-sm font-medium">{value}</span>
          </div>
        ))}
      </div>
      <div className={`basis-full md:basis-3/5`}>
        <Image
          src={`https://${groundFloorImage.fields.file?.url}`}
          alt={groundFloorImage.fields.title as string}
          draggable={false}
          width={400}
          height={400}
          layout="responsive"
          className="rounded-md h-full w-full min-h-[300px]"
        />
      </div>
    </section>
  );
};

export default GroundFloorPlan;
