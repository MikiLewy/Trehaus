import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import ErrorMessage from '../error-message/error-message';
import Label from '../label/label';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

const Input = ({ label, errorMessage, value, onChange, required, ...other }: Props) => {
  const mergedClasses = twMerge(
    'border text-sm outline-none focus:ring-1 rounded-lg block p-2.5  focus:ring-gray-300 focus:border-gray-300',
    errorMessage ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : '',
  );

  return (
    <div className="flex flex-col gap-1">
      <Label className={errorMessage ? 'text-red-700' : ''}>
        {label}
        {required ? '*' : ''}
      </Label>
      <input className={mergedClasses} required={required} value={value} onChange={onChange} {...other} />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </div>
  );
};

export default Input;
