'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import PageTitle from '@/components/atoms/page-title/page-title';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';

import { useRealization } from '../../hooks/api/realizations/use-realization';

interface Props {
  slug: string;
}

const RealizationDetailsSection = ({ slug }: Props) => {
  const { data, isLoading } = useRealization(slug);

  if (isLoading) {
    return (
      <div className="content-container flex flex-col gap-4">
        <TextSkeleton />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="content-container">
        <SomethingWentWrong />
      </div>
    );
  }

  const { title, description } = data;

  return (
    <section className="flex flex-col gap-2 lg:gap-5">
      <PageTitle>{title}</PageTitle>
      <div className="text-sm lg:text-base flex flex-col gap-2">
        {documentToReactComponents(description)}
      </div>
    </section>
  );
};

export default RealizationDetailsSection;
