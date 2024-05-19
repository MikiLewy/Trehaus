import offerImg from '@/public/oferta.webp';
import realizationImg from '@/public/realizacja.webp';

import CompanyShowcaseCard from '../atoms/company-showcase-card';

const companyShowcase = [
  {
    key: 'oferta',
    title: 'Nasza oferta',
    description: 'Wybierz z naszej bogatej oferty idealny dom dla siebie',
    img: {
      static: offerImg,
      alt: 'oferta',
    },
    href: '/oferta',
  },
  {
    key: 'realizacje',
    title: 'Nasze realizacje',
    description:
      'Przekonaj się, dlaczego nasi klienci nie mogą się doczekać, aby podzielić się swoimi pozytywnymi doświadczeniami z naszymi projektami!',
    img: {
      static: realizationImg,
      alt: 'realizacja',
    },
    href: '/realizacje',
  },
];

const CompanyShowcase = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px] gap-6 vertical-section-spacing content-container">
      {companyShowcase.map(({ title, description, href, img, key }) => (
        <CompanyShowcaseCard
          key={key}
          title={title}
          description={description}
          img={img}
          href={href}
        />
      ))}
    </section>
  );
};

export default CompanyShowcase;
