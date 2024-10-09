'use client';

// Libs
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Constants
import { PRIVATE_ROUTES } from '@/constants/routes';
import { PARAMS } from '@/constants/params';

// Types
import { TEXT_SIZE } from '@/types/text';
import { User } from '@/models/User';

// Components
import Notification from './Notification';
import ProfileDropDown from './ProfileDropDown';
import { ToggleTheme, Text, InputSearch, BoxIcon } from '@/components';

// Layouts
import MenuBar from '@/layouts/MenuBar';

// Icons
import { Heart } from '@/icons';

// Utils
import { debounce } from '@/utils/debounce';

// Mocks
import { MOCK_NOTIFIES } from '@/mocks/notify';

// Hooks
import useBreadcrumbs from '@/hooks/useBreadcrumbs';

interface HeaderProps {
  isAuthenticated: boolean;
  userData: User;
}

const breadcrumbStyle =
  'dark:[&_:is(span,a)]:text-white [&_*:is(span,a)]:text-foreground';

const Header = ({ isAuthenticated, userData }: HeaderProps) => {
  const { avatar, username = '' } = userData ?? {};

  const searchParams = useSearchParams();
  const { push } = useRouter();

  const pathname = usePathname();

  const breadcrumbs = useBreadcrumbs();

  const query = searchParams.get(PARAMS.SEARCH) ?? '';

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(PARAMS.SEARCH, value);
    } else {
      params.delete(PARAMS.SEARCH);
    }
    push(`${pathname}?${params.toString()}`);
  };

  const handleNavigateFavoritePage = () => push(PRIVATE_ROUTES.NFT_FAVORITES);

  return (
    <header className="sticky top-0 z-50 flex justify-between flex-col gap-4 sm:items-end sm:flex-row sm:gap-0 w-full xl:pl-2.5">
      <div className="flex flex-col gap-1 mr-2">
        {!!breadcrumbs.length && (
          <>
            <div className="flex justify-start w-1/2">
              <MenuBar isAuthenticated={isAuthenticated} />
            </div>
            <Breadcrumbs separator="/">
              <BreadcrumbItem className={breadcrumbStyle} isCurrent>
                Pages
              </BreadcrumbItem>
              {breadcrumbs.map(({ title, href }, index) => (
                <BreadcrumbItem
                  href={href}
                  isCurrent={index === breadcrumbs.length - 1}
                  className={breadcrumbStyle}
                  key={index}
                >
                  {title}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
            <Text size={TEXT_SIZE['2xl']} className="mt-1">
              {breadcrumbs[0].title}
            </Text>
          </>
        )}
      </div>
      <div className="h-fit p-[10px] bg-white dark:bg-indigo rounded-[30px] flex gap-6 items-center">
        <InputSearch
          key={`search-${query}`}
          onSearch={debounce(handleSearch)}
          defaultValue={query}
        />
        <div className="absolute top-0 right-0 xl:static flex gap-2 sm:gap-6 items-center">
          {isAuthenticated && <Notification notifies={MOCK_NOTIFIES} />}
          {isAuthenticated && (
            <BoxIcon
              onClick={handleNavigateFavoritePage}
              customClass="fill-secondary dark:fill-white rounded-full justify-center items-center pt-0.5 hover:bg-default-200"
              icon={<Heart />}
            />
          )}
          <ToggleTheme />
          {isAuthenticated && userData && (
            <ProfileDropDown avatar={avatar} username={username} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
