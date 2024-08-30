'use client';

import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/input';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';
import type { SignUpFormData } from '@/types/auth';

const signUpFormInitValues: SignUpFormData = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const REGEX_EMAIL = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

const REGEX_PASSWORD = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

const SignUpContent = () => {
  const {
    watch,
    control,
    formState: { isDirty },
  } = useForm<SignUpFormData>({
    mode: 'onBlur',
    values: signUpFormInitValues,
  });

  const isDisabled = !isDirty;

  //   const signIn = async (data: SignUpFormData) => {
  //     if (isDisabled) return;

  //     const result = await handleSignIn(data);

  //     if (result.error) {
  //       // Will handle show Toast message later
  //     } else {
  //       replace(PUBLIC_ROUTES.DASHBOARD);
  //     }
  //   };

  return (
    <form>
      <div className="pt-3 flex flex-col gap-6">
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'This field is required',
            pattern: {
              value: REGEX_EMAIL,
              message: 'Invalid email address',
            },
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              isRequired
              size="lg"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              isInvalid={invalid}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userName"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              isRequired
              size="lg"
              label="User name"
              labelPlacement="outside"
              placeholder="Enter your user name"
              isInvalid={invalid}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'This field is required',
            pattern: {
              value: REGEX_PASSWORD,
              message: 'Invalid password format',
            },
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              isInvalid={invalid}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Password is required',
            validate: (confirmPassword: string) => {
              if (watch('password') != confirmPassword) {
                return 'Your passwords do no match';
              }
            },
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              isInvalid={invalid}
              errorMessage={error?.message}
              placeholder="Enter password confirm"
              {...field}
            />
          )}
        />
      </div>
      <Button
        isDisabled={isDisabled}
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mt-10"
        type="submit"
        data-testid="signup-btn"
      >
        <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
          Sign Up
        </Text>
      </Button>
    </form>
  );
};

export default SignUpContent;
