import api from '../clients/api';

export const submitContactForm = async (
  email: string,
  message: string,
): Promise<void> => {
  const access_key = process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY;

  await api.post(
    '/submit',
    JSON.stringify({ email, message, access_key }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
};