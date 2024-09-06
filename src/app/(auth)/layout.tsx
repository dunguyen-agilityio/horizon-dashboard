// Components
import Image from 'next/image';
import Logo from '@/components/Logo';
import { Link } from '@nextui-org/link';
import { ToggleTheme, Text } from '@/components';
import BackNavigation from '@/ui/auth/BackNavigation';

// Constants
import { Wallpaper } from '@/constants';
import { FOOTER_ROUTES } from '@/constants/routes';

// Types
import { TEXT_SIZE } from '@/types/text';

const AuthenticateLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex bg-white dark:bg-indigo-dark px-4 sm:p-0 h-screen">
    <main className="flex-1 flex justify-center py-10">
      <div className="w-fit flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <BackNavigation />
          <ToggleTheme variant="primary" className="xl:hidden" />
        </div>
        {children}
        <div className="h-[60px] flex items-center">
          <Text className="text-secondary text-center" size={TEXT_SIZE.sm}>
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
          </Text>
        </div>
      </div>
    </main>

    <div className="w-1/2 2xl:w-2/5 h-screen relative hidden xl:flex justify-center items-end pb-10">
      <Image
        src={Wallpaper}
        alt="wall-paper"
        fill
        sizes="100vw"
        style={{
          objectFit: 'fill',
        }}
      />
      <div className="absolute inset-0 flex justify-center items-center -translate-y-[5%]">
        <Logo />
      </div>

      <footer className="absolute right-0 left-0 bottom-7 flex justify-center h-[60px]">
        <nav className="flex gap-11">
          {FOOTER_ROUTES.map((footer) => (
            <Link href={footer.href} key={`${footer.title}`}>
              <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                {footer.title}
              </Text>
            </Link>
          ))}
        </nav>
      </footer>
    </div>
    <div className="absolute hidden xl:block bottom-7 right-7">
      <ToggleTheme variant="secondary" />
    </div>
  </div>
);

export default AuthenticateLayout;
