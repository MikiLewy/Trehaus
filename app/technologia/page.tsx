import PageHeader from '@/components/atoms/page-header/page-header';
import ConstructionDetails from '@/features/technology/components/organisms/construction-details';
import MechanicalVentilation from '@/features/technology/components/organisms/mechanical-ventilation';

const Technology = () => {
  return (
    <main>
      <PageHeader>Technologia</PageHeader>
      <section className="flex flex-col my-4 content-container vertical-section-spacing gap-10 md:gap-10 lg:gap-14 xl:gap-20">
        <ConstructionDetails />
        <MechanicalVentilation />
      </section>
    </main>
  );
};

export default Technology;
