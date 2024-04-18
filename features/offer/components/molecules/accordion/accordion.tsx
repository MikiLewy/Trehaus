import { KeyValuePair } from '@/features/offer/api/types/offer';
import { mobileTableData } from '@/features/offer/data/table';

import AccordionItem from '../../atoms/accordion-item/accordion-item';

interface Props {
  finishingStandards: KeyValuePair[];
}

const Accordion = ({ finishingStandards }: Props) => {
  return (
    <div className="flex flex-col mt-4 lg:hidden">
      {finishingStandards?.map(({ id, key, value }, i) => (
        <AccordionItem
          key={id}
          title={key}
          description={value}
          data={mobileTableData[i]}
        />
      ))}
    </div>
  );
};

export default Accordion;
