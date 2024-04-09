import GoBackButton from '@/components/atoms/go-back-button/go-back-button';
import PageHeader from '@/components/atoms/page-header/page-header';

interface Props {
  params: { slug: string };
}

const RealizationDetails = ({ params }: Props) => {
  return (
    <main>
      <PageHeader>Realizacja {params.slug} </PageHeader>
      <GoBackButton href="/realizacje" />
    </main>
  );
};

export default RealizationDetails;
