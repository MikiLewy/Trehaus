import Image from 'next/image';

import Button from '@/components/atoms/button/button';

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
      {/* <div className="absolute inset-0 bg-mobile_hero 2xl:bg-hero bg-cover bg-no-repeat bg-center"></div> */}
      <div className="absolute inset-0 z-10 bg-black/65 " />
      <div className="relative z-20 content-container">
        <div className=" max-w-[500px] flex flex-col gap-2 lg:max-w-[800px]">
          <h1 className="text-3xl text-white lg:text-4xl xl:text-5xl font-medium xl:leading-snug">
            Budownictwo energooszczędne, konstrukcje drewniane
          </h1>
          <p className="text-sm text-white/90 lg:text-base xl:text-lg font-normal">
            Ponad 20 lat doświadczenia przy budowie energooszczędnych domów
            szkieletowych.
          </p>
          <Button href="/oferta" className="self-start mt-2">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
