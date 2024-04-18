'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

// TODO PASS DYNAMIC DATA

interface Props {
  slug: string;
}

const ProjectDescription = ({ slug }: Props) => {
  const { data, isLoading } = useOffer(slug);

  console.log(data);

  if (isLoading) {
    return <TextSkeleton />;
  }

  if (!data) {
    return 'Brak danych';
  }

  const { description } = data[0].fields;

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm xl:text-base font-medium">Opis projektu:</h4>
      <div className="text-xs xl:text-sm flex flex-col gap-2">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
};

export default ProjectDescription;
