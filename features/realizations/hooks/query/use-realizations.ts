import { useQuery } from '@tanstack/react-query';

import { fetchRealizations } from '@/features/realizations/api/lib/realizations';
import { realizationsKeys } from '@/features/realizations/api/query-keys/realizations';

export const useRealizations = () => {
  return useQuery({
    queryFn: fetchRealizations,
    queryKey: realizationsKeys.list(),
  });
};
