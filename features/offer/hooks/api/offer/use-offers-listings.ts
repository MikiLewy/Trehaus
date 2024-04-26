import { useQuery } from '@tanstack/react-query';

import { fetchOffersListings } from '@/features/offer/api/lib/offer';
import { offersKeys } from '@/features/offer/api/query-keys/offers';

export const useOffersListings = () => {
  return useQuery({
    queryFn: fetchOffersListings,
    queryKey: offersKeys.list(),
  });
};
