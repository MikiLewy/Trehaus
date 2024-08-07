'use client';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/atoms/button/button';
import Typography from '@/components/atoms/typography/typography';

interface Props {
  title: string;
  description: string;
  href: string;
  img: {
    static: StaticImageData;
    alt: string;
  };
}

const CompanyShowcaseCard = ({ title, img, href, description }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className={`relative group cursor-pointer  duration-75 h-full  flex flex-col items-start justify-center gap-2 rounded-lg overflow-hidden py-6 lg:py-10 xl:py-14 px-8 `}>
      <div className="relative z-10 flex flex-col gap-2">
        <Typography variant="h3" className="xl:text-4xl text-white">
          {title}
        </Typography>
        <Typography variant="p2" className="text-secondary-white max-w-[85%]">
          {description}
        </Typography>
        <Button href={href} className="mt-2 md:hidden text-white/90">
          Zobacz więcej
        </Button>
      </div>
      <Image
        src={img.static}
        alt={img.alt}
        placeholder="blur"
        width={600}
        height={600}
        className="absolute inset-0 w-full h-full object-cover object-center duration-1000 z-0 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 duration-1000" />
    </div>
  );
};

export default CompanyShowcaseCard;
