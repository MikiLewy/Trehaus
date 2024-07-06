import { QueryClient } from '@tanstack/react-query';

import { offersKeys } from '../query-keys/offers';

import { fetchOfferDetails, fetchOffersListings } from './offer';

export const prefetchOffersListings = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: offersKeys.list(),
    queryFn: fetchOffersListings,
  });
};

export const prefetchOfferDetails = (
  queryClient: QueryClient,
  slug: string,
) => {
  return queryClient.prefetchQuery({
    queryKey: offersKeys.detail(slug),
    queryFn: () => fetchOfferDetails(slug),
  });
};
