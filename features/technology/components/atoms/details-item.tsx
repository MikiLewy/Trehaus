import { PlusCircle } from 'lucide-react';

import { convertIndexToNumber } from '@/utils/convert-index-to-number';

interface Props {
  index: number;
  title: string;
  description: string;
  isLastItem: boolean;
}

const DetailsItem = ({ title, description, index, isLastItem }: Props) => {
  return (
    <div>
      <details>
        <summary className="text-sm lg:text-base xl:text-lg text-gray-950/90 flex justify-between items-center gap-1 list-none cursor-pointer">
          <div>
            {convertIndexToNumber(index)}. {title}
          </div>
          <PlusCircle className="min-w-max" size={24} />
        </summary>
        <p className="text-sm lg:text-base mt-2 text-gray-950/90">
          {description}
        </p>
      </details>
      {isLastItem ? <div className="w-full bg-gray-200 h-px mt-4" /> : null}
    </div>
  );
};

export default DetailsItem;
