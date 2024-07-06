import { Metadata } from 'next';

import PageHeader from '@/components/atoms/page-header/page-header';
import { prefetchOffersListings } from '@/features/offer/api/lib/offer.prefetch';
import OfferListings from '@/features/offer/components/organisms/offer-listings/offer-listings';
import HydrationBoundaryProvider from '@/providers/hydration-boundary-provider';

export const metadata: Metadata = {
  title: 'Oferta',
  description:
    'Zapoznaj się z naszą ofertą domów jednorodzinnych: projekty drewniane, energooszczędne i nowoczesne. Oferujemy różnorodne rozwiązania dostosowane do potrzeb różnych klientów. Odkryj nasze propozycje, takie jak Sosenka 4, Endo i Domek Jesienny, i znajdź idealny dom dla siebie. Sprawdź szczegóły naszej oferty już dziś.',
};

const Offer = async () => {
  return (
    <main>
      <PageHeader>Oferta</PageHeader>
      <HydrationBoundaryProvider
        prefetchDataFunctions={[
          queryClient => prefetchOffersListings(queryClient),
        ]}>
        <OfferListings />
      </HydrationBoundaryProvider>
    </main>
  );
};

export default Offer;
