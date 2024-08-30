'use client';

import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/input';
import { Button, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Constants
import { MESSAGES, REGEX_EMAIL, STEP_KEY } from '@/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ResetPasswordFormData {
  email: string;
}

const resetPasswordInitValues: ResetPasswordFormData = {
  email: '',
};

const { EMAIL } = MESSAGES;

const ForgetPasswordForm = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const step = parseInt(params.get(STEP_KEY) ?? '1');

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isDirty },
  } = useForm<ResetPasswordFormData>({
    mode: 'onBlur',
    values: resetPasswordInitValues,
  });

  const isDisabled = !isDirty;

  const handleForgetPassword = async (_: ResetPasswordFormData) => {
    params.set(STEP_KEY, '2');
    push(`${pathname}?${params.toString()}`);
    // Todo: will implement later
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <form
            onSubmit={handleSubmit(handleForgetPassword)}
            className="flex flex-col gap-4"
            data-testid="forget-password-step1"
          >
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
                Enter your email address and we will send you instructions to
                reset your password.
              </Text>
            </div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: EMAIL.REQUIRED,
                pattern: {
                  value: REGEX_EMAIL,
                  message: EMAIL.REGEX_MISMATCH,
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

            <Button
              isDisabled={isDisabled}
              className="bg-blue-450 dark:bg-purple-750 w-full py-7 mt-6"
              type="submit"
              data-testid="continue-btn"
            >
              <Text
                size={TEXT_SIZE.md}
                className="text-white font-bold leading-4"
              >
                Continue
              </Text>
            </Button>
          </form>
        );
      default:
        return (
          <div
            className="flex flex-col gap-4"
            data-testid="forget-password-step2"
          >
            <div className="flex flex-col gap-2 pb-4">
              <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
                Check Your Email
              </Text>
              <Text
                as="h2"
                size={TEXT_SIZE['md']}
                variant={TEXT_VARIANT.TERTIARY}
                className="leading-6"
              >
                Please check the email address <b>{getValues('email')}</b> for
                instructions to reset your password.
              </Text>
            </div>
            <Button
              isDisabled={isDisabled}
              variant="ghost"
              className="w-full py-7 mt-6"
              type="submit"
              data-testid="signin-btn"
            >
              <Text
                size={TEXT_SIZE.md}
                variant={TEXT_VARIANT.SECONDARY}
                className="font-bold leading-4"
              >
                Resend email
              </Text>
            </Button>
          </div>
        );
    }
  };

  return <div className="w-full sm:w-96">{renderContent()}</div>;
};

export default ForgetPasswordForm;
