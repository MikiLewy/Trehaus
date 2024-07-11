import dachDomuUzytkowego from '../public/technology/dach.png';
import sciana from '../public/technology/sciana.png';

export const technologyConstructionDetailsSections = [
  {
    key: 'external-wall',
    title: 'Ściana zewnętrzna',
    img: {
      static: sciana,
      alt: 'Ściana zewnętrzna',
    },
    details: [
      {
        key: 'layer-of-finish',
        title: 'Warstwa wykończenia',
        description:
          'Płyta gipsowa 12,5 mm szpachlowana do standardu Q1 lub opcjonalnie do standardu Q3. Możliwe jest również wykończenie ściany panelem drewnianym.',
      },
      {
        key: 'construction-plate',
        title: 'Płyta konstrukcyjna',
        description:
          'Jako wzmocnienie pod płyty gipsowe używamy płyty OSB3 12mm. pozwala ona na większą swobodę montażu osprzętu na ścianach oraz wzmacnia konstrukcję. W przypadku wykończenia panelami drewnianymi płyty nie stosujemy.',
      },
      {
        key: 'installation-grate',
        title: 'Ruszt instalacyjny',
        description:
          'Ruszt do bezpiecznego przeprowadzania instalacji elektrycznej oraz wodnej ma wymiary 38x63 mm. Zapewnia szczelność paroizolacji.',
      },
      {
        key: 'steam-insulation',
        title: 'Paroizolacja',
        description:
          'Do zapewnienia systemu szczelności budynków stosujemy produkty marki Isover stopair oraz taśmy Eurovent lub Steico. Zaletą zastosowania tej membrany jest jej przezroczystość, dzięki czemu mamy pewność, że przegroda zewnętrzna została poprawnie zadmuchana.',
      },
      {
        key: 'constructions',
        title: 'Konstrukcja',
        description:
          'Jako główna konstrukcja ściany stosujemy drewno suszone c24 o przekroju 45x145mm lub 45x195mm.',
      },
      {
        key: 'wood-fiber',
        title: 'Izolacja z wełny drzewnej',
        description:
          'Przestrzeń konstrukcji ścian izolujemy metodą wdmuchiwania, dzięki czemu likwidujemy mostki termiczne mogące powstać przy tradycyjnym układaniu materiałów. Włókna drzewne są naturalnym produktem przyjaznym alergikom. Wełny drzewne mają bardzo dużą pojemność cieplną, dzięki czemu poddasza nie przegrzewają się tak szybko jak w przypadku wełny mineralnej.',
      },
      {
        key: 'open-plate',
        title: 'Płyty otwarte dyfuzyjnie',
        description:
          'Na konstrukcji stosujemy płyty poszycia z wełny drzewnej o grubości 60mm. Płyty posiadają krawędzie pióro-wpust, dzięki czemu chronią przed wiatrem.',
      },
      {
        key: 'finishing',
        title: 'Wykończenie',
        description:
          'Jako ostateczną warstwę stosujemy system tynkarski WEBER. Kolor do wyboru. Na życzenie klienta możemy wykonać wstawki drewniane lub pełen system elewacji wentylowanej. Elewacje drewniane kolory i wzory do wyboru inwestora.',
      },
    ],
  },
  {
    key: 'house-roof',
    title: 'Dach domu z poddaszem użytkowym',
    img: {
      static: dachDomuUzytkowego,
      alt: 'Dach domu z poddaszem użytkowym',
    },
    details: [
      {
        key: 'layer-of-finish',
        title: 'Warstwa wykończenia',
        description:
          'Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja to płyty gipsowe 12,5 mm, szpachlowane do standardu Q1 lub opcjonalnie Q3. Druga opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności stosujemy płyty o odpowiednim przeznaczeniu.',
      },
      {
        key: 'wooden-rack',
        title: 'Ruszt instalacyjny (stelaż)',
        description:
          'Stelaż pod ostateczne wykończenie wykonujemy z drewna suszonego komorowo C16, dzięki czemu mniej pracuje, lub w przypadku konieczności znacznego obniżenia sufitu, np. pod instalację rekuperacji, stosujemy stelaż stalowy.',
      },
      {
        key: 'steam-insulation',
        title: 'Paroizolacja',
        description:
          'Do zapewnienia systemu szczelności budynków stosujemy produkty marki Isover stopair oraz taśmy Eurovent lub Steico. Zaletą zastosowania tej membrany jest jej przezroczystość, dzięki czemu mamy pewność, że przegroda zewnętrzna została poprawnie zadmuchana.',
      },
      {
        key: 'constructions',
        title: 'Kontstrukcja',
        description:
          'Na krokwie przeważnie stosujemy drewno c24 o przekroju 45x195 mm o odpowiednim zagęszczeniu. Na podciągi, krawężnice itd. Przeważnie stosujemy drewno KVH, lub BSH. Wszystko zależy od przekroju.',
      },
      {
        key: 'wood-fiber',
        title: 'Izolacja z wełny drzewnej',
        description:
          'Przestrzeń konstrukcji ścian izolujemy metodą wdmuchiwania, dzięki czemu likwidujemy mostki termiczne mogące powstać przy tradycyjnym układaniu materiałów. Włókna drzewne są naturalnym produktem przyjaznym alergikom. Wełny drzewne mają bardzo dużą pojemność cieplną, dzięki czemu poddasza nie przegrzewają się tak szybko jak w przypadku wełny mineralnej.',
      },
      {
        key: 'fiber-roofing',
        title: 'Płyta nakrokwiowa',
        description:
          'Płyta Steico uniwersal 35 mm układana na pióro-wpust likwiduje wszelkie mostki termiczne oraz zapewnia szczelność budynku.',
      },
      {
        key: 'counterfoil',
        title: 'Kontrłaty',
        description: 'Drewno o przekroju 20x40 mm',
      },
      {
        key: 'foil',
        title: 'Łaty',
        description: 'Drewno C16 o przekroju 38x63 mm',
      },
      {
        key: 'roofing',
        title: 'Poszycie dachu',
        description: 'Wedle upodobań inwestora.',
      },
    ],
  },
];
