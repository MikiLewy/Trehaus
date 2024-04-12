import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import ProjectDescription from '@/features/offer-details/components/molecules/project-description/project-description';
import CompletionStandardsSection from '@/features/offer-details/components/organisms/completion-standards-section/completion-standards-section';
import ProjectDetailsSection from '@/features/offer-details/components/organisms/project-details-section/project-details-section';

interface Props {
  params: { slug: string };
}

const OfferDetails = ({ params }: Props) => {
  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-8">
      <GoBackButton href="/oferta" />
      <ProjectDetailsSection slug={params.slug} />
      <ProjectDescription />
      <CompletionStandardsSection />
    </main>
  );
};

export default OfferDetails;
