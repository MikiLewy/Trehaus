import { HTMLProps } from 'react';

import ErrorMessage from '../error-message/error-message';
import Label from '../label/label';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  labelClassName?: string;
}

const Checkbox = ({ labelClassName, label, onChange, value, errorMessage, ...other }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={onChange}
          value={value}
          name="bordered-checkbox"
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
          {...other}
        />
        <Label className={labelClassName}>{label}</Label>
      </div>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </div>
  );
};

export default Checkbox;
