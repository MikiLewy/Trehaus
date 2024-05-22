'use client';

import { notFound } from 'next/navigation';

import SomethingWentWrong from '@/components/atoms/something-went-wrong/something-went-wrong';
import { DATA_NOT_FOUND_ERROR } from '@/constants/data-not-found-error';

import { useOffer } from '../../hooks/api/offer/use-offer';
import ProjectDescription from '../molecules/project-description/project-description';
import CompletionStandardsSection from '../organisms/offer/completion-standards-section/completion-standards-section';
import GroundFloorPlan from '../organisms/offer/ground-floor-plan/ground-floor-plan';
import ProjectDetailsSection from '../organisms/offer/project-details-section/project-details-section';

interface Props {
  slug: string;
}

const OfferDetails = ({ slug }: Props) => {
  const { data, isLoading, error } = useOffer(slug);

  if (!data && error?.message?.includes(DATA_NOT_FOUND_ERROR) && !isLoading) {
    notFound();
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  return (
    <>
      <ProjectDetailsSection slug={slug} />
      <ProjectDescription slug={slug} />
      <GroundFloorPlan slug={slug} />
      <CompletionStandardsSection slug={slug} />
    </>
  );
};

export default OfferDetails;
