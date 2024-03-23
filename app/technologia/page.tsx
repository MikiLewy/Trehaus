import PageHeader from '@/components/atoms/page-header/page-header';
import ContentSection from '@/components/organisms/technology/content-section/content-section';
import { technologySections } from '@/constants/technology-sections';

const Technology = () => {
  return (
    <main>
      <PageHeader>Technologia</PageHeader>
      <div className="flex flex-col my-4">
        {technologySections.map((technologySection, index) => (
          <ContentSection
            key={technologySection.key}
            title={technologySection.title}
            description={technologySection.description}
            img={technologySection.img}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </main>
  );
};

export default Technology;
