import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AdvantageCard = ({ title, description, Icon }: Props) => {
  return (
    <div className="bg-primary-darker rounded-lg flex flex-col gap-2 justify-center p-4 lg:py-8 text-white  lg:gap-3 lg:min-h-[400px]">
      <Icon className="w-10 h-10 lg:h-16 lg:w-16" />
      <h4 className="text-lg xl:text-2xl">{title}</h4>
      <p className="text-sm text-white/85 xl:text-base">{description}</p>
    </div>
  );
};

export default AdvantageCard;
