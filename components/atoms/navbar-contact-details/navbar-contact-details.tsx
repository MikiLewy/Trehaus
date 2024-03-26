import Link from 'next/link';

import { navbarContactDetails } from '@/constants/navbar-contact-details';

const NavbarContactDetails = () => {
  return (
    <div className="pl-4 flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
      {navbarContactDetails.map(({ key, text, icon, href }) => (
        <Link key={key} href={href} target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          {icon}
          <p className="text-sm xl:text-base font-medium">{text}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavbarContactDetails;
