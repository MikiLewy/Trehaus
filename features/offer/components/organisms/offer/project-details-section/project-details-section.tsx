import PhotosGallery from '../../../molecules/photos-gallery/photos-gallery';
import ProjectDetails from '../../../molecules/project-details/project-details';

interface Props {
  slug: string;
}

const ProjectDetailsSection = ({ slug }: Props) => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div className="basis-3/5">
        <PhotosGallery slug={slug} />
      </div>
      <div className="basis-2/5">
        <ProjectDetails slug={slug} />
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
