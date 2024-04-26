import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import PageHeader from '@/components/atoms/page-header/page-header';
import Realizations from '@/features/realizations/components/organisms/realizations';
import { usePrefetchRealizations } from '@/features/realizations/hooks/api/realizations/use-prefetch-realizations';

const RealizationsPage = async () => {
  const queryClient = new QueryClient();

  await usePrefetchRealizations();

  return (
    <main>
      <PageHeader>Nasze realizacje</PageHeader>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Realizations />
      </HydrationBoundary>
    </main>
  );
};

export default RealizationsPage;
