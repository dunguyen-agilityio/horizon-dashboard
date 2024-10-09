'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/input';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';
import type { SignUpFormData, SignUpPayload } from '@/types/auth';

// Regex
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/constants/regex';

// Constants
import { AUTH_ROUTES } from '@/constants';

// Utils
import {
  emailRules,
  identifierRules,
  passwordRules,
  validateConfirmPassword,
} from '@/utils/validation';

// Actions
import { handleSignUp } from '@/actions/auth';

// Hooks
import useToast from '@/contexts/toast';

// Style
import { STYLE_INPUT } from '@/styles/input';

const signUpFormInitValues: SignUpFormData = {
  username: '',
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

  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = !isDirty;
  const passwordValue = watch('password');

  const { replace } = useRouter();
  const { showToast } = useToast();

  const signUp = async ({ email, password, username }: SignUpPayload) => {
    setIsLoading(true);
    const { error } = await handleSignUp({ email, password, username });

    if (error) {
      showToast({
        title: 'Failed',
        message: error.message,
        type: 'error',
        timeOut: 5000,
      });
      setIsLoading(false);
      return;
    }

    replace(AUTH_ROUTES.SIGN_IN);
  };

  return (
    <form onSubmit={handleSubmit(signUp)} className="relative">
      <div className="pt-3 flex flex-col gap-6">
        <Controller
          name="email"
          control={control}
          rules={emailRules(REGEX_EMAIL)}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              isRequired
              size="lg"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              isInvalid={invalid}
              classNames={STYLE_INPUT}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          rules={identifierRules}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              isRequired
              size="lg"
              label="User name"
              labelPlacement="outside"
              classNames={STYLE_INPUT}
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
          rules={passwordRules(REGEX_PASSWORD)}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              isInvalid={invalid}
              classNames={STYLE_INPUT}
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
              classNames={STYLE_INPUT}
              errorMessage={error?.message}
              placeholder="Enter password confirm"
              {...field}
            />
          )}
        />
      </div>
      <Button
        isDisabled={isDisabled}
        isLoading={isLoading}
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mt-10"
        type="submit"
        data-testid="signup-btn"
      >
        {!isLoading && (
          <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
            Sign Up
          </Text>
        )}
      </Button>
      {isLoading && <div className="absolute inset-0" />}
    </form>
  );
};

export default SignUpContent;
