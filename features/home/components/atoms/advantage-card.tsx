import { LucideIcon } from 'lucide-react';

import Typography from '@/components/atoms/typography/typography';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AdvantageCard = ({ title, description, Icon }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-center  lg:py-8 text-black lg:gap-4">
      <Icon className="h-8 w-8 xl:h-9 xl:w-9 min-w-max" />
      <div className="flex flex-col">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="p1" className="text-secondary mt-2">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default AdvantageCard;
