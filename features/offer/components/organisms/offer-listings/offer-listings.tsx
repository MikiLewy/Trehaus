'use client';

import OfferCard from '@/features/offer/components/atoms/offer-card/offer-card';
import { useOffersListings } from '@/features/offer/hooks/api/offer/use-offers-listings';

const OfferListings = () => {
  const { data } = useOffersListings();

  console.log(data);

  if (!data) {
    return 'no data';
  }

  return (
    <div className="content-container vertical-section-spacing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-8">
      {data.map(
        ({
          fields: { title, slug, squareMeters, shortDescription, mainImage },
        }) => (
          <OfferCard
            key={slug}
            title={title}
            description={shortDescription}
            buttonHref={`oferta/${slug}`}
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
