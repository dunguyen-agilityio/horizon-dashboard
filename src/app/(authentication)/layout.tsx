// Components
import Image from 'next/image';
import { Link } from '@nextui-org/link';
import { ToggleTheme, Text } from '@/components';

// Constants
import { FOOTER_ROUTES } from '@/constants/routes';

// Types
import { TEXT_SIZE } from '@/types/text';

const AuthenticateLayout = ({ children }: React.PropsWithChildren) => (
  <main className="flex bg-white dark:bg-indigo-dark px-6 sm:p-0 relative">
    {children}

    {/* Wallpaper */}
    <div className="hidden 2xl:block">
      <div className="w-[965px] h-[1152px] relative">
        <Image
          src="/wallpaper.png"
          alt="wall-paper"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
        <div className="bottom-7 right-7 absolute">
          <ToggleTheme variant="secondary" />
        </div>
        <div className="absolute bottom-12 left-72">
          <footer className="flex justify-between">
            <div className="flex gap-11">
              {FOOTER_ROUTES.map((footer) => (
                <Link href={footer.href} key={`${footer.title}`}>
                  <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                    {footer.title}
                  </Text>
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  </main>
);

export default AuthenticateLayout;
