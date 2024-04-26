import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DetailsTitle = ({ children }: Props) => {
  return <h4 className="text-sm xl:text-lg font-medium">{children}</h4>;
};

export default DetailsTitle;
