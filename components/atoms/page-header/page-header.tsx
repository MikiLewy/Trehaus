import Image from 'next/image';
import { ReactNode } from 'react';

import Overlay from '../overlay/overlay';
import Typography from '../typography/typography';

interface Props {
  children: ReactNode;
}

const PageHeader = ({ children }: Props) => {
  return (
    <div className="h-[25vh] w-full relative">
      <Overlay className="z-10" />
      <Image
        src="/sub-page-hero.webp"
        alt="Zdjęcie główne podstrony przedstawiające projekt domu Endo drewniany"
        priority
        className="absolute inset-0 w-full h-full object-cover"
        fill
      />
      <div className="content-container flex items-center h-full relative z-10">
        <Typography variant="h2" className="text-white font-normal">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default PageHeader;
