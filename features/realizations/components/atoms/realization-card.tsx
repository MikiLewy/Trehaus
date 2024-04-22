import Image from 'next/image';

import Button from '@/components/atoms/button/button';

interface Props {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  buttonHref: string;
}

const RealizationCard = ({ title, buttonHref, description, img }: Props) => {
  return (
    <div className="flex flex-col">
      <Image src={img.src} alt={img.alt} width={500} height={500} className="w-full max-h-[300px] object-cover" />
      <div className="flex flex-col py-4 lg:py-8 gap-2 lg:gap-4 ">
        <h3 className="text-xl lg:text-3xl font-medium">{title}</h3>
        <p className="max-w-[90%] text-sm lg:text-base">{description}</p>
        <Button className="mt-auto self-start" href={buttonHref}>
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default RealizationCard;
