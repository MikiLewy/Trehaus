import { Metadata } from 'next';

import PageHeader from '@/components/atoms/page-header/page-header';
import ConstructionDetails from '@/features/technology/components/organisms/construction-details';

export const metadata: Metadata = {
  title: 'Technologia',
  description:
    'Odkryj naszą technologię budowlaną: certyfikowane drewno C24, izolacje Steico, doskonała szczelność i energooszczędność. Zapewniamy trwałość, wysokie parametry izolacyjne i nowoczesne rozwiązania dla Twojego domu. Sprawdź, jak nasze innowacje mogą poprawić komfort i efektywność energetyczną Twojego budynku.',
};

const Technology = () => {
  return (
    <main>
      <PageHeader>Technologia</PageHeader>
      <section className="flex flex-col my-4 content-container vertical-section-spacing gap-10 md:gap-10 lg:gap-14 xl:gap-20">
        <ConstructionDetails />
      </section>
    </main>
  );
};

export default Technology;
