import { QueryClient } from '@tanstack/react-query';

import { fetchRealizations } from '@/features/realizations/api/lib/realizations';
import { realizationsKeys } from '@/features/realizations/api/query-keys/realizations';

export const usePrefetchRealizations = () => {
  const queryClient = new QueryClient();

  return queryClient.prefetchQuery({
    queryKey: realizationsKeys.list(),
    queryFn: fetchRealizations,
  });
};
