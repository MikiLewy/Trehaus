import { Metadata } from 'next';

import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import {
  fetchRealization,
  fetchRealizations,
} from '@/features/realizations/api/lib/realizations';
import { prefetchRealization } from '@/features/realizations/api/lib/realizations.prefetch';
import RealizationDetails from '@/features/realizations/components/templates/realization-details';
import HydrationBoundaryProvider from '@/providers/hydration-boundary-provider';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const realizations = await fetchRealizations();

  return realizations?.map(({ slug }) => ({ slug })) ?? [];
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const realization = await fetchRealization(slug);

  return {
    title: realization.title,
    description: realization.shortDescription,
  };
}

const RealizationDetailsPage = async ({ params }: Props) => {
  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-10">
      <GoBackButton href="/realizacje" />
      <HydrationBoundaryProvider
        prefetchDataFunctions={[
          queryClient => prefetchRealization(queryClient, params.slug),
        ]}>
        <RealizationDetails slug={params.slug} />
      </HydrationBoundaryProvider>
    </main>
  );
};

export default RealizationDetailsPage;
