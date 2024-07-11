import Link from 'next/link';

import { EMAIL } from '@/constants/contact';

const ProjectDisclaimer = () => {
  return (
    <div className="text-xs lg:text-sm">
      <p className=" text-secondary">
        Przedstawiony powyżej projekt jest jedynie propozycją. Oferta ma
        charakter poglądowy i każdy przypadek jest rozpatrywany indywidualnie.
        Na cenę końcową oferty wpływają również dodatkowe czynniki takie jak
        odległość do budowy, charakter działki itd. Jeśli masz inny projekt,
        który Cię interesuje, prześlij go nam do wyceny na maila{' '}
        <Link
          href={`mailto:${EMAIL}`}
          className="text-blue-500 hover:underline">
          biuro.trehaus@gmail.com
        </Link>
        .
      </p>
    </div>
  );
};

export default ProjectDisclaimer;
