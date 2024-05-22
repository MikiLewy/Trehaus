'use client';

import { notFound } from 'next/navigation';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import { DATA_NOT_FOUND_ERROR } from '@/constants/data-not-found-error';

import { useRealization } from '../../hooks/api/realizations/use-realization';
import RealizationAttachmentsGallery from '../organisms/realization-attachments-gallery';
import RealizationDetailsSection from '../organisms/realization-details-section';

interface Props {
  slug: string;
}

const RealizationDetails = ({ slug }: Props) => {
  const { data, isLoading, error } = useRealization(slug);

  if (!data && error?.message?.includes(DATA_NOT_FOUND_ERROR) && !isLoading) {
    notFound();
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  return (
    <>
      <RealizationDetailsSection slug={slug} />
      <RealizationAttachmentsGallery slug={slug} />
    </>
  );
};

export default RealizationDetails;
