import { useQuery } from '@tanstack/react-query';

import { fetchOfferDetails } from '@/features/offer/api/lib/offer';
import { offersKeys } from '@/features/offer/api/query-keys/offers';

export const useOffer = (slug: string) => {
  return useQuery({
    queryFn: () => fetchOfferDetails(slug),
    queryKey: offersKeys.detail(slug),
  });
};
