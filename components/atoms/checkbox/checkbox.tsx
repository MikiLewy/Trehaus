import { forwardRef, HTMLProps, ReactNode } from 'react';

import ErrorMessage from '../error-message/error-message';
import Label from '../label/label';

interface Props extends HTMLProps<HTMLInputElement> {
  checkboxLabel: ReactNode;
  checked: boolean;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      labelClassName,
      checkboxLabel,
      onChange,
      checked,
      id,
      errorMessage,
      ...other
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex justify-start items-start gap-2">
          <input
            type="checkbox"
            onChange={onChange}
            ref={ref}
            checked={checked}
            id={id}
            name="bordered-checkbox"
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
            {...other}
          />
          <Label htmlFor={id} className={labelClassName}>
            {checkboxLabel}
          </Label>
        </div>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
