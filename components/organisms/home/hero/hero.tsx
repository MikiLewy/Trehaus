import Button from '@/components/atoms/button/button';

const Hero = () => {
  return (
    <div className="w-full h-[75vh] lg:h-[70vh] relative flex items-center justify-start">
      <div className="absolute inset-0 bg-hero bg-cover bg-no-repeat bg-center"> </div>
      <div className="absolute inset-0 z-10 bg-black/65 " />
      <div className="relative z-20 content-container">
        <div className=" max-w-[500px] flex flex-col gap-2  lg:max-w-[800px]">
          <h1 className="text-2xl text-white lg:text-3xl xl:text-5xl font-medium xl:leading-snug">
            Budownictwo energooszczędne, konstrukcje drewniane
          </h1>
          <p className="text-sm text-white/90 lg:text-base xl:text-lg font-normal">Ponad 20 lat doświadczenia nabytego w pracy w Skandynawii</p>
          <Button className="self-start mt-2">Sprawdź ofertę</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
