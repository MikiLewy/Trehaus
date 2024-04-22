import { QueryClient } from '@tanstack/react-query';

import { fetchRealization } from '@/features/realizations/api/lib/realizations';
import { realizationsKeys } from '@/features/realizations/api/query-keys/realizations';

export const usePrefetchRealization = (slug: string) => {
  const queryClient = new QueryClient();

  return queryClient.prefetchQuery({
    queryKey: realizationsKeys.detail(slug),
    queryFn: () => fetchRealization(slug),
  });
};
