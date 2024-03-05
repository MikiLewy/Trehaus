import Button from '@/components/atoms/button/button';
import SectionTitle from '@/components/atoms/section-title/section-title';

const companyShowcase = [
  {
    key: 'oferta',
    title: 'Nasza oferta',
    description: 'Wybierz z naszej bogatej oferty idealny dom dla siebie',
    button: 'Zobacz więcej',
    bgImage: 'companyShowcaseOffer',
    href: '/oferta',
  },
  {
    key: 'realizacje',
    title: 'Nasze realizacje',
    description:
      'Przekonaj się, dlaczego nasi klienci nie mogą się doczekać, aby podzielić się swoimi pozytywnymi doświadczeniami z naszymi projektami!',
    button: 'Zobacz więcej',
    bgImage: 'companyShowcaseImplementation',
    href: '/realizacje',
  },
];

const CompanyShowcase = () => {
  return (
    <section className="relative min-h-[550px] flex lg:bg-[url('/company-showcase.png')] bg-center bg-cover">
      <div className="absolute inset-0 z-10 bg-black/65" />
      <div className="relative inset-0 lg:content-container flex flex-col lg:flex-row w-full">
        {companyShowcase.map(({ key, button, description, href, bgImage, title }) => (
          <div key={key} className={`relative bg-center bg-${bgImage} bg-cover min-h-[300px] flex lg:basis-1/2 lg:p-0 lg:bg-none`}>
            <div
              className={`relative inset-0 z-20 flex flex-col items-start justify-center gap-2 py-6 lg:py-10 xl:py-14 content-container ${key === 'oferta' ? 'lg:px-0' : ''} `}>
              <SectionTitle className="text-white">{title}</SectionTitle>
              <p className="text-white/90 text-sm lg:text-base">{description}</p>
              <Button href={href} className="mt-2">
                {button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyShowcase;
