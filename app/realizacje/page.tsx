import { Metadata } from 'next';

import PageHeader from '@/components/atoms/page-header/page-header';
import { prefetchRealizations } from '@/features/realizations/api/lib/realizations.prefetch';
import Realizations from '@/features/realizations/components/organisms/realizations';
import HydrationBoundaryProvider from '@/providers/hydration-boundary-provider';

export const metadata: Metadata = {
  title: 'Realizacje',
  description:
    'Zobacz nasze zrealizowane projekty budowlane, w tym domy energooszczędne i nowoczesne konstrukcje. Oferujemy wysoką jakość wykonania oraz innowacyjne technologie. Przekonaj się, jak nasze realizacje mogą spełnić Twoje marzenia o idealnym domu. Sprawdź naszą galerię projektów i zainspiruj się już dziś.',
};

const RealizationsPage = async () => {
  return (
    <main>
      <PageHeader>Nasze realizacje</PageHeader>
      <HydrationBoundaryProvider
        prefetchDataFunctions={[
          queryClient => prefetchRealizations(queryClient),
        ]}>
        <Realizations />
      </HydrationBoundaryProvider>
    </main>
  );
};

export default RealizationsPage;
