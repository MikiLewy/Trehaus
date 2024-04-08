import SectionTitle from '@/components/atoms/section-title/section-title';
import ContactForm from '@/components/organisms/contact/contact-form/contact-form';

import ContactDetails from '../contact-details/contact-details';

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row content-container">
      <div className="flex flex-col gap-8 pr-8 lg:basis-1/2 vertical-section-spacing">
        <SectionTitle>Skontaktuj się z nami</SectionTitle>
        <ContactForm />
      </div>
      <ContactDetails />
    </section>
  );
};

export default ContactSection;
