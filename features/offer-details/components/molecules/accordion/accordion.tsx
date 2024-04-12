import { mobileTableData } from '@/features/offer-details/data/table';

import AccordionItem from '../../atoms/accordion-item/accordion-item';

const Accordion = () => {
  return (
    <div className="flex flex-col mt-4 lg:hidden">
      {mobileTableData.map(data => (
        <AccordionItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Accordion;
