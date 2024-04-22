'use client';

import { CheckCircle2, Minus } from 'lucide-react';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { tableData } from '@/features/offer/data/table';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

import Accordion from '../../molecules/accordion/accordion';

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
      <h3 className="text-2xl font-medium lg:text-3xl">
        Standardy wykończenia
      </h3>
      <Accordion finishingStandards={finishingStandards ?? []} />
      <div className="hidden lg:block">
        <div className=" grid-cols-4 mt-8 lg:grid">
          <div className="flex flex-col items-center h-16" />
          {finishingStandards?.map(({ id, key, value }) => (
            <div key={id} className="grid-rows-1 h-full flex-1">
              <div className="flex flex-col items-center h-16">
                <h4 className="text-base xl:text-xl font-medium">{key}</h4>
                <p className="text-sm lg:text-base">{value}zł</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2">
          {tableData.map(({ id, standards, title }, index) => (
            <div
              key={id}
              className={`grid grid-cols-4  items-center place-items-center py-4 pl-2 gap-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
              <p className="text-base text-left w-full">{title}</p>
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
