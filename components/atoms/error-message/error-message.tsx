import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return (
    <span role="alert" className="text-sm text-red-600 dark:text-red-500">
      {children}
    </span>
  );
};

export default ErrorMessage;
