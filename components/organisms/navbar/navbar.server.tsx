import Image from 'next/image';
import Link from 'next/link';

import NavLink from '@/components/atoms/nav-link/nav-link';
import NavbarContactDetails from '@/components/atoms/navbar-contact-details/navbar-contact-details';
import { routes } from '@/constants/routes';
import logo from '@/public/logo.svg';

import ClientNavbar from './navbar.client';

const ServerNavbar = async () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between py-6 lg:py-8 px-4 bg-white max-w-[1440px] mx-auto">
      <Link href={'/'}>
        <Image src={logo} alt="Trehaus logo" className="relative cursor-pointer z-10 w-24 xl:w-32 " />
      </Link>
      <ul className="hidden lg:flex items-center gap-4 lg:gap-6">
        {routes.map(({ key, title, href }) => (
          <NavLink title={title} key={key} href={href} />
        ))}
      </ul>
      <div className="hidden lg:block">
        <NavbarContactDetails />
      </div>
      <div className="block lg:hidden">
        <ClientNavbar />
      </div>
    </nav>
  );
};

export default ServerNavbar;
