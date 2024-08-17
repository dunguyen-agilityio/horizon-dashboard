// Components
import Link from 'next/link';
import { Text } from '@/components';

// Fonts
import { Poppins } from 'next/font/google';

// Types
import { TEXT_SIZE } from '@/types/text';

// Utils
import { cn } from '@nextui-org/theme';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Brand = () => (
  <Link href="/">
    <div className="flex gap-1 justify-center py-12 px-6 lg:p-14 lg:pb-12 bg-white dark:bg-indigo">
      <Text
        as="h1"
        size={TEXT_SIZE.xl}
        className={cn(
          poppins.className,
          'leading-8 font-poppins font-extrabold',
        )}
      >
        HORIZON
      </Text>
      <Text
        as="h1"
        size={TEXT_SIZE.xl}
        className={cn(poppins.className, 'leading-8 font-poppins font-normal')}
      >
        FREE
      </Text>
    </div>
  </Link>
);

export default Brand;
