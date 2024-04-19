'use client';
import Image from 'next/image';

import ImageSkeleton from '@/components/atoms/image-skeleton/image-skeleton';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';
import { createHttpsUrl } from '@/utils/create-https-url';

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

  const { groundFloorImage, groundFloorDetails } = data;

  if (!groundFloorDetails) {
    return null;
  }

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
      {groundFloorImage ? (
        <div className={`basis-full md:basis-3/5`}>
          <Image
            src={createHttpsUrl(groundFloorImage?.fields?.file?.url as string)}
            alt={groundFloorImage?.fields?.title as string}
            draggable={false}
            width={400}
            height={400}
            layout="responsive"
            className="rounded-md h-full w-full min-h-[300px]"
          />
        </div>
      ) : null}
    </section>
  );
};

export default GroundFloorPlan;
