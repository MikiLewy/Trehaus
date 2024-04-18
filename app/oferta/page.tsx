import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import PageHeader from '@/components/atoms/page-header/page-header';
import OfferListings from '@/features/offer/components/organisms/offer-listings/offer-listings';
import { usePrefetchOffersListings } from '@/features/offer/hooks/api/offer/use-prefetch-offers-listings';

const Offer = async () => {
  const queryClient = new QueryClient();

  await usePrefetchOffersListings();

  return (
    <main>
      <PageHeader>Oferta</PageHeader>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OfferListings />
      </HydrationBoundary>
    </main>
  );
};

export default Offer;
