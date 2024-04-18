import { QueryClient } from '@tanstack/react-query';

import { fetchOffersListings } from '@/api/lib/offer/offer';
import { offersKeys } from '@/api/query-keys/offers';

export const usePrefetchOffersListings = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: offersKeys.list(),
    queryFn: fetchOffersListings,
  });
};
