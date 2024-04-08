'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/atoms/button/button';
import Checkbox from '@/components/atoms/checkbox/checkbox';
import Input from '@/components/atoms/input/input';
import Textarea from '@/components/atoms/textarea/textarea';
import { PRIVACY_POLICY_URL } from '@/constants/privacy-policy';

interface FormValues {
  email: string;
  message: string;
  agreement: boolean;
}

const defaultValues: FormValues = {
  email: '',
  message: '',
  agreement: false,
};

const ContactForm = () => {
  const validationSchema = z.object({
    email: z
      .string()
      .email({ message: 'Niepoprawny adres email' })
      .min(1, { message: 'Niepoprawny adres email' }),
    message: z.string().min(1, { message: 'To pole jest wymagane' }),
    agreement: z.boolean().refine(value => value === true, {
      message: 'To pole jest wymagane',
    }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    // TODO ADD INTEGRATION TO EMAIL PROVIDER
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 max-w-[550px]">
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
            onBlur={onBlur}
            ref={ref}
            required
            aria-invalid={errors.message ? 'true' : 'false'}
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
              label="Wiadomość"
              labelClassName="text-xs text-gray-500"
              onChange={onChange}
              checked={value}
              name={name}
              id={name}
              onBlur={onBlur}
              aria-invalid={errors.agreement ? 'true' : 'false'}
              checkboxLabel={
                <p>
                  Zgadzam się na przetwarzanie moich danych. Administratorem
                  Twoich danych osobowych jest Trehaus. Twoje dane będą
                  przetwarzane w celu obsługi Twojego zapytania. Posiadasz prawo
                  dostępu do danych, sprostowania, usunięcia, ograniczenia oraz
                  sprzeciwu, jak również złożenia skargi do PUODO. Więcej
                  informacji w{' '}
                  <Link
                    href={PRIVACY_POLICY_URL}
                    target="_blank"
                    className="underline">
                    Polityka prywatności
                  </Link>
                  .
                </p>
              }
              ref={ref}
              errorMessage={error?.message}
            />
          </div>
        )}
      />
      <Button
        className="self-start"
        disabled={!isValid}
        loading={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}>
        Wyślij
      </Button>
    </div>
  );
};

export default ContactForm;
