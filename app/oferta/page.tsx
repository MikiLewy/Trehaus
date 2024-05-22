import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

import PageHeader from '@/components/atoms/page-header/page-header';
import OfferListings from '@/features/offer/components/organisms/offer-listings/offer-listings';
import { usePrefetchOffersListings } from '@/features/offer/hooks/api/offer/use-prefetch-offers-listings';

export const metadata: Metadata = {
  title: 'Oferta',
  description:
    'Zapoznaj się z naszą ofertą domów jednorodzinnych: projekty drewniane, energooszczędne i nowoczesne. Oferujemy różnorodne rozwiązania dostosowane do potrzeb różnych klientów. Odkryj nasze propozycje, takie jak Sosenka 4, Endo i Domek Jesienny, i znajdź idealny dom dla siebie. Sprawdź szczegóły naszej oferty już dziś.',
};

const Offer = async () => {
  const queryClient = new QueryClient();

  await usePrefetchOffersListings();

  return (
    <main>
      <PageHeader>Oferta</PageHeader>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OfferListings />
      </HydrationBoundary>
    </main>
  );
};

export default Offer;
