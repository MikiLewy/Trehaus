import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageTitle = ({ children }: Props) => {
  return (
    <h4 className="text-2xl lg:text-3xl xl:text-4xl font-medium">{children}</h4>
  );
};

export default PageTitle;
