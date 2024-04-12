import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  href: string;
  className?: string;
}

const GoBackButton = ({ href, className }: Props) => {
  const mergedClassName = twMerge('flex items-center gap-2', className);

  return (
    <Link href={href} className={mergedClassName}>
      <ArrowLeft className="w-5 h-5" />
      <span className="text-base font-medium">Wróć</span>
    </Link>
  );
};

export default GoBackButton;
