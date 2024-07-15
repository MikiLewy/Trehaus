'use client';

import CardSkeleton from '@/components/atoms/card-skeleton/card-skeleton';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import OfferCard from '@/features/offer/components/atoms/offer-card/offer-card';
import { useOffersListings } from '@/features/offer/hooks/query/use-offers-listings';

const OfferListings = () => {
  const { data, isLoading } = useOffersListings();

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
    <div className="content-container vertical-section-spacing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-8">
      {data.map(
        ({ title, slug, squareMeters, shortDescription, mainImage }) => (
          <OfferCard
            key={slug}
            title={title}
            description={shortDescription}
            buttonHref={slug}
            img={{
              src: (mainImage.fields.file?.url as string) ?? '',
              alt: (mainImage.fields.title as string) ?? '',
            }}
            squareMeters={squareMeters}
          />
        ),
      )}
    </div>
  );
};

export default OfferListings;
