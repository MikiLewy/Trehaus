'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

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
    <div className="flex flex-col gap-2">
      <h4 className="text-sm xl:text-lg font-medium">Opis projektu:</h4>
      <div className="text-xs lg:text-sm xl:text-base flex flex-col gap-2">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
};

export default ProjectDescription;
