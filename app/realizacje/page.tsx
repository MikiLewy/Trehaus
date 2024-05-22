import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

import PageHeader from '@/components/atoms/page-header/page-header';
import Realizations from '@/features/realizations/components/organisms/realizations';
import { usePrefetchRealizations } from '@/features/realizations/hooks/api/realizations/use-prefetch-realizations';

export const metadata: Metadata = {
  title: 'Realizacje',
  description:
    'Zobacz nasze zrealizowane projekty budowlane, w tym domy energooszczędne i nowoczesne konstrukcje. Oferujemy wysoką jakość wykonania oraz innowacyjne technologie. Przekonaj się, jak nasze realizacje mogą spełnić Twoje marzenia o idealnym domu. Sprawdź naszą galerię projektów i zainspiruj się już dziś.',
};

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
