import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/checkbox';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import type { UserSignin } from '@/types/authentication';

// Utils
import { isEnableSubmitButton } from '@/utils/validation';

// Schema
import { UserSigninFormDataSchema } from '@/constants/schema';
import { useMemo } from 'react';

const REQUIRED_FIELDS = ['email', 'password'];

const SignInContent = () => {
  const signinFormInitValues: UserSignin = {
    email: '',
    password: '',
  };

  const {
    control,
    formState: { dirtyFields, errors },
  } = useForm<UserSignin>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: signinFormInitValues,
    resolver: zodResolver(UserSigninFormDataSchema),
  });

  const dirtyItems = Object.keys(dirtyFields);
  const isDisabled = useMemo(
    () => !isEnableSubmitButton(REQUIRED_FIELDS, dirtyItems, errors),
    [dirtyItems, errors],
  );

  return (
    <>
      <div className="pt-3 mb-8 flex flex-col gap-6">
        <Controller
          name="email"
          control={control}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <Input
              isRequired
              size="lg"
              key="email"
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="mail@simmmple.com"
              value={value}
              onChange={(value) => {
                onChange(value);
              }}
              isInvalid={!!errors.email}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <InputPassword
              value={value}
              onChange={(value) => {
                onChange(value);
              }}
              isInvalid={!!errors.password}
              errorMessage={error?.message}
              {...rest}
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
        <Link href="/forget-password">
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
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mb-6 mt-8"
      >
        <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
          Sign In
        </Text>
      </Button>
    </>
  );
};

export default SignInContent;
