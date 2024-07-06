import { Metadata } from 'next';

import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import {
  fetchOfferDetails,
  fetchOffersListings,
} from '@/features/offer/api/lib/offer';
import { prefetchOfferDetails } from '@/features/offer/api/lib/offer.prefetch';
import OfferDetails from '@/features/offer/components/templates/offer-details';
import HydrationBoundaryProvider from '@/providers/hydration-boundary-provider';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const offerListings = await fetchOffersListings();

  return offerListings?.map(({ slug }) => ({ slug })) ?? [];
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const offer = await fetchOfferDetails(slug);

  return {
    title: offer.title,
    description: offer.shortDescription,
  };
}

const OfferDetailsPage = async ({ params }: Props) => {
  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-8">
      <GoBackButton href="/oferta" />
      <HydrationBoundaryProvider
        prefetchDataFunctions={[
          queryClient => prefetchOfferDetails(queryClient, params.slug),
        ]}>
        <OfferDetails slug={params.slug} />
      </HydrationBoundaryProvider>
    </main>
  );
};

export default OfferDetailsPage;
