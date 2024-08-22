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
import { PUBLIC_ROUTES } from '@/constants/routes';

const signinFormInitValues: SignInFormData = {
  identifier: '',
  password: '',
};

const SignInContent = () => {
  const {
    control,
    formState: { isDirty, errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    values: signinFormInitValues,
  });

  return (
    <form>
      <div className="pt-3 mb-8 flex flex-col gap-6">
        <Controller
          name="identifier"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field, fieldState: { error } }) => (
            <Input
              isRequired
              size="lg"
              key="email"
              label="Email or username"
              labelPlacement="outside"
              placeholder="Your username or email"
              isInvalid={!!errors.identifier}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              isInvalid={!!errors.password}
              errorMessage={error?.message}
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
          <Text as="p" size={TEXT_SIZE['md']}>
            Keep me logged in
          </Text>
        </Checkbox>
        <Link href={PUBLIC_ROUTES.FORGET_PASSWORD}>
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
        isDisabled={!isDirty}
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mb-6 mt-8"
      >
        <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
          Sign In
        </Text>
      </Button>
    </form>
  );
};

export default SignInContent;
