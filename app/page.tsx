import AboutUs from '@/components/organisms/home/about-us/about-us';
import CompanyShowcase from '@/components/organisms/home/company-showcase/company-showcase';
import Hero from '@/components/organisms/home/hero/hero';
import Stats from '@/components/organisms/home/stats/stats';
import WhyChooseUs from '@/components/organisms/home/why-choose-us/why-choose-us';
import WorkWithUs from '@/components/organisms/home/work-with-us/work-with-us';

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
