import RealizationGallery from '@/features/realizations/components/molecules/realization-gallery';

const RealizationAttachmentsGallery = () => {
  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-lg font-medium">Zdjęcia</h4>
      <RealizationGallery />
    </section>
  );
};

export default RealizationAttachmentsGallery;
