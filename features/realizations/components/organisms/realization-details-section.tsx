'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, NodeData } from '@contentful/rich-text-types';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import Typography from '@/components/atoms/typography/typography';

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
      <Typography variant="h4">{title}</Typography>
      <div className="text-sm lg:text-base text-secondary flex flex-col gap-2">
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
