import RealizationGallery from '@/features/realizations/components/molecules/realization-gallery';

interface Props {
  slug: string;
}

const RealizationAttachmentsGallery = ({ slug }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-lg font-medium">Zdjęcia</h4>
      <RealizationGallery slug={slug} />
    </section>
  );
};

export default RealizationAttachmentsGallery;
