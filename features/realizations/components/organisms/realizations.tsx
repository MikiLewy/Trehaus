import { realizations } from '@/constants/realizations';

import RealizationCard from '../atoms/realization-card';

const Realizations = () => {
  return (
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
  );
};

export default Realizations;
