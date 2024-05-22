import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import OfferDetails from '@/features/offer/components/templates/offer-details';
import { usePrefetchOffer } from '@/features/offer/hooks/api/offer/use-prefetch-offer';

interface Props {
  params: { slug: string };
}

const OfferDetailsPage = async ({ params }: Props) => {
  const queryClient = new QueryClient();

  await usePrefetchOffer(params.slug);

  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-8">
      <GoBackButton href="/oferta" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OfferDetails slug={params.slug} />
      </HydrationBoundary>
    </main>
  );
};

export default OfferDetailsPage;
