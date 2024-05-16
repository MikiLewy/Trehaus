import { ReactNode } from 'react';

import Typography from '../typography/typography';

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: Props) => {
  return (
    <Typography variant="h2" className={className}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
