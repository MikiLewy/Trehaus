'use client';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/atoms/button/button';
import Checkbox from '@/components/atoms/checkbox/checkbox';
import ErrorMessage from '@/components/atoms/error-message/error-message';
import Input from '@/components/atoms/input/input';
import Textarea from '@/components/atoms/textarea/textarea';
import { useSubmitContactForm } from '@/features/contact/hooks/use-submit-contact-form';

interface FormValues {
  email: string;
  message: string;
  agreement: boolean;
  hCaptchaResponse: string;
}

const defaultValues: FormValues = {
  email: '',
  message: '',
  agreement: false,
  hCaptchaResponse: '',
};

const ContactForm = () => {
  const captchaRef = useRef<HCaptcha | null>(null);

  const validationSchema = z.object({
    email: z
      .string()
      .email({ message: 'Niepoprawny adres email' })
      .min(1, { message: 'Niepoprawny adres email' }),
    message: z.string().min(1, { message: 'To pole jest wymagane' }),
    agreement: z.boolean().refine(value => value === true, {
      message: 'To pole jest wymagane',
    }),
    hCaptchaResponse: z.string().min(1, { message: 'To pole jest wymagane' }),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(validationSchema),
  });

  const { mutate: submitContactForm, isPending: isSubmittingContactForm } =
    useSubmitContactForm(() => {
      reset(defaultValues);
      captchaRef.current?.resetCaptcha();
    });

  const onSubmit = (data: FormValues) => {
    submitContactForm({
      email: data.email,
      message: data.message,
      hCaptchaResponse: data.hCaptchaResponse,
    });
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 max-w-[550px]">
      <Controller
        name="email"
        control={control}
        render={({
          field: { name, onBlur, onChange, ref, value },
          fieldState: { error },
        }) => (
          <Input
            label="Email"
            onChange={onChange}
            value={value}
            name={name}
            id={name}
            onBlur={onBlur}
            ref={ref}
            required
            type="text"
            aria-labelledby="Email"
            aria-invalid={errors.email ? 'true' : 'false'}
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({
          field: { name, onBlur, onChange, ref, value },
          fieldState: { error },
        }) => (
          <Textarea
            label="Wiadomość"
            onChange={onChange}
            value={value}
            name={name}
            id={name}
            type="text"
            onBlur={onBlur}
            ref={ref}
            required
            className="max-h-[500px]"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-labelledby="Wiadomość"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        name="agreement"
        control={control}
        render={({
          field: { name, onBlur, onChange, ref, value },
          fieldState: { error },
        }) => (
          <div className="mt-2">
            <Checkbox
              label="Zgoda na przetwarzanie danych osobowych"
              labelClassName="text-xs text-gray-500"
              onChange={onChange}
              checked={value}
              name={name}
              id={name}
              onBlur={onBlur}
              aria-labelledby="Zgoda na przetwarzanie danych osobowych"
              aria-invalid={errors.agreement ? 'true' : 'false'}
              ref={ref}
              checkboxLabel={
                <p>
                  Zgadzam się na przetwarzanie moich danych. Administratorem
                  Twoich danych osobowych jest Trehaus. Twoje dane będą
                  przetwarzane w celu obsługi Twojego zapytania. Posiadasz prawo
                  dostępu do danych, sprostowania, usunięcia, ograniczenia oraz
                  sprzeciwu, jak również złożenia skargi do PUODO. Więcej
                  informacji w{' '}
                  <Link
                    href={'/polityka_prywatności.pdf'}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline">
                    Polityka prywatności
                  </Link>
                  .
                </p>
              }
              errorMessage={error?.message}
            />
          </div>
        )}
      />
      <Controller
        name="hCaptchaResponse"
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <div className="max-w-52">
            <HCaptcha
              sitekey={
                process.env.NEXT_PUBLIC_WEB3_FORMS_HCAPTCHA_SITE_KEY ?? ''
              }
              reCaptchaCompat={false}
              onVerify={onChange}
              ref={captchaRef}
              onExpire={() => {
                reset(defaultValues);
              }}
            />
            {error?.message ? (
              <ErrorMessage>{error?.message}</ErrorMessage>
            ) : null}
          </div>
        )}
      />
      <Button
        className="self-start mt-5"
        disabled={!isValid}
        loading={isSubmittingContactForm}
        onClick={handleSubmit(onSubmit)}>
        Wyślij
      </Button>
    </div>
  );
};

export default ContactForm;
