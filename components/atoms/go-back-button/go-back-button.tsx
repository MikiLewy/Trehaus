import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  href: string;
}

const GoBackButton = ({ href }: Props) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <ArrowLeft className="w-5 h-5" />
      <span className="text-base font-medium">Wróć</span>
    </Link>
  );
};

export default GoBackButton;
