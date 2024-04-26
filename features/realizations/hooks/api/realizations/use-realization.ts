import { useQuery } from '@tanstack/react-query';

import { fetchRealization } from '@/features/realizations/api/lib/realizations';
import { realizationsKeys } from '@/features/realizations/api/query-keys/realizations';

export const useRealization = (slug: string) => {
  return useQuery({
    queryFn: () => fetchRealization(slug),
    queryKey: realizationsKeys.detail(slug),
  });
};
