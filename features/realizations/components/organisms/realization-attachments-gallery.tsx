import Typography from '@/components/atoms/typography/typography';
import RealizationGallery from '@/features/realizations/components/molecules/realization-gallery';

interface Props {
  slug: string;
}

const RealizationAttachmentsGallery = ({ slug }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <Typography variant="h6">Zdjęcia</Typography>
      <RealizationGallery slug={slug} />
    </section>
  );
};

export default RealizationAttachmentsGallery;
