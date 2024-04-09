interface Props {
  slug: string;
}

const RealizationDetailsSection = ({ slug }: Props) => {
  return (
    <section className="flex flex-col gap-2 lg:gap-5">
      <h4 className="text-2xl lg:text-4xl font-medium">Realizacja {slug}</h4>
      <p className="text-sm lg:text-base">
        Z dumą prezentujemy naszą realizacje, które wyróżnia się harmonijnym
        designem i wysoką jakością wykonania. Poznaj nasze domy, które łączą
        tradycję z nowoczesnością, tworząc idealne przestrzenie do życia.
      </p>
    </section>
  );
};

export default RealizationDetailsSection;
