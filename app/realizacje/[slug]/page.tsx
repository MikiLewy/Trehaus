import PageHeader from '@/components/atoms/page-header/page-header';

interface Props {
  params: { slug: string };
}

const RealizationDetails = ({ params }: Props) => {
  return (
    <main>
      <PageHeader>Realizacja {params.slug} </PageHeader>
    </main>
  );
};

export default RealizationDetails;
