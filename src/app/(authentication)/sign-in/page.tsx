'use client';

import { useCallback, useState } from 'react';

// Components
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { Divider } from '@nextui-org/divider';
import { Checkbox } from '@nextui-org/checkbox';
import { BoxIcon, Button, ToggleTheme, Text } from '@/components';

// Icons
import { ArrowRight, EyeSlashFilled, EyeFilled } from '@/icons';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(
    () => setIsVisible(!isVisible),
    [isVisible],
  );

  return (
    <div className="flex flex-1 justify-center">
      <div className="h-full py-10 flex flex-col">
        {/* Navigate Back */}
        <div className="flex justify-between">
          <Link href="/dashboard">
            <BoxIcon icon={<ArrowRight />} customClass="fill-secondary" />

            <Text variant={TEXT_VARIANT.SECONDARY} className="ml-1">
              Back to dashboard
            </Text>
          </Link>
          <div className="2xl:hidden">
            <ToggleTheme variant="primary" />
          </div>
        </div>

        {/* Sign In Content */}
        <div className="mt-14 mb-36 sm:mt-[200px] sm:mb-[300px] 2xl:my-[250px]">
          <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
            Sign In
          </Text>

          <Text as="h2" size={TEXT_SIZE['md']} variant={TEXT_VARIANT.TERTIARY}>
            Enter your email and password to sign in!
          </Text>
          <Divider className="bg-amber-450 dark:bg-slate-700 mt-6 mb-3" />

          {/* Form Sign In */}
          <div className="pt-3 mb-8 flex flex-col gap-6">
            <Input
              isRequired
              size="lg"
              key="email"
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="mail@simmmple.com"
              className="border-1 rounded-xl border-amber-450 dark:border-slate-700"
              isInvalid={false}
              errorMessage=""
            />
            <Input
              isRequired
              size="lg"
              key="password"
              label="Password"
              type={isVisible ? 'text' : 'password'}
              labelPlacement="outside"
              placeholder="Min. 8 characters"
              className="border-1 rounded-xl border-amber-450 dark:border-slate-700"
              isInvalid={false}
              errorMessage=""
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <BoxIcon
                      icon={<EyeFilled />}
                      customClass="fill-secondary"
                    />
                  ) : (
                    <BoxIcon
                      icon={<EyeSlashFilled />}
                      customClass="fill-secondary"
                    />
                  )}
                </button>
              }
            />
          </div>

          <div className="flex justify-between">
            <Checkbox defaultSelected radius="sm" className="fill-blue-450">
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

          <Button className="bg-blue-450 dark:bg-purple-750 w-full py-7 mb-6 mt-8">
            <Text
              size={TEXT_SIZE.sm}
              className="text-white font-bold leading-4"
            >
              Sign In
            </Text>
          </Button>
          <div className="flex justify-center sm:justify-start">
            <div className="flex gap-1">
              <Text
                size={TEXT_SIZE.sm}
                variant={TEXT_VARIANT.TERTIARY}
                className="font-normal leading-6"
              >
                Not registered yet?
              </Text>
              <Link href="/create-account">
                <Text
                  size={TEXT_SIZE.sm}
                  variant={TEXT_VARIANT.QUATERNARY}
                  className="font-bold leading-6"
                >
                  Create an Account
                </Text>
              </Link>
            </div>
          </div>
        </div>

        <Text className="text-secondary text-center" size={TEXT_SIZE.sm}>
          © 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
        </Text>
      </div>
    </div>
  );
};

export default SignInPage;
