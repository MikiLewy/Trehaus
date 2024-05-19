import { PlusCircle } from 'lucide-react';

import Typography from '@/components/atoms/typography/typography';
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
        <Typography variant="p2" className="mt-2 text-secondary">
          {description}
        </Typography>
      </details>
      {isLastItem ? <div className="w-full bg-gray-200 h-px mt-4" /> : null}
    </div>
  );
};

export default DetailsItem;
