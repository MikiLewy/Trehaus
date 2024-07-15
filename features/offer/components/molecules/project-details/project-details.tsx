'use client';

import Link from 'next/link';

import Button from '@/components/atoms/button/button';
import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import TextSkeleton from '@/components/atoms/text-skeleton/text-skeleton';
import Typography from '@/components/atoms/typography/typography';
import { useOffer } from '@/features/offer/hooks/query/use-offer';

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

  const {
    title,
    details,
    realizationHref,
    finishingStandards,
    externalUrlToOfferDetails,
  } = data;

  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <div className="mt-2 flex flex-col gap-4 md:flex-row md:gap-12 lg:flex-col lg:gap-4">
        {externalUrlToOfferDetails ? (
          <div className="mt-3 flex flex-col gap-2">
            <Typography variant="p2" className="text-secondary">
              Specyfikacja oraz zdjęcia tego projektu pochodzą z zewnętrznego
              źródła. Aby poznać więcej szczegółów, na temat tego projektu
              kliknij{' '}
              <Link
                href={externalUrlToOfferDetails}
                target="_blank"
                className="text-blue-500 hover:underline">
                tutaj
              </Link>
              .
            </Typography>
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-2">
            <Typography variant="h6">Dane techniczne:</Typography>
            {details?.map(({ id, key, value }) => (
              <div key={id} className="flex items-center gap-2">
                <Typography variant="p2" className="text-secondary">
                  {key}:
                </Typography>
                <Typography variant="p2" className="font-medium">
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        )}
        <div className="mt-3 flex flex-col gap-2">
          <Typography variant="h6">Wersje wykończenia:</Typography>
          {finishingStandards?.map(({ id, key, value }) => (
            <div key={id} className="flex items-center gap-2">
              <Typography variant="p2" className="text-secondary">
                {key}:
              </Typography>
              <Typography
                variant="p2"
                className=" font-medium">{`od ${value}zł`}</Typography>
            </div>
          ))}
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-2 mt-4">
            {realizationHref ? (
              <Button
                variant="outlined"
                href={
                  typeof window !== 'undefined'
                    ? `${window.location.origin}/realizacje/${realizationHref}`
                    : ''
                }>
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
