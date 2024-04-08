import PageHeader from '@/components/atoms/page-header/page-header';
import ContactSection from '@/components/organisms/contact/contact-section/contact-section';
import Map from '@/components/organisms/contact/map/map';

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
