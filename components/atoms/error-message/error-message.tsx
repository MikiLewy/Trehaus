import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className="text-sm text-red-600 dark:text-red-500">{children}</p>;
};

export default ErrorMessage;
