import { Mail, Phone } from 'lucide-react';

import { FacebookIcon } from '@/icons/facebook';
import { ContactDetail } from '@/types/interfaces/contact-detail';

import { FACEBOOK_URL, PHONE_NUMBER, EMAIL } from './contact';

export const navbarContactDetails: ContactDetail[] = [
  {
    key: 'email',
    text: EMAIL,
    icon: <Mail className="w-4" />,
    href: `mailto:${EMAIL}`,
  },
  {
    key: 'phone',
    text: PHONE_NUMBER,
    icon: <Phone className="w-4" />,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    key: 'facebook',
    text: 'Facebook',
    icon: <FacebookIcon className="w-4" />,
    href: FACEBOOK_URL,
  },
];
