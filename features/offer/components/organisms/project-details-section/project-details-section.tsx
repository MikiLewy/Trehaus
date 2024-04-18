import PhotosGallery from '../../molecules/photos-gallery/photos-gallery';
import ProjectDetails from '../../molecules/project-details/project-details';

interface Props {
  slug: string;
}

const ProjectDetailsSection = ({ slug }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
      <div className="basis-3/5 lg:basis-3/5">
        <PhotosGallery slug={slug} />
      </div>
      <div className="lg:basis-2/5">
        <ProjectDetails slug={slug} />
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
