import { ButtonVariant } from '@/components/atoms/button/button';

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
