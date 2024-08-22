import { Controller, useForm } from 'react-hook-form';

// Components
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/checkbox';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import type { SignInForm } from '@/types/authentication';

const SignInContent = () => {
  const signinFormInitValues: SignInForm = {
    identifier: '',
    password: '',
  };

  const {
    register,
    control,
    formState: { isDirty, errors },
  } = useForm<SignInForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: signinFormInitValues,
  });

  return (
    <form>
      <div className="pt-3 mb-8 flex flex-col gap-6">
        <Controller
          control={control}
          {...register('identifier', { required: 'Email is required' })}
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <Input
              isRequired
              size="lg"
              key="email"
              type="email"
              label="Email or username"
              labelPlacement="outside"
              placeholder="Your username or email"
              value={value}
              onChange={(value) => {
                onChange(value);
              }}
              isInvalid={!!errors.identifier}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
        <Controller
          control={control}
          {...register('password', { required: 'Password is required' })}
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
