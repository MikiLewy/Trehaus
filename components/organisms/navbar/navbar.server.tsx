import Image from 'next/image';
import Link from 'next/link';

import NavLink from '@/components/atoms/nav-link/nav-link';
import NavbarContactDetails from '@/components/atoms/navbar-contact-details/navbar-contact-details';
import { routes } from '@/constants/routes';
import logo from '@/public/logo.svg';

import ClientNavbar from './navbar.client';

const ServerNavbar = async () => {
  return (
    <nav className="sticky top-0 bg-white z-50 border-b border-black/20">
      <div className="flex items-center justify-between py-6 lg:py-8 content-container">
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
      </div>
    </nav>
  );
};

export default ServerNavbar;
