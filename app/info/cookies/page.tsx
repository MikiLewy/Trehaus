import Typography from '@/components/atoms/typography/typography';

const Page = () => {
  return (
    <main className="vertical-section-spacing content-container flex flex-col gap-4">
      <Typography variant="h2" className="mb-4">
        Polityka plików cookie dla Trehaus
      </Typography>
      <Typography variant="h5">Informacja o plikach cookie</Typography>
      <Typography variant="p2">
        Nasza strona internetowa używa wyłącznie niezbędnych plików cookie,
        które są niezbędne do jej prawidłowego funkcjonowania. Te pliki cookie
        nie zbierają żadnych danych osobowych i są usuwane po zakończeniu sesji.
        Nie używamy plików cookie do celów analitycznych, marketingowych ani
        funkcjonalnych.
      </Typography>
    </main>
  );
};

export default Page;
