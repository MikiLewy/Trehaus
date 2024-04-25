import { ClipboardCheck, ShieldCheck, Users } from 'lucide-react';

import SectionTitle from '@/components/atoms/section-title/section-title';
import AdvantageCard from '@/features/home/components/atoms/advantage-card';

const advantagesCard = [
  {
    key: 'quality',
    icon: ClipboardCheck,
    title: 'JAKOŚĆ WYKONANIA',
    description:
      'Budownictwo szkieletowe charakteryzuje się wysoką energooszczędnością oraz przyjaznym klimatem wewnątrz budynku. Warunkiem uzyskania najwyższych parametrów jest dbałość o każdy szczegół na etapie budowy. Nasza firma dba o szczelność budynku oraz właściwości cieplne. W naszych budynkach nie ma mostków termicznych, podziurawionych membran, niedbale wykonanej paroizolacji lub innych niedociągnięć związanych z ociepleniem budynku. Każdy dom powstaje wedle zasady „budujemy jak dla siebie”.',
  },
  {
    key: 'certified-materials',
    icon: ShieldCheck,
    title: 'CERTYFIKOWANE MATERIAŁY',
    description:
      'Wszystkie domy powstają wyłącznie z drewna certyfikowanego (drewno lite C24, drewno klejone KVH, drewno klejone warstwowo BSH). Doskonałe parametry cieplne uzyskujemy dzięki produktom Steico – nakrokwiowa płyta Steico Uniwersal oraz posyciowa płyta Steico Protect zapewniają otwartość dywfuzyjną przegród zewnętrznych oraz likwidują wszelkie mostki termiczne. Wszystkie przegrody zewnętrzne ocieplone są wdmuchiwaną izolacją z włókna drzewnego Steico Zell. Produkt ten charakteryzuje się wysoką gęstością (ok. 40 kg/m3), a tym samym dużą pojemnością cieplną.',
  },
  {
    key: 'customer-service',
    icon: Users,
    title: 'ELASTYCZNE PODEJŚCIE DO KLIENTA ORAZ JASNE ZASADY FINANSOWANIA.',
    description:
      'Prócz oferty przedstawionej na stronie, jesteśmy w stanie wybudować każdy budynek w technologii szkieletowej wg zasad określonych w norweskim instytucie badań SINTEF. Doradzimy w wyborze wymarzonego domu, uwzględniając warunki panujące na działce inwestora (wystawa działki, sąsiedztwo, warunki terenowe). Niewątpliwym atutem budowy domu przez naszą firmę jest sposób finansowania. Inwestora płaci w całości za dany etap budowy (stan surowy otwarty, płyta fundamentowa, itd.) dopiero po faktycznym jego wykonaniu. Dzięki temu inwestor nie ponosi żadnego ryzyka, a jego interes jest w pełni chroniony. Ponadto przy podpisywaniu umowy nie ma konieczności wpłacania żadnych zaliczek.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="content-container vertical-section-spacing">
      <SectionTitle className="text-center">
        Dlaczego domy Trehaus?
      </SectionTitle>
      <div className="flex flex-col lg:flex-row gap-4 mt-5 lg:mt-10 ">
        {advantagesCard?.map(advantage => (
          <AdvantageCard
            key={advantage.key}
            title={advantage.title}
            description={advantage.description}
            Icon={advantage.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;