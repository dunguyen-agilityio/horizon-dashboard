// Components
import { Divider } from '@nextui-org/divider';
import { Text } from '@/components';
import SignInContent from '@/ui/auth/SignInContent';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SignInPage = () => (
  <div className="pt-14 pb-36 sm:pt-[200px] sm:pb-[290px] 2xl:pt-[250px]">
    <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
      Sign In
    </Text>
    <Text
      as="h2"
      size={TEXT_SIZE['md']}
      variant={TEXT_VARIANT.TERTIARY}
      className="leading-6"
    >
      Enter your username or email with password to sign in!
    </Text>
    <Divider className="bg-amber-450 dark:bg-slate-700 mt-6 mb-3" />
    <SignInContent />
  </div>
);

export default SignInPage;
