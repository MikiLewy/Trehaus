import { Metadata } from 'next';

import ContactSection from '@/features/contact/components/organisms/contact-section/contact-section';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z nami, aby uzyskać więcej informacji o naszych projektach budowlanych. Jesteśmy do Twojej dyspozycji poprzez telefon, email lub formularz kontaktowy. Odpowiemy na wszystkie pytania i pomożemy w realizacji Twojego wymarzonego domu. Zapraszamy do kontaktu!',
};

const Contact = () => {
  return (
    <main>
      <ContactSection />
    </main>
  );
};

export default Contact;
