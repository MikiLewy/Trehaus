import { Users } from 'lucide-react';

import AdvantageCard from '@/components/atoms/advantage-card/advantage-card';
import SectionTitle from '@/components/atoms/section-title/section-title';

const advantagesCard = [
  {
    key: 'individual-approach',
    icon: Users,
    title: 'Indywidualne podejście',
    description:
      'Marzysz o własnym domu, ale przeraża Cię długi czas oczekiwania, formalności i koszty? Powierz zaprojektowanie domu i jego budowę Trehaus - sprzedaż domów kompaktowych to nasza specjalność!',
  },
  {
    key: 'individual-approach2',
    icon: Users,
    title: 'Indywidualne podejście',
    description:
      'Marzysz o własnym domu, ale przeraża Cię długi czas oczekiwania, formalności i koszty? Powierz zaprojektowanie domu i jego budowę Trehaus - sprzedaż domów kompaktowych to nasza specjalność!',
  },
  {
    key: 'individual-approach3',
    icon: Users,
    title: 'Indywidualne podejście',
    description:
      'Marzysz o własnym domu, ale przeraża Cię długi czas oczekiwania, formalności i koszty? Powierz zaprojektowanie domu i jego budowę Trehaus - sprzedaż domów kompaktowych to nasza specjalność!',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="content-container vertical-section-spacing">
      <SectionTitle>Dlaczego domy Trehaus?</SectionTitle>
      <div className="flex flex-col lg:flex-row gap-4 mt-5 lg:mt-8 ">
        {advantagesCard?.map(advantage => (
          <AdvantageCard key={advantage.key} title={advantage.title} description={advantage.description} Icon={advantage.icon} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
