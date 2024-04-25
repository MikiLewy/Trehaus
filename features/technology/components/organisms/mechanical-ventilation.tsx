import Image from 'next/image';

import { mechanicalVentilationDescription } from '../../constants/mechanical-ventilation-description';

const MechanicalVentilation = () => {
  return (
    <section className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20">
      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2 ">
        <h3 className="text-2xl  xl:text-3xl font-semibold">
          Wentylacja mechaniczna
        </h3>
        <div className="max-w-xl  flex flex-col gap-4">
          {mechanicalVentilationDescription?.map(({ key, content }) => (
            <p key={key} className="text-sm lg:text-base text-gray-950/90">
              {content}
            </p>
          ))}
        </div>
      </div>
      <div className={`basis-1/2 xl:basis-[40%]`}>
        <Image
          draggable={false}
          src={'/technology/mechanical-ventilation.gif'}
          alt={'Mechaniczna wentylacja'}
          width={300}
          height={300}
          layout="responsive"
          className="rounded-md h-full min-h-[300px] xl:min-h-[300px]"
        />
      </div>
    </section>
  );
};

export default MechanicalVentilation;
