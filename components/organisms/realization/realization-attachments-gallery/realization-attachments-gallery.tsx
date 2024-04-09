import RealizationGallery from '@/components/molecules/realization-gallery/realization-gallery';

const RealizationAttachmentsGallery = () => {
  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-lg font-medium">Zdjęcia</h4>
      <RealizationGallery />
    </section>
  );
};

export default RealizationAttachmentsGallery;
