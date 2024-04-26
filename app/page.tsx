import AboutUs from '@/features/home/components/organisms/about-us';
import CompanyShowcase from '@/features/home/components/organisms/company-showcase';
import Hero from '@/features/home/components/organisms/hero';
import Stats from '@/features/home/components/organisms/stats';
import WhyChooseUs from '@/features/home/components/organisms/why-choose-us';
import WorkWithUs from '@/features/home/components/organisms/work-with-us';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <CompanyShowcase />
      <WhyChooseUs />
      <WorkWithUs />
      <Stats />
    </main>
  );
}
