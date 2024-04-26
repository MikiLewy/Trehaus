import Image from 'next/image';

import { createHttpsUrl } from '@/utils/create-https-url';

import Button from '../../../../../components/atoms/button/button';

interface Props {
  title: string;
  squareMeters: number;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  buttonHref: string;
}

const OfferCard = ({
  title,
  squareMeters,
  buttonHref,
  description,
  img,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-[#F5F5F4] overflow-hidden min-h-[500px] ">
      <Image
        src={createHttpsUrl(img.src)}
        alt={img.alt}
        layout="responsive"
        className="min-h-72 max-h-72 object-cover"
        width={100}
        height={100}
      />
      <div className="px-6 py-4 flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <h4 className="font-semibold text-xl">{title}</h4>
            <p className="text-xs mt-0.5">Dom {squareMeters} m²</p>
          </div>
          <p className="text-sm text-black/75 max-w-[80%]">{description}</p>
        </div>
        <Button className="mt-4" href={buttonHref}>
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
