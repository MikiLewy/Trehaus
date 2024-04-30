import Counter from '@/components/atoms/counter/counter';
import SectionTitle from '@/components/atoms/section-title/section-title';

const stats = [
  {
    key: 'experience',
    description: 'lat doświadczenia',
    value: 20,
  },
  {
    key: 'completed-houses',
    description: 'wybudowanych domów',
    value: 190,
  },
  {
    key: 'realizations',
    description: 'realizacji rocznie',
    value: 50,
  },
  {
    key: 'customers',
    description: 'zadowolonych klientów',
    value: 120,
  },
];

const Stats = () => {
  return (
    <section className="vertical-section-spacing content-container">
      <SectionTitle className="md:text-center">
        Zaufaj naszemu doświadczeniu
      </SectionTitle>
      <div className="flex flex-col justify-start gap-6 mt-6 md:justify-between md:flex-row md:mt-10 xl:mt-20 ">
        {stats.map(stat => (
          <div
            key={stat.key}
            className="flex flex-col gap-1 md:text-center md:basis-1/4 md:items-center">
            <h3 className="font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <Counter from={0} to={stat.value ?? 0} />+
            </h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
