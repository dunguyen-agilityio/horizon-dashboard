// Components
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
import { BoxIcon, ToggleTheme, Text } from '@/components';
import SignInContent from '@/ui/auth/SignInContent';

// Icons
import { ArrowRight } from '@/icons';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SignInPage = () => (
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
      <div className="mt-14 mb-36 sm:mt-[200px] sm:mb-[290px] 2xl:mt-[250px]">
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

      <Text className="text-secondary text-center" size={TEXT_SIZE.sm}>
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
      </Text>
    </div>
  </div>
);

export default SignInPage;
