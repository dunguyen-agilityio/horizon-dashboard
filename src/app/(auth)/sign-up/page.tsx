// Components
import { Text } from '@/components';
import SignUpContent from '@/ui/auth/SignUpContent';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Constant
import { SIGN_UP } from '@/constants/metadata';

export const metadata = SIGN_UP;

const SignUpPage = () => (
  <div>
    <div className="mb-4">
      <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
        Register your account
      </Text>
      <Text
        as="h2"
        size={TEXT_SIZE['md']}
        variant={TEXT_VARIANT.TERTIARY}
        className="leading-6 text-primary"
      >
        Join now to explore unique creations from artists worldwide!
      </Text>
    </div>

    <SignUpContent />
  </div>
);

export default SignUpPage;
