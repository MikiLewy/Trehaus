'use client';

import { CheckCircle2, Minus } from 'lucide-react';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import Typography from '@/components/atoms/typography/typography';
import { tableData } from '@/features/offer/data/table';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

import Accordion from '../../../molecules/accordion/accordion';

interface Props {
  slug: string;
}

const CompletionStandardsSection = ({ slug }: Props) => {
  const { data, isLoading } = useOffer(slug);

  if (isLoading) {
    return <TextSkeleton />;
  }

  if (!data) {
    return <SomethingWentWrong />;
  }

  const { finishingStandards } = data;

  return (
    <section>
      <Typography variant="h4" className="font-medium">
        Standardy wykończenia
      </Typography>
      <Accordion finishingStandards={finishingStandards ?? []} />
      <div className="hidden lg:block">
        <div className=" grid-cols-4 mt-8 lg:grid">
          <div className="flex flex-col items-center h-16" />
          {finishingStandards?.map(({ id, key, value }) => (
            <div key={id} className="grid-rows-1 h-full flex-1">
              <div className="flex flex-col items-center h-16">
                <Typography variant="h6">{key}</Typography>
                <Typography variant="p2">{value}zł</Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2">
          {tableData.map(({ id, standards, title }, index) => (
            <div
              key={id}
              className={`grid grid-cols-4  items-center place-items-center py-4 pl-2 gap-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
              <Typography variant="p2" className="text-left w-full">
                {title}
              </Typography>
              {Object.values(standards).map((value, index) =>
                value ? (
                  <CheckCircle2 key={`${value}-${index}`} size={26} />
                ) : (
                  <Minus key={`${value}-${index}`} size={26} />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletionStandardsSection;
