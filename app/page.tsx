import CompanyShowcase from '@/features/home/components/organisms/company-showcase';
import Hero from '@/features/home/components/organisms/hero';
import WhyChooseUs from '@/features/home/components/organisms/why-choose-us';
import WorkWithUs from '@/features/home/components/organisms/work-with-us';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <CompanyShowcase />
      <WorkWithUs />
    </main>
  );
}
