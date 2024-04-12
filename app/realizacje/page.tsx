import PageHeader from '@/components/atoms/page-header/page-header';
import RealizationCard from '@/components/organisms/realizations/realization-card/realization-card';
import { realizations } from '@/constants/realizations';

const Realizations = () => {
  return (
    <main>
      <PageHeader>Nasze realizacje</PageHeader>
      <section className="vertical-section-spacing content-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
        {realizations.map(realization => (
          <RealizationCard
            key={realization.key}
            title={realization.title}
            description={realization.description}
            img={realization.img}
            buttonHref={realization.buttonHref}
          />
        ))}
      </section>
    </main>
  );
};

export default Realizations;
