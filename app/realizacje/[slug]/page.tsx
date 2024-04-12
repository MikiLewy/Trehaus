import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import RealizationAttachmentsGallery from '@/components/organisms/realization/realization-attachments-gallery/realization-attachments-gallery';
import RealizationDetailsSection from '@/components/organisms/realization/realization-details-section/realization-details-section';

interface Props {
  params: { slug: string };
}

const RealizationDetails = ({ params }: Props) => {
  return (
    <main className="content-container my-8 lg:my-10 flex flex-col gap-6 lg:gap-10">
      <GoBackButton href="/realizacje" />
      <RealizationDetailsSection slug={params.slug} />
      <RealizationAttachmentsGallery />
    </main>
  );
};

export default RealizationDetails;
