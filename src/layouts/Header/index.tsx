'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Constants
import { ROUTES } from '@/constants/routes';
import { QUERY_KEY } from '@/constants/common';

// Types
import { TEXT_SIZE } from '@/types/text';

// Components
import Notification from './Notification';
import ProfileDropDown from './ProfileDropDown';
import { ToggleTheme, Text, InputSearch } from '@/components';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import MenuBar from '@/layouts/MenuBar';

// Utils
import { debounce } from '@/utils/debounce';

// Mocks
import { MOCK_NOTIFIES } from '@/mocks/notify';

const Header = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const { title, href } = ROUTES.find(({ href }) => href === pathname) || {};

  const query = searchParams.get(QUERY_KEY) ?? '';

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(QUERY_KEY, value);
    } else {
      params.delete(QUERY_KEY);
    }
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="relative flex justify-between flex-col gap-4 sm:items-end sm:flex-row sm:gap-0">
      <div className="flex flex-col gap-1 mr-2">
        {title && (
          <>
            <div className="flex justify-start w-1/2">
              <MenuBar />
            </div>
            <Breadcrumbs separator="/">
              <BreadcrumbItem className="dark:[&_span]:text-white" isCurrent>
                Pages
              </BreadcrumbItem>
              <BreadcrumbItem href={href} className="dark:[&_span]:text-white">
                {title}
              </BreadcrumbItem>
            </Breadcrumbs>
            <Text size={TEXT_SIZE['2xl']} className="mt-1">
              {title}
            </Text>
          </>
        )}
      </div>
      <div className="h-fit p-[10px] bg-white dark:bg-indigo rounded-[30px] flex gap-6 items-center">
        <InputSearch onSearch={debounce(handleSearch)} defaultValue={query} />
        <div className="absolute top-0 right-0 xl:static flex gap-2 sm:gap-6 items-center">
          <Notification notifies={MOCK_NOTIFIES} />
          <ToggleTheme />
          <ProfileDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
