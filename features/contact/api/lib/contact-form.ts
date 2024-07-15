import api from '../clients/api';

export const submitContactForm = async (
  email: string,
  message: string,
  hCaptchaResponse: string,
): Promise<void> => {
  const access_key = process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY_PROD;

  await api.post(
    '/submit',
    JSON.stringify(
      { email, message, access_key, 'h-captcha-response': hCaptchaResponse },
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
};
