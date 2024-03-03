import { ButtonSize, ButtonVariant } from '@/components/atoms/button/button';

export const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'contained':
      return `btn-contained`;
    case 'outlined':
      return `btn-outlined`;
    default:
      return 'btn-contained';
  }
};

export const getSize = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return 'btn-sm';
    case 'md':
      return 'btn-md';
    case 'lg':
      return 'btn-lg';
    default:
      return 'btn-md';
  }
};
