import OfferPhotosGallery from '@/features/offer-details/components/molecules/photos-gallery/photos-gallery';

import ProjectDetails from '../../molecules/project-details/project-details';

interface Props {
  slug: string;
}

const ProjectDetailsSection = ({ slug }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
      <div className="basis-3/5 lg:basis-3/5">
        <OfferPhotosGallery />
      </div>
      <div className="lg:basis-2/5">
        <ProjectDetails projectName={slug} />
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
