import PageHeader from '@/components/atoms/page-header/page-header';
import ContactSection from '@/features/contact/components/organisms/contact-section/contact-section';
import Map from '@/features/contact/components/organisms/map/map';

const Contact = () => {
  return (
    <main>
      <PageHeader>Kontakt</PageHeader>
      <ContactSection />
      <Map />
    </main>
  );
};

export default Contact;
