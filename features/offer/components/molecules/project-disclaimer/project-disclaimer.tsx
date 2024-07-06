import Link from 'next/link';

import { EMAIL } from '@/constants/contact';

const ProjectDisclaimer = () => {
  return (
    <div className="text-xs lg:text-sm">
      <p className=" text-secondary">
        Przedstawiony powyżej projekt jest jedynie propozycją, jeśli masz
        upatrzony inny projekt, prześlij go nam do wyceny na maila{' '}
      </p>
      <Link href={`mailto:${EMAIL}`} className="text-blue-500 hover:underline">
        biuro.trehaus@gmail.com.
      </Link>
    </div>
  );
};

export default ProjectDisclaimer;
