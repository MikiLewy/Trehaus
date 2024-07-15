'use client';

import CardSkeleton from '@/components/atoms/card-skeleton/card-skeleton';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';

import { useRealizations } from '../../hooks/query/use-realizations';
import RealizationCard from '../atoms/realization-card';

const Realizations = () => {
  const { data, isLoading } = useRealizations();

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
      <div className="content-container vertical-section-spacing">
        <SomethingWentWrong />
      </div>
    );
  }

  return (
    <section className="vertical-section-spacing content-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
      {data?.map(({ title, slug, shortDescription, mainImage }) => (
        <RealizationCard
          key={slug}
          title={title}
          description={shortDescription}
          img={{
            src: (mainImage.fields.file?.url as string) ?? '',
            alt: (mainImage.fields.title as string) ?? '',
          }}
          buttonHref={slug}
        />
      ))}
    </section>
  );
};

export default Realizations;
