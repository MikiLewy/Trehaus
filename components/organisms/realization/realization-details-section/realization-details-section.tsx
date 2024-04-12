import PageTitle from '@/components/atoms/page-title/page-title';

interface Props {
  slug: string;
}

const RealizationDetailsSection = ({ slug }: Props) => {
  return (
    <section className="flex flex-col gap-2 lg:gap-5">
      <PageTitle>Realizacja {slug}</PageTitle>
      <p className="text-sm lg:text-base">
        Z dumą prezentujemy naszą realizacje, które wyróżnia się harmonijnym
        designem i wysoką jakością wykonania. Poznaj nasze domy, które łączą
        tradycję z nowoczesnością, tworząc idealne przestrzenie do życia.
      </p>
    </section>
  );
};

export default RealizationDetailsSection;
