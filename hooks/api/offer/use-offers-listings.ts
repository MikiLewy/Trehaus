import { useQuery } from '@tanstack/react-query';

import { fetchOffersListings } from '@/api/lib/offer/offer';
import { offersKeys } from '@/api/query-keys/offers';

export const useOffersListings = () => {
  return useQuery({
    queryFn: fetchOffersListings,
    queryKey: offersKeys.list(),
  });
};
