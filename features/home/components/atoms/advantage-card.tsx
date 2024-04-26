import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AdvantageCard = ({ title, description, Icon }: Props) => {
  return (
    <div className="bg-primary-darker rounded-lg flex flex-col gap-2 items-center justify-center p-4 lg:py-8 text-white  lg:gap-4 lg:min-h-[400px]">
      <Icon className="w-10 h-10 lg:h-12 lg:w-12" />
      <h4 className="text-lg xl:text-xl text-center">{title}</h4>
      <p className="text-sm text-white/85 xl:text-base mt-2">{description}</p>
    </div>
  );
};

export default AdvantageCard;
