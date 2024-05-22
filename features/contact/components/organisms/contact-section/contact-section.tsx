import Typography from '@/components/atoms/typography/typography';
import ContactForm from '@/features/contact/components/organisms/contact-form/contact-form';

import ContactDetails from '../contact-details/contact-details';

const ContactSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row content-container">
        <div className="flex flex-col gap-8 lg:gap-12 pr-8 lg:basis-1/2 vertical-section-spacing">
          <Typography variant="h2">Skontaktuj się z nami</Typography>
          <ContactForm />
        </div>
        <div className="hidden lg:flex lg:basis-1/2">
          <ContactDetails />
        </div>
      </div>
      <div className="lg:hidden">
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactSection;
