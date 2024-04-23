import { PlusCircle } from 'lucide-react';
import Image from 'next/image';

import PageHeader from '@/components/atoms/page-header/page-header';
import { technologyConstructionDetailsSections } from '@/constants/technology-sections';
import { convertIndexToNumber } from '@/utils/convert-index-to-number';

const Technology = () => {
  return (
    <main>
      <PageHeader>Technologia</PageHeader>
      <div className="flex flex-col my-4 content-container vertical-section-spacing gap-6 md:gap-10 lg:gap-14 xl:gap-20">
        {technologyConstructionDetailsSections?.map(
          ({ title, img, details, key }, index) => (
            <section
              key={key}
              className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20 ">
              <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2 ">
                <h3 className="text-2xl  xl:text-3xl font-semibold">{title}</h3>
                <div className="border-2 border-gray-200 max-w-xl p-4 flex flex-col gap-4">
                  {details?.map(({ key, title, description }, index) => (
                    <div key={key}>
                      <details>
                        <summary className="text-sm lg:text-base xl:text-lg text-gray-950/90 flex justify-between items-center gap-1 list-none">
                          <div>
                            {convertIndexToNumber(index)}. {title}
                          </div>
                          <PlusCircle className="min-w-max" size={24} />
                        </summary>
                        <p className="text-sm lg:text-base mt-2 text-gray-950/90">
                          {description}
                        </p>
                      </details>
                      {details.length - 1 !== index ? (
                        <div className="w-full bg-gray-200 h-px mt-4" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`basis-1/2 xl:basis-[40%] ${index % 2 === 0 ? 'sm:order-1' : 'sm:-order-1'}`}>
                <Image
                  src={img.src}
                  draggable={false}
                  alt={img.alt}
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-md h-full xl:min-h-[300px]"
                />
              </div>
            </section>
          ),
        )}
        <section className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20">
          <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2 ">
            <h3 className="text-2xl  xl:text-3xl font-semibold">
              Wentylacja mechaniczna
            </h3>
            <div className="max-w-xl  flex flex-col gap-4">
              <p className="text-sm lg:text-base text-gray-950/90">
                Dzięki temu, że nasze budynki posiadają szczelność powietrzną
                standardach pasywnych ograniczmy niekontrolowane dopływy
                powietrza z zewnątrz do minimum.
              </p>
              <p className="text-sm lg:text-base text-gray-950/90">
                Rekuperacja pozwala na odzyskiwanie energii termicznej z
                powietrza zużytego, które jest wymieniane przez rekuperator z
                zewnętrznym nowym powietrzem.Rekuperacja pozwala na odzyskiwanie
                energii termicznej z powietrza zużytego, które jest wymieniane
                przez rekuperator z zewnętrznym nowym powietrzem.
              </p>
              <p className="text-sm lg:text-base text-gray-950/90">
                Taki zabieg sprawia, że powietrze wewnętrzne ma skład zbliżony
                do zewnętrznego, a nawet lepszy po zastosowaniu filtrów
                oczyszczających powietrze. W domu panuje przyjemny komfort bez
                wykonywania jakichkolwiek czynności. Taki zabieg sprawia, że w
                domu przyjemniej się przebywa, a domownicy mają więcej energii.
              </p>
              <p className="text-sm lg:text-base text-gray-950/90">
                Zużyte powietrze z łazienek i kuchni jest usuwane, a nawiewanie
                świeże w sypialniach i pokojach.
              </p>
              <p className="text-sm lg:text-base text-gray-950/90">
                Każdorazowo nasze instalacje są przeliczane, żeby ilości
                nawiewanego i wywiewanego powietrza były odpowiednie dla
                mieszkańców.
              </p>
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
      </div>
    </main>
  );
};

export default Technology;
