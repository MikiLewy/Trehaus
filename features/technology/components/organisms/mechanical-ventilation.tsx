import Image from 'next/image';

import Typography from '@/components/atoms/typography/typography';

import { mechanicalVentilationDescription } from '../../constants/mechanical-ventilation-description';

const MechanicalVentilation = () => {
  return (
    <section className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20">
      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2 ">
        <Typography variant="h3" className="font-semibold">
          Wentylacja mechaniczna
        </Typography>
        <div className="max-w-xl  flex flex-col gap-4">
          {mechanicalVentilationDescription?.map(({ key, content }) => (
            <Typography variant="p2" key={key} className="text-secondary">
              {content}
            </Typography>
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
          className="rounded-md h-full object-contain min-h-[300px] xl:min-h-[300px]"
        />
      </div>
    </section>
  );
};

export default MechanicalVentilation;
