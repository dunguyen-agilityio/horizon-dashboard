'use client';

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/input';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';
import type { SignUpFormData } from '@/types/auth';

// Regex
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/constants/regex';

// Constants
import { AUTH_ROUTES } from '@/constants';

// Utils
import { validateConfirmPassword } from '@/utils/validation';

const signUpFormInitValues: SignUpFormData = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpContent = () => {
  const {
    watch,
    control,
    formState: { isDirty },
    handleSubmit,
  } = useForm<SignUpFormData>({
    mode: 'onBlur',
    values: signUpFormInitValues,
  });

  const isDisabled = !isDirty;
  const passwordValue = watch('password');

  const { replace } = useRouter();

  const handleSignUp = async () => {
    replace(AUTH_ROUTES.SIGN_IN);
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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
          rules={{
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Username must be at least 6 characters ',
            },
          }}
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
            required: 'This field is required',
            validate: (confirmPassword: string) =>
              validateConfirmPassword(passwordValue, confirmPassword),
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              label="Confirm Password"
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
