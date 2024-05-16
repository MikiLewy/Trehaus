import Typography from '@/components/atoms/typography/typography';
import ContactForm from '@/features/contact/components/organisms/contact-form/contact-form';

import ContactDetails from '../contact-details/contact-details';

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row content-container">
      <div className="flex flex-col gap-8 pr-8 lg:basis-1/2 vertical-section-spacing">
        <Typography variant="h3">Skontaktuj się z nami</Typography>
        <ContactForm />
      </div>
      <ContactDetails />
    </section>
  );
};

export default ContactSection;
