import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DetailsTitle = ({ children }: Props) => {
  return <h4 className="text-sm xl:text-base font-medium">{children}</h4>;
};

export default DetailsTitle;
