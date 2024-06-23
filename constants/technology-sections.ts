import dachDomuParterowego from '../public/technology/dach-domu-parterowego.png';
import dachDomuUzytkowego from '../public/technology/dach-domu-uzytkowego.png';
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
          'Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja to płyty gipsowe Rigips 4 pro o podwyższonej odporności ogniowej, szpachlowane do standardu Q2 lub opcjonalnie Q4. Druga opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności stosujemy płyty o odpowiednim przeznaczeniu.',
      },
      {
        key: 'panel-mfp',
        title: 'Płyta MFP 10mm',
        description:
          'Jako wzmocnienie pod płyty gipsowe używamy płyty MFP. pozwala ona na większą swobodę montażu osprzętu na ścianach oraz wzmacnia konstrukcję. W przypadku wykończenia panelami drewnianymi płyty nie stosujemy.',
      },
      {
        key: 'installation-grate',
        title: 'Ruszt instalacyjny z izolacją',
        description:
          'Ruszt do bezpiecznego przeprowadzania instalacji ma wymiary 45x45mm lub więcej w przypadkach kiedy jest to konieczne do przeprowadzenia większych instalacji. Ruszt dodatkowo wypełniony jest wełną drzewną 40mm, która działa jako likwidacja mostków cieplnych.',
      },
      {
        key: 'steam-insulation',
        title: 'Paroizolacja Siga',
        description:
          'Do zapewnienia systemu szczelności budynków stosujemy produkty marki Siga. W pomieszczeniach o podwyższonej wilgotności stosujemy produkty o zmiennym oporze dyfuzyjnym. Folie paroizolacyjne są uszczelniane taśmami Siga, dzięki czemu zyskujemy trwałe połączenie.',
      },
      {
        key: 'wall-covering',
        title: 'Poszycie ściany',
        description:
          'Do stężenia ścian używamy płyty MFP 15mm. Jako zastosowanie od wewnątrz przegrody płyty MFP otwartość dyfuzyjna ściany nie jest zaburzona. Można ją stosować od wewnątrz. Zakazane jest stosowanie płyty OSB I MFP od zewnętrznej strony konstrukcji!',
      },
      {
        key: 'wall-constructions',
        title: 'Konstrukcja ściany',
        description:
          'Jako główna konstrukcja ściany stosujemy drewno suszone o przekroju 45x245mm lub dla budynków pasywnych belki dwuteowe. Drewno jest po obróbce termicznej i posiada certyfikat wytrzymałości c24.',
      },
      {
        key: 'wood-fiber',
        title: 'Izolacja steico zell z włókna drzewnego',
        description:
          'Przestrzeń konstrukcji ścian izolujemy metodą wdmuchiwania, dzięki czemu likwidujemy mostki termiczne mogące powstać przy tradycyjnym układaniu materiałów. Włókna drzewne są naturalnym produktem przyjaznym alergikom. Wełny drzewne mają bardzo dużą pojemność cieplną, dzięki czemu poddasza nie przegrzewają się tak szybko jak w przypadku wełny mineralnej.',
      },
      {
        key: 'open-plate',
        title: 'Płyty otwarte dyfuzyjnie',
        description:
          'Na konstrukcji stosujemy płyty poszycia z wełny drzewnej o grubości 60mm. Płyty posiadają krawędzie pióro-wpust, dzięki czemu chronią przed wiatrem. Dodatkowo w miejscach okien stosujemy ochronę w postaci wiatroizolacji SIGA.',
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
          'Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja to płyty gipsowe Rigips 4 pro o podwyższonej odporności ogniowej, szpachlowane do standardu Q2 lub opcjonalnie Q4. Druga opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności stosujemy płyty o odpowiednim przeznaczeniu.',
      },
      {
        key: 'wooden-rack',
        title: 'Stelaż z łat drewnianych',
        description:
          'Stelaż pod ostateczne wykończenie wykonujemy z drewna suszonego komorowo, dzięki czemu mniej pracuje. Rozstaw łat to 35cm. Ruszt jest poziomowany do ostateczne wykończenie. Dla paneli drewnianych, które na życzenie inwestora mają mieć układ poziomy wykonujemy dodatkowy ruszt krzyżowy.',
      },
      {
        key: 'steam-insulation',
        title: 'Paroizolacja Siga',
        description:
          'Do zapewnienia systemu szczelności budynków stosujemy produkty marki Siga. W pomieszczeniach o podwyższonej wilgotności stosujemy produkty o zmiennym oporze dyfuzyjnym. Folie paroizolacyjne są uszczelniane taśmami Siga, dzięki czemu zyskujemy trwałe połączenie.',
      },
      {
        key: 'system-rafters',
        title: 'Krokwie w systemie MITEK lub belki dwuteowe',
        description:
          'Konstrukcje dachowe wykonujemy z drewna suszonego komorowo o wytrzymałości c24. Dzięki zastosowaniu systemu Mitek dla krokwi jesteśmy w stanie uzyskać pasy wysokości 365mm. Dla dachów o wyższych wymiarach możemy zastosować belki dwuteowe.',
      },
      {
        key: 'wood-fiber',
        title: 'Izolacja steico zell z włókna drzewnego',
        description:
          'Przestrzeń między krokwiami izolujemy nadmuchową metodą, dzięki czemu likwidujemy mostki termiczne mogące powstać przy tradycyjnym układaniu materiałów. Włókna drzewne są naturalnym produktem przyjaznym alergikom. Wełny drzewne mają bardzo dużą pojemność cieplną, dzięki czemu poddasza nie przegrzewają się tak szybko jak w przypadku wełny mineralnej.',
      },
      {
        key: 'fiber-roofing',
        title: 'Izolacja nakrokwiowa',
        description:
          'Dla likwidacji mostków termicznych stosujemy izolację na krokwiową, która poprawia parametry dachu i jest dobrym wsparciem do metody nadmuchowej. Płyty są otwarte dyfuzyjnie, dzięki czemu w swobodny sposób pozwalają na migrację pary wodnej.',
      },
      {
        key: 'counterfoil',
        title: 'Kontrłata',
        description:
          'Kontrłaty pod spodem mają specjalną uszczelkę. Mocowanie kontrłat wykonujemy z użyciem wkrętów.',
      },
      {
        key: 'foil',
        title: 'Łata',
        description:
          'Łaty na dachu mają rozstawy określone pod dane pokrycie dachowe. mocowane są za pomocą gwoździ pierścieniowych.',
      },
      {
        key: 'roofing',
        title: 'Pokrycie dachowe',
        description:
          'Dla ostatecznej warstwy dachowej proponujemy blachodachówki producenta RUUKKI lub dachówki BRASS. Wzory oraz kolory pozostają do wyboru inwestora. Dla dachów płaskich ostatecznym wykończeniem jest EPDM.',
      },
    ],
  },
  {
    key: 'single-storey-house-roof',
    title: 'Dach domu parterowego',
    img: {
      static: dachDomuParterowego,
      alt: 'Dach domu parterowego',
    },
    details: [
      {
        key: 'layer-of-finish',
        title: 'Warstwa wykończenia na ruszcie drewnianym',
        description:
          'Do wykończenia wnętrz mamy dwie opcje do wyboru. Pierwsza opcja to płyty gipsowe Rigips 4 pro o podwyższonej odporności ogniowej, szpachlowane do standardu Q2 lub opcjonalnie Q4. Druga opcja to wykończenie panelami drewnianymi. W ofercie mamy kilka rodzajów do wyboru. W pomieszczeniach o podwyższonej wilgotności stosujemy płyty o odpowiednim przeznaczeniu.',
      },
      {
        key: 'steam-insulation',
        title: 'Paroizolacja Siga',
        description:
          'Do zapewnienia systemu szczelności budynków stosujemy produkty marki Siga. W pomieszczeniach o podwyższonej wilgotności stosujemy produkty o zmiennym oporze dyfuzyjnym. Folie paroizolacyjne są uszczelniane taśmami Siga, dzięki czemu zyskujemy trwałe połączenie.',
      },
      {
        key: 'system-rafters',
        title: 'Wiązary dachowe w systemie MI-TEK',
        description:
          'Konstrukcje dachowe wykonujemy z wiązarów drewnianych. Drewno jest suszone komorowo i heblowane. Wiązary są idealnym rozwiązaniem do domów szkieletowych, ponieważ zapobiegają rozpychaniu budynku. W wiązarach można wykonać pomieszczenie strychowe na różne drobiazgi.',
      },
      {
        key: 'wood-fiber',
        title: 'Izolacja steico zell z włókna drzewnego',
        description:
          'Przestrzeń w strefie wiązarów izolujemy naturalnym włóknem drzewnym metodą luźnego zasypu. Ilość zasypu oscyluje w granicach 450-500mm. Taki zabieg pozwala nam uzyskać parametry dla dachu nawet na poziomie pasywnym. Materiał izolacyjny jest przyjazny alergikom.',
      },
      {
        key: 'roof-sheathing',
        title: 'Poszycie dachowe',
        description:
          'Dach jako stężenie otrzymuje płyty MFP grubości 18mm. Takie rozwiązanie idealnie stęża konstrukcję dachu oraz jest podbudową do membrany.',
      },
      {
        key: 'membrane-SIGA',
        title: 'Membrana SIGA',
        description:
          'Na poszyciu dachu stosujemy membrany Siga, dzięki czemu ewentualne skropliny oraz śnieg nie dostanie się do izolacji.',
      },
      {
        key: 'counterfoil',
        title: 'Kontrłata',
        description:
          'Kontrłaty pod spodem mają specjalną uszczelkę. Mocowanie kontrłat wykonujemy z użyciem wkrętów.',
      },
      {
        key: 'foil',
        title: 'Łata',
        description:
          'Łaty na dachu mają rozstawy określone pod dane pokrycie dachowe. mocowane są za pomocą gwoździ pierścieniowych.',
      },
      {
        key: 'roofing',
        title: 'Pokrycie dachowe',
        description:
          'Dla ostatecznej warstwy dachowej proponujemy blachodachówki producenta RUUKKI lub dachówki BRASS. Wzory oraz kolory pozostają do wyboru inwestora. Dla dachów płaskich ostatecznym wykończeniem jest EPDM.',
      },
    ],
  },
];
