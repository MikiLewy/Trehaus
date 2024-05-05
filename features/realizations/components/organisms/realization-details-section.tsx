'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, NodeData } from '@contentful/rich-text-types';

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
        {documentToReactComponents(description, {
          renderNode: {
            [INLINES.HYPERLINK]: ({ data }: { data: NodeData }, children) => (
              <a
                href={`${window.location.origin}${data.uri}`}
                className="text-blue-500 hover:underline">
                {children}
              </a>
            ),
          },
        })}
      </div>
    </section>
  );
};

export default RealizationDetailsSection;
