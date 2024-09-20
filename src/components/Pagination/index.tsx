'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { Pagination as PaginationNextUI } from '@nextui-org/pagination';

// Types
import { TVariant } from '@/types/common';

// Constants
import { PARAMS } from '@/constants/params';

interface IPaginationProps {
  color?: TVariant;
  currentPage: number;
  pageCount: number;
}

const Pagination = ({
  color = 'primary',
  currentPage,
  pageCount,
}: IPaginationProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleChangePage = (page: number) => {
    params.set(PARAMS.PAGE, String(page));
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <PaginationNextUI
      isCompact
      showControls
      showShadow
      color={color}
      page={currentPage}
      total={pageCount}
      onChange={handleChangePage}
      data-testid="pagination"
      classNames={{ wrapper: 'max-w-full justify-center' }}
    />
  );
};

export default Pagination;
