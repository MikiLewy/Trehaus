import Button from '@/components/atoms/button/button';
import PageTitle from '@/components/atoms/page-title/page-title';

import { buildVersions } from '../../../mocks/build-versions';
import { technicalDetails } from '../../../mocks/technical-details';
import DetailsTitle from '../../atoms/details-title/details-title';

interface Props {
  projectName: string;
}

// TODO: PASS DYNAMIC DATA
const ProjectDetails = ({ projectName }: Props) => {
  return (
    <>
      <PageTitle>Projekt domu {projectName}</PageTitle>
      <div className="mt-2 flex flex-col gap-4 md:flex-row md:gap-12 lg:flex-col lg:gap-4">
        <div className="mt-3 flex flex-col gap-2">
          <DetailsTitle>Dane techniczne:</DetailsTitle>
          {technicalDetails.map(({ name, value }) => (
            <div key={name} className="flex items-center gap-1">
              <span className="text-xs xl:text-sm">{name}:</span>
              <span className="text-xs xl:text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <DetailsTitle>Wersje wykończenia:</DetailsTitle>
          {buildVersions.map(({ name, price }) => (
            <div key={name} className="flex items-center gap-1">
              <span className="text-xs xl:text-sm">{name}:</span>
              <span className="text-xs xl:text-sm font-medium">{`od ${price} + VAT 8%`}</span>
            </div>
          ))}
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-2 mt-4">
            {/* TODO: HIDE BUTTON WHEN REALIZATION IS NOT AVAILABLE */}
            <Button variant="outlined">Zobacz realizację</Button>
            <Button href="/kontakt">Skontaktuj się z nami</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
