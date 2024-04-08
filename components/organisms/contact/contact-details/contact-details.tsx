import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  MAP_URL,
  PHONE_NUMBER,
} from '@/constants/contact';
import { FacebookIcon } from '@/icons/facebook';

const contactInfo = [
  {
    key: 'phone',
    icon: Phone,
    content: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    key: 'mail',
    icon: Mail,
    content: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    key: 'facebook',
    icon: FacebookIcon,
    content: 'Facebook',
    href: FACEBOOK_URL,
  },
  {
    key: 'address',
    icon: MapPin,
    content: ADDRESS,
    href: MAP_URL,
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-1 bg-primary ">
      <div className="vertical-section-spacing flex flex-col gap-9 justify-center content-container">
        {contactInfo.map(({ key, content, href, icon: Icon }) => (
          <Link
            target="_blank"
            href={href}
            className="flex flex-row items-center gap-3 text-white/80 hover:text-white/60"
            key={key}>
            <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            <p className="text-lg md:text-xl lg:text-2xl">{content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
