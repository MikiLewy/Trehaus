import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import ProjectDescription from '@/features/offer/components/molecules/project-description/project-description';
import CompletionStandardsSection from '@/features/offer/components/organisms/offer/completion-standards-section/completion-standards-section';
import GroundFloorPlan from '@/features/offer/components/organisms/offer/ground-floor-plan/ground-floor-plan';
import ProjectDetailsSection from '@/features/offer/components/organisms/offer/project-details-section/project-details-section';
import { usePrefetchOffer } from '@/features/offer/hooks/api/offer/use-prefetch-offer';

interface Props {
  params: { slug: string };
}

const OfferDetails = async ({ params }: Props) => {
  const queryClient = new QueryClient();

  await usePrefetchOffer(params.slug);

  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-8">
      <GoBackButton href="/oferta" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProjectDetailsSection slug={params.slug} />
        <ProjectDescription slug={params.slug} />
        <GroundFloorPlan slug={params.slug} />
        <CompletionStandardsSection slug={params.slug} />
      </HydrationBoundary>
    </main>
  );
};

export default OfferDetails;
