import ContentfulImage from '@/components/atoms/contentful-image/contentful-image';
import Typography from '@/components/atoms/typography/typography';
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
    <div className="relative flex flex-col gap-2 rounded-md bg-gray-50 overflow-hidden min-h-[500px] ">
      <ContentfulImage
        src={createHttpsUrl(img.src)}
        alt={img.alt}
        loading="lazy"
        className="min-h-72 max-h-72 w-full object-cover"
        width={400}
        height={288}
      />
      <div className="px-6 py-4 flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <Typography variant="h5" className="font-semibold ">
              {title}
            </Typography>
            <Typography variant="p2" className="xl:text-sm mt-0.5">
              Dom {squareMeters} m²
            </Typography>
          </div>
          <Typography variant="p2" className="text-secondary max-w-[80%]">
            {description}
          </Typography>
        </div>
        <Button className="mt-4" href={buttonHref}>
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
