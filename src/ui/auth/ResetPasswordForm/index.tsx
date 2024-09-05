'use client';

import { Controller, useForm } from 'react-hook-form';

// Components
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Constants
import { MESSAGES, REGEX_PASSWORD } from '@/constants';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const resetPasswordInitValues: ResetPasswordFormData = {
  password: '',
  passwordConfirmation: '',
};

interface ResetPasswordFormProps {
  code: string;
}

const { PASSWORD } = MESSAGES;

const ResetPasswordForm = ({ code: _ }: ResetPasswordFormProps) => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ResetPasswordFormData>({
    mode: 'onBlur',
    values: resetPasswordInitValues,
  });

  const isDisabled = !isDirty;

  const resetPassword = async (_: ResetPasswordFormData) => {};

  return (
    <form onSubmit={handleSubmit(resetPassword)} className="w-full sm:w-96">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 pb-8">
          <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
            Reset your password
          </Text>
          <Text
            as="h2"
            size={TEXT_SIZE['md']}
            variant={TEXT_VARIANT.TERTIARY}
            className="leading-6"
          >
            Enter your new password to reset your password.
          </Text>
        </div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: PASSWORD.REQUIRED,
            pattern: {
              value: REGEX_PASSWORD,
              message: PASSWORD.REGEX_MISMATCH,
            },
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              isInvalid={invalid}
              errorMessage={error?.message}
              label="New Password"
              placeholder="New Password"
              {...field}
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          rules={{
            required: PASSWORD.REQUIRED,
            validate: (value) =>
              value === getValues('password') ? true : PASSWORD.MISMATCH,
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              isInvalid={invalid}
              errorMessage={error?.message}
              label="Confirm Password"
              placeholder="Confirm Password"
              {...field}
            />
          )}
        />
        <Button
          isDisabled={isDisabled}
          className="w-full py-7 mt-6"
          type="submit"
          data-testid="update-password-btn"
        >
          <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
            Update Password
          </Text>
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
