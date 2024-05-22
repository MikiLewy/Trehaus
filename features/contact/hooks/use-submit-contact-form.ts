import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { submitContactForm } from '../api/lib/contact-form';

export const useSubmitContactForm = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: ({ email, message }: { email: string; message: string }) =>
      submitContactForm(email, message),
    onSuccess: () => {
      toast.success('Wiadomość została wysłana pomyślnie');
      onSuccess?.();
    },
    onError: () => {
      toast.error('Podczas wysyłania wiadomości wystąpił błąd.');
    },
  });
};
