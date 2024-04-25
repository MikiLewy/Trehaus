import { technologyConstructionDetailsSections } from '@/constants/technology-sections';

import ConstructionDetailSectionItem from '../molecules/construction-detail-section-item';

const ConstructionDetails = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-20">
      {technologyConstructionDetailsSections?.map(
        ({ title, img, details, key }, index) => (
          <ConstructionDetailSectionItem
            title={title}
            img={img}
            details={details}
            key={key}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ),
      )}
    </section>
  );
};

export default ConstructionDetails;
