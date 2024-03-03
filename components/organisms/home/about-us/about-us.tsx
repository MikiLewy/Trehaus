import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/atoms/button/button';
import SectionTitle from '@/components/atoms/section-title/section-title';

const AboutUs = () => {
  return (
    <div className="content-container py-6 lg:py-10 xl:py-14 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-2 ">
      <div className="flex flex-col gap-2 xl:gap-4 basis-1/2 xl:basis-[45%]">
        <SectionTitle>Poznaj nas bliżej</SectionTitle>
        <p className="text-sm xl:text-base max-w-[500px] xl:max-w-[600px]">
          Marzysz o własnym domu, ale przeraża Cię długi czas oczekiwania, formalności i koszty? Powierz zaprojektowanie domu i jego budowę Trehaus -
          sprzedaż domów kompaktowych to nasza specjalność!
        </p>
        <Link href={'/kontakt'}>
          <Button className="mt-2">Skontaktuj się z nami</Button>
        </Link>
      </div>
      <div className="basis-1/2 xl:basis-[55%]">
        <Image src="/about-us.jpg" draggable={false} alt="Budowa domu" width={500} height={500} layout="responsive" className="rounded-md h-full" />
      </div>
    </div>
  );
};

export default AboutUs;
