import { forwardRef, HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import ErrorMessage from '../error-message/error-message';
import Label from '../label/label';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  required?: boolean;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, id, errorMessage, value, onChange, required, className, ...other },
    ref,
  ) => {
    const mergedClasses = twMerge(
      'border border-gray-300 text-sm outline-none focus:ring-1 rounded-lg block p-2.5  focus:ring-gray-300 focus:border-gray-300',
      errorMessage
        ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
        : '',
      className,
    );

    return (
      <div className="flex flex-col gap-1">
        <Label htmlFor={id} className={errorMessage ? 'text-red-700' : ''}>
          {label}
          {required ? '*' : ''}
        </Label>
        <textarea
          rows={4}
          id={id}
          className={mergedClasses}
          required={required}
          value={value}
          onChange={onChange}
          ref={ref}
          {...other}
        />
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
