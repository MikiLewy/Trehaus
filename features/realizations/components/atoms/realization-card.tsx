import Button from '@/components/atoms/button/button';
import ContentfulImage from '@/components/atoms/contentful-image/contentful-image';
import Typography from '@/components/atoms/typography/typography';
import { createHttpsUrl } from '@/utils/create-https-url';

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
      <ContentfulImage
        src={createHttpsUrl(img.src)}
        alt={img.alt}
        width={500}
        height={300}
        loading="lazy"
        className="w-full min-h-[300px] max-h-[300px] lg:min-h-[350px] lg:max-h-[350px] object-cover"
      />
      <div className="flex flex-col flex-1 py-4 lg:py-8 gap-2 lg:gap-4 ">
        <div className="flex flex-col gap-2 lg:gap-4 flex-1">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="p2" className="max-w-[90%] text-secondary">
            {description}
          </Typography>
        </div>
        <Button className="mt-auto self-start" href={buttonHref}>
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default RealizationCard;
