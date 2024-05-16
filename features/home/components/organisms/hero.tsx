import Image from 'next/image';

import Button from '@/components/atoms/button/button';
import Typography from '@/components/atoms/typography/typography';

const Hero = () => {
  return (
    <header className="w-full h-[75vh] relative flex items-center justify-start">
      <Image
        src={'/hero-mobile.webp'}
        alt="Główne zdjęcie przedstawiające projekt domu Z87 w szkielecie drewnianym"
        fill
        priority
        quality={100}
        className="absolute inset-0 object-cover w-full h-full 2xl:hidden"
      />
      <Image
        src={'/hero.webp'}
        alt="Główne zdjęcie przedstawiające projekt domu Z87 w szkielecie drewnianym"
        fill
        priority
        quality={100}
        className="hidden absolute inset-0 object-cover w-full h-full 2xl:block"
      />
      <div className="absolute inset-0 z-10 bg-black/65 " />
      <div className="relative z-20 content-container">
        <div className=" max-w-[500px] flex flex-col gap-2 lg:max-w-[800px]">
          <Typography variant="h1" className="text-white">
            Budownictwo energooszczędne, konstrukcje drewniane
          </Typography>
          <Typography variant="p1" className="text-secondary-white">
            Ponad 20 lat doświadczenia przy budowie energooszczędnych domów
            szkieletowych.
          </Typography>
          <Button href="/oferta" className="self-start mt-2">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
