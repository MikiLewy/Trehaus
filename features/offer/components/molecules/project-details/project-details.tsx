'use client';

import Button from '@/components/atoms/button/button';
import PageTitle from '@/components/atoms/page-title/page-title';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import { useOffer } from '@/features/offer/hooks/api/offer/use-offer';

import DetailsTitle from '../../atoms/details-title/details-title';

interface Props {
  slug: string;
}

const ProjectDetails = ({ slug }: Props) => {
  const { data, isLoading } = useOffer(slug);

  if (isLoading) {
    return <TextSkeleton />;
  }

  if (!data) {
    return <SomethingWentWrong />;
  }

  const { title, details, realizationHref, finishingStandards } = data;

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <div className="mt-2 flex flex-col gap-4 md:flex-row md:gap-12 lg:flex-col lg:gap-4">
        <div className="mt-3 flex flex-col gap-2">
          <DetailsTitle>Dane techniczne:</DetailsTitle>
          {details?.map(({ id, key, value }) => (
            <div key={id} className="flex items-center gap-1">
              <span className="text-xs xl:text-sm">{key}:</span>
              <span className="text-xs xl:text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <DetailsTitle>Wersje wykończenia:</DetailsTitle>
          {finishingStandards?.map(({ id, key, value }) => (
            <div key={id} className="flex items-center gap-1">
              <span className="text-xs xl:text-sm">{key}:</span>
              <span className="text-xs xl:text-sm font-medium">{`od ${value}zł`}</span>
            </div>
          ))}
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-2 mt-4">
            {realizationHref ? (
              <Button variant="outlined" href={realizationHref}>
                Zobacz realizację
              </Button>
            ) : null}

            <Button href="/kontakt">Skontaktuj się z nami</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
