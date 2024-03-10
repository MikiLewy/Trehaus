import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/atoms/button/button';
import Overlay from '@/components/atoms/overlay/overlay';
import SectionTitle from '@/components/atoms/section-title/section-title';
import { ADDRESS, EMAIL, FACEBOOK_URL, LINKEDIN_URL, MAP_URL, PHONE_NUMBER } from '@/constants/contact';
import { PRIVACY_POLICY_URL } from '@/constants/privacy-policy';
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
    key: 'address',
    icon: MapPin,
    content: ADDRESS,
    href: MAP_URL,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="relative bg-footer bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center min-h-[50vh] xl:min-h-[60vh] ">
        <Overlay />
        <div className="relative z-10 flex flex-col gap-4  xl:gap-10 text-center content-container">
          <SectionTitle className="text-white">Porozmawiajmy o Twoim wymarzonym domu</SectionTitle>
          <Button className="self-center" href="/kontakt">
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
      <div className="bg-[#1A2524] relative  py-2 md:py-4 lg:pt-8 lg:pb-4 xl:pt-10">
        <div className="absolute inset-0 bg-footer_pattern" />
        <div className="relative z-10 content-container py-8 flex flex-col  gap-2 xl:gap-4 text-white/80">
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            {contactInfo.map(({ key, content, href, icon: Icon }) => (
              <Link target="_blank" href={href} className="flex flex-row items-center gap-3 text-white/80 hover:text-white/60" key={key}>
                <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                <p className="text-lg md:text-xl lg:text-2xl">{content}</p>
              </Link>
            ))}
          </div>
          <div className="h-[1px] w-full bg-white/60 my-4"></div>
          <div className="flex justify-between items-center ">
            <p className="text-xs  md:text-sm">
              © {new Date().getFullYear()} Trehaus{' | '}
              <Link href={PRIVACY_POLICY_URL} className="hover:text-white/60">
                Polityka prywatności
              </Link>
            </p>
            <Link href={FACEBOOK_URL}>
              <FacebookIcon className="w-4 md:w-5 cursor-pointer hover:text-white/60" />
            </Link>
          </div>
          <p className="text-xs md:text-sm">
            Designed & Developed by{' '}
            <Link href={LINKEDIN_URL} target="_blank" className="hover:text-white/60 underline">
              Mikołaj Lewandowski
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
