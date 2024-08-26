'use client';

// Libs
import { cn } from '@nextui-org/theme';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  SortDescriptor,
} from '@nextui-org/table';
import Image from 'next/image';
import { Text } from '@/components';
import { Spinner } from '@nextui-org/spinner';
import { Progress } from '@nextui-org/progress';
import { Pagination } from '@nextui-org/pagination';

// Constants
import { USER_IMAGE } from '@/constants/images';

// Models
import { Contributor } from '@/models/Contributor';

// Types
import { TColumn } from '@/types/common';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Utils
import { formatShortDate } from '@/utils/format';
import { compareDate, compareString } from '@/utils/compare';

const columns: TColumn[] = [
  {
    key: 'fullName',
    label: 'Name',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  {
    key: 'template',
    label: 'Template',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  {
    key: 'rating',
    label: 'Rating',
    visibleOnMobile: true,
  },
  { key: 'createdAt', label: 'Date', allowsSorting: true },
];

const visibleOnMobileByKey: Record<string, boolean> = columns.reduce(
  (prev, { key, visibleOnMobile = false }) => ({
    ...prev,
    [key]: visibleOnMobile,
  }),
  {},
);

interface ContributorTableProps {
  data: Contributor[];
  pageCount: number;
  page: number;
}

const formatContributor = (item: Contributor, columnKey: keyof Contributor) => {
  const value = getKeyValue(item, columnKey);

  switch (columnKey) {
    case 'createdAt':
      return (
        <Text
          size={TEXT_SIZE.sm}
          className="font-bold"
          data-testid="table-cell-createdAt"
        >
          {formatShortDate(value as Date)}
        </Text>
      );

    case 'fullName':
      return (
        <div className="flex items-center gap-2">
          <Image
            src={getKeyValue(item, 'avatar') || USER_IMAGE.DEFAULT}
            alt={value}
            width={30}
            height={30}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <Text
              size={TEXT_SIZE.sm}
              as="b"
              className="font-bold"
              data-testid="table-cell-fullName"
            >
              {value}
            </Text>
            <Text
              size={TEXT_SIZE.xs}
              variant={TEXT_VARIANT.SECONDARY}
              className="lowercase"
              as="span"
            >{`@${getKeyValue(item, 'userName')}`}</Text>
          </div>
        </div>
      );

    case 'rating':
      return (
        <Progress
          aria-label="Rating"
          value={value}
          showValueLabel
          classNames={{
            track:
              'hidden sm:block bg-grey dark:bg-army-green [&>div]:dark:bg-purple-750',
            base: 'max-w-[200px]',
          }}
        />
      );

    default:
      return (
        <Text size={TEXT_SIZE.sm} className="font-bold">
          {value}
        </Text>
      );
  }
};

const ContributorTable = ({ data, pageCount, page }: ContributorTableProps) => {
  const [descriptor, setDescriptor] = useState<SortDescriptor>();
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const dataFormat = useMemo(
    () => data.map((item) => new Contributor(item)),
    [data],
  );

  const handleSort = (descriptor: SortDescriptor) => {
    setDescriptor(descriptor);

    const { column, direction } = descriptor;

    switch (column) {
      case 'fullName':
      case 'template':
        if (direction === 'ascending') {
          return dataFormat.sort((a, b) => compareString(a[column], b[column]));
        }

        return dataFormat.sort((a, b) => compareString(b[column], a[column]));

      case 'createdAt':
        if (direction === 'ascending')
          return dataFormat.sort((a, b) =>
            compareDate(a.createdAt, b.createdAt),
          );
        return dataFormat.sort((a, b) => compareDate(b.createdAt, a.createdAt));

      default:
        return data;
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [page]);

  const handleChangePage = (page: number) => {
    setIsLoading(true);
    if (page === 1) params.delete('page');
    else params.set('page', String(page));
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={descriptor}
      onSortChange={handleSort}
      bottomContent={
        pageCount > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pageCount}
              onChange={handleChangePage}
              data-testid="pagination"
              className="w-full max-w-[400px]"
              classNames={{ wrapper: 'max-w-full justify-center' }}
            />
          </div>
        ) : null
      }
      classNames={{
        wrapper: 'bg-transparent px-0 py-4 rounded-none overflow-visible',
      }}
    >
      <TableHeader>
        {columns.map(({ key, label, allowsSorting, visibleOnMobile }) => (
          <TableColumn
            key={key}
            data-testid={`table-header-${key}`}
            allowsSorting={allowsSorting}
            className={cn(
              'bg-transparent pb-2',
              visibleOnMobile ? '' : 'hidden sm:table-cell',
            )}
          >
            <Text
              variant={TEXT_VARIANT.SECONDARY}
              as="span"
              size={TEXT_SIZE.sm}
            >
              {label}
            </Text>
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        items={dataFormat}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." color="success" />}
        emptyContent="No Contributors to display."
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={cn(
                  'pt-[15px]',
                  visibleOnMobileByKey[columnKey] ? '' : 'hidden sm:table-cell',
                )}
              >
                {formatContributor(
                  new Contributor(item),
                  columnKey as keyof Contributor,
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ContributorTable;
