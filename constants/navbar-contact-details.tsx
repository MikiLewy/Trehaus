import { Mail, Phone } from 'lucide-react';

import { FacebookIcon } from '@/icons/facebook';
import { ContactDetail } from '@/types/interface/contact-detail';

export const navbarContactDetails: ContactDetail[] = [
  {
    key: 'email',
    text: 'biuro.trehaus@gmail.com',
    icon: <Mail className="w-4" />,
    href: 'mailto:biuro.trehaus@gmail.com',
  },
  {
    key: 'phone',
    text: '123456789',
    icon: <Phone className="w-4" />,
    href: 'tel:+48123456789',
  },
  {
    key: 'facebook',
    text: 'Facebook',
    icon: <FacebookIcon className="w-4" />,
    href: 'https://www.facebook.com/profile.php?id=100077756584897',
  },
];
