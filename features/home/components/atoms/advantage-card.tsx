import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AdvantageCard = ({ title, description, Icon }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-center  lg:py-8 text-black lg:gap-4">
      <Icon className="h-8 w-8 xl:h-10 xl:w-10 min-w-max" />
      <div className="flex flex-col">
        <h4 className="text-lg xl:text-xl font-medium">{title}</h4>
        <p className="text-sm text-black/75 xl:text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
