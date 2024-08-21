// Components
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/checkbox';
import { Button, InputPassword, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SignInContent = () => {
  return (
    <>
      <div className="pt-3 mb-8 flex flex-col gap-6">
        <Input
          isRequired
          size="lg"
          key="email"
          type="email"
          label="Email"
          labelPlacement="outside"
          placeholder="mail@simmmple.com"
        />
        <InputPassword />
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

      <Button className="bg-blue-450 dark:bg-purple-750 w-full py-7 mb-6 mt-8">
        <Text size={TEXT_SIZE.sm} className="text-white font-bold leading-4">
          Sign In
        </Text>
      </Button>
    </>
  );
};

export default SignInContent;
