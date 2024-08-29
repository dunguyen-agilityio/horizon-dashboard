// Components
import Image from 'next/image';
import { Link } from '@nextui-org/link';
import { ToggleTheme, Text } from '@/components';

// Constants
import { FOOTER_ROUTES } from '@/constants/routes';

// Types
import { TEXT_SIZE } from '@/types/text';

const AuthenticateLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex bg-white dark:bg-indigo-dark px-6 sm:p-0 h-screen">
    <main className="flex-1 flex justify-center py-10">
      <div className="w-fit flex flex-col justify-between">
        {children}
        <div className="h-[60px] flex items-center">
          <Text className="text-secondary text-center" size={TEXT_SIZE.sm}>
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
          </Text>
        </div>
      </div>
    </main>

    <div className="w-1/2 2xl:w-2/5 h-screen relative hidden xl:flex justify-center items-end">
      <Image
        src="/wallpaper.webp"
        alt="wall-paper"
        fill
        sizes="(min-width: 1040px) 100vw, 0px"
        style={{
          objectFit: 'fill',
        }}
      />

      <footer className="pb-12 flex gap-11">
        {FOOTER_ROUTES.map((footer) => (
          <Link href={footer.href} key={`${footer.title}`}>
            <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
              {footer.title}
            </Text>
          </Link>
        ))}
      </footer>
    </div>
    <ToggleTheme
      variant="secondary"
      className="absolute bottom-0 xl:bottom-7 right-7"
    />
  </div>
);

export default AuthenticateLayout;
