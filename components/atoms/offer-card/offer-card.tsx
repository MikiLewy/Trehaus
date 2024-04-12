import Image from 'next/image';

import Button from '../button/button';

interface Props {
  title: string;
  titleCaption: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  buttonHref: string;
}

const OfferCard = ({
  title,
  titleCaption,
  buttonHref,
  description,
  img,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-[#F5F5F4] overflow-hidden min-h-[500px] ">
      <Image
        src={img.src}
        alt={img.alt}
        layout="responsive"
        className="min-h-72 object-cover"
        width={100}
        height={100}
      />
      <div className="px-6 py-4 flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <h4 className="font-semibold text-2xl">{title}</h4>
            <p className="text-xs ">{titleCaption}</p>
          </div>
          <p className="text-sm text-black/75 max-w-[80%] mb-2">
            {description}
          </p>
        </div>
        <Button className="mt-2" href={buttonHref}>
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
