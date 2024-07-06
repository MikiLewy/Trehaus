import { QueryClient } from '@tanstack/react-query';

import { realizationsKeys } from '../query-keys/realizations';

import { fetchRealization, fetchRealizations } from './realizations';

export const prefetchRealizations = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: realizationsKeys.list(),
    queryFn: fetchRealizations,
  });
};

export const prefetchRealization = (queryClient: QueryClient, slug: string) => {
  return queryClient.prefetchQuery({
    queryKey: realizationsKeys.detail(slug),
    queryFn: () => fetchRealization(slug),
  });
};
