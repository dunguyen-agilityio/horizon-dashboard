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
import { Avatar } from '@nextui-org/avatar';
import { Text } from '@/components';
import { Spinner } from '@nextui-org/spinner';
import { Progress } from '@nextui-org/progress';
import { Pagination } from '@nextui-org/pagination';

// Models
import { Contributor, ContributorData } from '@/models/Contributor';

// Types
import { TColumn } from '@/types/common';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Utils
import { formatShortDate } from '@/utils/format';
import { formatContributorData } from '@/utils/contributor';
import { compareDate, compareString, compareNumber } from '@/utils/compare';

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
  { key: 'createdAt', label: 'Date', allowsSorting: true },
  {
    key: 'rating',
    label: 'Rating',
    visibleOnMobile: true,
    allowsSorting: true,
  },
];

const visibleOnMobileByKey: Record<string, boolean> = columns.reduce(
  (prev, { key, visibleOnMobile = false }) => ({
    ...prev,
    [key]: visibleOnMobile,
  }),
  {},
);

interface ContributorTableProps {
  data: ContributorData[];
  pageCount: number;
  page: number;
}

const formatContributor = (item: Contributor, columnKey: keyof Contributor) => {
  const value = getKeyValue(item, columnKey);

  if (value === undefined) return null;

  switch (columnKey) {
    case 'template':
      return (
        <Text size={TEXT_SIZE.sm} className="font-bold">
          {value}
        </Text>
      );

    case 'fullName':
      return (
        <div className="flex items-center gap-2">
          <Avatar
            src={getKeyValue(item, 'avatar')}
            alt={value}
            size="sm"
            className="rounded-full hidden xs:block"
          />
          <div className="flex flex-col">
            <Text
              as="b"
              className="font-bold text-sm min-w-[100px] xs:min-w-full"
              data-testid="table-cell-fullName"
            >
              {value}
            </Text>
            <Text
              variant={TEXT_VARIANT.SECONDARY}
              className="lowercase text-sm hidden xs:inline-block"
              as="span"
            >{`@${getKeyValue(item, 'username')}`}</Text>
          </div>
        </div>
      );

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

    default:
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
  }
};

const ContributorTable = ({ data, pageCount, page }: ContributorTableProps) => {
  const [descriptor, setDescriptor] = useState<SortDescriptor>();
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const dataFormat = useMemo(() => {
    let format: Contributor[] = [];

    data.forEach((item) => {
      format = [...format, ...formatContributorData(item)];
    });

    return format;
  }, [data]);

  const handleSort = (descriptor: SortDescriptor) => {
    setDescriptor(descriptor);

    const { column, direction } = descriptor;

    switch (column) {
      case 'fullName':
        if (direction === 'ascending')
          return dataFormat.sort((a, b) =>
            compareString(a.fullName, b.fullName),
          );
        return dataFormat.sort((a, b) => compareString(b.fullName, a.fullName));

      case 'rating':
        if (direction === 'ascending')
          return dataFormat.sort((a, b) => compareNumber(a.rating, b.rating));
        return dataFormat.sort((a, b) => compareNumber(b.rating, a.rating));

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

  const handleChangePage = (page: number) => {
    setIsLoading(true);
    params.set('page', String(page));
    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [page]);

  return (
    <Table
      aria-label="contributors table"
      sortDescriptor={descriptor}
      onSortChange={handleSort}
      bottomContent={
        pageCount > 0 && (
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
              classNames={{ wrapper: 'max-w-full justify-center' }}
            />
          </div>
        )
      }
      classNames={{
        wrapper: 'bg-white dark:bg-indigo rounded-md overflow-hidden px-0 py-4',
      }}
    >
      <TableHeader>
        {columns.map(({ key, label, allowsSorting, visibleOnMobile }) => (
          <TableColumn
            key={key}
            data-testid={`table-header-${key}`}
            allowsSorting={allowsSorting}
            className={cn(
              'bg-transparent pb-2 pl-4',
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
        loadingContent={<Spinner label="Loading..." color="primary" />}
        emptyContent="No Contributors to display."
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={cn(
                  'pt-[15px] w-1/4 pl-4',
                  visibleOnMobileByKey[columnKey] ? '' : 'hidden sm:table-cell',
                )}
              >
                {formatContributor(item, columnKey as keyof Contributor)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ContributorTable;
