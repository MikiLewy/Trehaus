import PageHeader from '@/components/atoms/page-header/page-header';
import Realizations from '@/features/realizations/components/organisms/realizations';

const RealizationsPage = () => {
  return (
    <main>
      <PageHeader>Nasze realizacje</PageHeader>
      <Realizations />
    </main>
  );
};

export default RealizationsPage;
