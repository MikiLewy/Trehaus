import { QueryClient } from '@tanstack/react-query';

import { fetchOffersListings } from '@/features/offer/api/lib/offer';
import { offersKeys } from '@/features/offer/api/query-keys/offers';

export const usePrefetchOffersListings = () => {
  const queryClient = new QueryClient();

  return queryClient.prefetchQuery({
    queryKey: offersKeys.list(),
    queryFn: fetchOffersListings,
  });
};
