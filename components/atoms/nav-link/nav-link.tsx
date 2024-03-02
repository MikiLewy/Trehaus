'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  title: string;
}

const NavLink = ({ title, href }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg lg:text-sm xl:text-base ${isActive ? 'text-gray-900' : 'text-gray-600'} font-medium cursor-pointer hover:text-gray-900 transition-colors duration-500`}>
      {title}
    </Link>
  );
};

export default NavLink;
