import { QueryClient } from '@tanstack/react-query';

import { fetchOfferDetails } from '@/features/offer/api/lib/offer';
import { offersKeys } from '@/features/offer/api/query-keys/offers';

export const usePrefetchOffer = (slug: string) => {
  const queryClient = new QueryClient();

  return queryClient.prefetchQuery({
    queryKey: offersKeys.detail(slug),
    queryFn: () => fetchOfferDetails(slug),
  });
};
