'use client';

import { Controller, useForm } from 'react-hook-form';

// Components
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/checkbox';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import type { SignInFormData } from '@/types/auth';

// Routes
import { AUTH_ROUTES, PUBLIC_ROUTES } from '@/constants/routes';

// Actions
import { handleSignIn } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import useToast from '@/contexts/toast';
import { useState } from 'react';

// Style
import { STYLE_INPUT } from '@/styles/input';

// Constants
import { MESSAGES, REGEX_PASSWORD } from '@/constants';

// Utils
import { identifierRules, passwordRules } from '@/utils/validation';

const signinFormInitValues: SignInFormData = {
  identifier: '',
  password: '',
};

const SignInContent = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    values: signinFormInitValues,
  });

  const { replace } = useRouter();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = !isDirty;

  const signIn = async (data: SignInFormData) => {
    if (isDisabled) return;

    setIsLoading(true);
    const result = await handleSignIn(data);

    const hasError = !!result.error;

    const { ERROR, SUCCESS } = MESSAGES.SIGN_IN;
    const { TITLE, DESCRIPTION } = hasError ? ERROR : SUCCESS;

    showToast({
      type: hasError ? 'error' : 'success',
      title: TITLE,
      message: DESCRIPTION,
      timeOut: 3000,
    });

    if (hasError) {
      setIsLoading(false);
      return;
    }

    replace(PUBLIC_ROUTES.DASHBOARD);
  };

  return (
    <form onSubmit={handleSubmit(signIn)} className="relative">
      <div className="pt-3 mb-8 flex flex-col gap-6">
        <Controller
          name="identifier"
          control={control}
          rules={identifierRules}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              isRequired
              size="lg"
              label="Email or user name"
              labelPlacement="outside"
              placeholder="Your user name or email"
              isInvalid={invalid}
              errorMessage={error?.message}
              classNames={STYLE_INPUT}
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
              errorMessage={error?.message}
              classNames={STYLE_INPUT}
              {...field}
            />
          )}
        />
      </div>
      <div className="flex justify-between">
        <Checkbox
          aria-label="checkbox-keep-login"
          defaultSelected
          radius="sm"
          className="fill-blue-450"
        >
          <Text size={TEXT_SIZE['md']}>Keep me logged in</Text>
        </Checkbox>
        <Link href={AUTH_ROUTES.FORGET_PASSWORD}>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.QUATERNARY}
            className="pr-3"
          >
            Forget password?
          </Text>
        </Link>
      </div>
      <Button
        isDisabled={isDisabled}
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mb-4 mt-8"
        type="submit"
        data-testid="signin-btn"
        isLoading={isLoading}
      >
        {!isLoading && (
          <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
            Sign In
          </Text>
        )}
      </Button>
      <Text
        as="h2"
        size={TEXT_SIZE['md']}
        variant={TEXT_VARIANT.TERTIARY}
        className="leading-6 !text-primary dark:!text-white"
      >
        Don’t have an account yet?
        <Link
          href={AUTH_ROUTES.SIGN_UP}
          className="text-sm ml-1 text-blue-450 dark:text-purple-750 hover:cursor-pointer"
        >
          Sign Up Now
        </Link>
      </Text>
      {isLoading && <div className="absolute inset-0" />}
    </form>
  );
};

export default SignInContent;
