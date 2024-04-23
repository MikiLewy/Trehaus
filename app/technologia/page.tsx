import { Plus } from 'lucide-react';
import Image from 'next/image';

import ContentSection from '@/components/organisms/technology/content-section/content-section';
import { technologySections } from '@/constants/technology-sections';

const Technology = () => {
  return (
    <main className="">
      {/* <PageHeader>Technologia</PageHeader> */}
      <div className="flex flex-col my-4">
        {technologySections.map((technologySection, index) => (
          <ContentSection
            key={technologySection.key}
            title={technologySection.title}
            description={technologySection.description}
            img={technologySection.img}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
        <section className="flex flex-col items-center sm:flex-row lg:items-start gap-6 lg:gap-20 content-container vertical-section-spacing">
          <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 sm:basis-1/2">
            <h3 className="text-2xl  xl:text-3xl font-semibold">
              Ściana zewnętrzna
            </h3>
            <details>
              <summary className="text-sm lg:text-base xl:text-lg text-gray-950/90">
                1. Warstwa wykończenia
              </summary>
              <p className="text-sm lg:text-base xl:text-lg text-gray-950/90">
                Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja
                to płyty gipsowe Rigips 4 pro o podwyższonej odporności
                ogniowej, szpachlowane do standardu Q2 lub opcjonalnie Q4. Druga
                opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka
                rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności
                stosujemy płyty o odpowiednim przeznaczeniu.
              </p>
            </details>
            <details>
              <summary className="text-sm lg:text-base xl:text-lg text-gray-950/90 flex justify-between items-center list-none mb-2">
                <div>2. Warstwa wykończenia</div>
                <Plus size={24} />
              </summary>
              <p className="text-sm lg:text-base xl:text-lg text-gray-950/90">
                Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja
                to płyty gipsowe Rigips 4 pro o podwyższonej odporności
                ogniowej, szpachlowane do standardu Q2 lub opcjonalnie Q4. Druga
                opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka
                rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności
                stosujemy płyty o odpowiednim przeznaczeniu.
              </p>
            </details>
          </div>
          <div className={`basis-1/2 xl:basis-[40%]`}>
            <Image
              src={'/technology/sciana.png'}
              draggable={false}
              alt={'Ściana zewnętrzna'}
              width={300}
              height={300}
              layout="responsive"
              className="rounded-md h-full xl:min-h-[300px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Technology;
