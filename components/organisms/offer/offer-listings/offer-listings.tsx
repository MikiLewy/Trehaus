import OfferCard from '@/components/atoms/offer-card/offer-card';
import { offerListings } from '@/constants/offer-listings';

const OfferListings = () => {
  return (
    <div className="content-container vertical-section-spacing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-8">
      {offerListings.map(offer => (
        <OfferCard
          key={offer.key}
          title={offer.title}
          description={offer.description}
          buttonHref={offer.buttonHref}
          img={offer.img}
          titleCaption={offer.titleCaption}
        />
      ))}
    </div>
  );
};

export default OfferListings;
