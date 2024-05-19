import agreement from '../public/work/agreement.webp';
import construction from '../public/work/construction.webp';
import keyToHouse from '../public/work/key-to-house.webp';
import preparationForConstruction from '../public/work/preparation-for-construction.webp';
import projectSelection from '../public/work/project-selection.webp';

export const workWithUsSteps = [
  {
    key: 'project-selection',
    title: 'Wybór projektu',
    description:
      'Jeśli masz już wybrany projekt to świetnie, zbudujemy Twój dom według Twojej wizji. Jeśli nie masz jeszcze projektu, możesz wybrać jeden z naszych, dostępnych na tej stronie.',
    img: {
      static: projectSelection,
      alt: 'Wybór projektu domu',
    },
  },
  {
    key: 'agreement',
    title: 'Formalności',
    description:
      'Po wyborze projektu oraz podpisaniu umowy, pomożemy w uzyskaniu warunków zabudowy oraz otrzymaniu pozwolenia na budowę.',
    img: {
      static: agreement,
      alt: 'Podpisanie umowy',
    },
  },
  {
    key: 'preparation-of-the-construction',
    title: 'Przygotowanie terenu pod budowę',
    description: 'Pomożemy w uzbrojeniu działki w wodę oraz prąd budowlany.',
    img: {
      static: preparationForConstruction,
      alt: 'Przygotowanie działki do budowy',
    },
  },
  {
    key: 'construction',
    title: 'Budowa',
    description:
      'Wybudujemy dom zgodnie z projektem, terminem oraz zapisami ustalonymi w podpisanej umowie.',
    img: {
      static: construction,
      alt: 'Budowa domu zgodnie z projektem',
    },
  },
  {
    key: 'completion-of-construction',
    title: 'Zakończenie budowy',
    description: 'Przekazanie kluczy do domu nowym właścicielom.',
    img: {
      static: keyToHouse,
      alt: 'Wręczenie kluczy do domu po zakończeniu budowy',
    },
  },
];
