'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import Typography from '@/components/atoms/typography/typography';
import { useOffer } from '@/features/offer/hooks/query/use-offer';

interface Props {
  slug: string;
}

const ProjectDescription = ({ slug }: Props) => {
  const { data, isLoading } = useOffer(slug);

  if (isLoading) {
    return <TextSkeleton />;
  }

  if (!data) {
    return <SomethingWentWrong />;
  }

  const { description } = data;

  return (
    <section className="flex flex-col gap-2">
      <Typography variant="h6">Opis projektu:</Typography>
      <div className="text-xs lg:text-sm xl:text-base text-secondary flex flex-col gap-2">
        {documentToReactComponents(description)}
      </div>
    </section>
  );
};

export default ProjectDescription;
