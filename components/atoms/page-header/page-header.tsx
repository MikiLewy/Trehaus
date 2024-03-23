import { ReactNode } from 'react';

import Overlay from '../overlay/overlay';

interface Props {
  children: ReactNode;
}

const PageHeader = ({ children }: Props) => {
  return (
    <div className="bg-[url('/sub-page-hero.webp')] bg-no-repeat bg-center bg-cover h-[25vh] w-full relative">
      <Overlay />
      <div className="content-container flex items-center h-full relative z-10">
        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl">{children}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
