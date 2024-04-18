import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import PageHeader from '@/components/atoms/page-header/page-header';
import OfferListings from '@/components/organisms/offer/offer-listings/offer-listings';
import { usePrefetchOffersListings } from '@/hooks/api/offer/use-prefetch-offers-listings';


const Offer = async () => {
  const queryClient = new QueryClient();

  usePrefetchOffersListings(queryClient);

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
