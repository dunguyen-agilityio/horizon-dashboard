'use client';

// Libs
import { cn } from '@nextui-org/theme';
import { useMemo, useState } from 'react';

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
import { Text } from '@/components';
import { Avatar } from '@nextui-org/avatar';
import { Progress } from '@nextui-org/progress';
import Pagination from '@/components/Pagination';

// Models
import { ContributorData, ContributorResponse } from '@/types/contributor';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Constants
import { SORT_TYPES } from '@/constants/sort';
import {
  CONTRIBUTOR_COLUMN,
  CONTRIBUTOR_HEADER,
} from '@/constants/tableColumns';

// Utils
import { formatShortDate } from '@/utils/format';
import { mapContributorsData } from '@/utils/contributor';
import { compareDate, compareString, compareNumber } from '@/utils/compare';

// Models
import { TImage } from '@/models/Image';
import { StrapiResponse } from '@/types/strapi';

const visibleOnMobileByKey: Record<string, boolean> = CONTRIBUTOR_COLUMN.reduce(
  (prev, { key, visibleOnMobile = false }) => ({
    ...prev,
    [key]: visibleOnMobile,
  }),
  {},
);

interface ContributorTableProps {
  data: StrapiResponse<ContributorResponse>[];
  pageCount: number;
  page: number;
}

const formatContributor = (
  item: ContributorData,
  columnKey: keyof ContributorData,
) => {
  const value = getKeyValue(item, columnKey);

  if (value === undefined) return null;

  switch (columnKey) {
    case CONTRIBUTOR_HEADER.TEMPLATE:
      return (
        <Text size={TEXT_SIZE.sm} className="font-bold">
          {value}
        </Text>
      );

    case CONTRIBUTOR_HEADER.FULL_NAME:
      return (
        <div className="flex items-center gap-2">
          <Avatar
            src={(getKeyValue(item, 'avatar') as TImage)?.url}
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

    case CONTRIBUTOR_HEADER.CREATE_AT:
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

  const dataFormat = useMemo(() => {
    let format: ContributorData[] = [];

    data.forEach((item) => {
      format = [...format, ...mapContributorsData(item)];
    });

    return format;
  }, [data]);

  const handleSort = (descriptor: SortDescriptor) => {
    setDescriptor(descriptor);

    const { column, direction } = descriptor;

    switch (column) {
      case CONTRIBUTOR_HEADER.FULL_NAME:
        if (direction === SORT_TYPES.ASCENDING)
          return dataFormat.sort((a, b) =>
            compareString(a.fullName, b.fullName),
          );
        return dataFormat.sort((a, b) => compareString(b.fullName, a.fullName));

      case CONTRIBUTOR_HEADER.TEMPLATE:
        if (direction === SORT_TYPES.ASCENDING)
          return dataFormat.sort((a, b) =>
            compareString(a.template, b.template),
          );
        return dataFormat.sort((a, b) => compareString(b.template, a.template));

      case CONTRIBUTOR_HEADER.RATING:
        if (direction === SORT_TYPES.ASCENDING)
          return dataFormat.sort((a, b) => compareNumber(a.rating, b.rating));
        return dataFormat.sort((a, b) => compareNumber(b.rating, a.rating));

      case CONTRIBUTOR_HEADER.CREATE_AT:
        if (direction === SORT_TYPES.ASCENDING)
          return dataFormat.sort((a, b) =>
            compareDate(a.createdAt, b.createdAt),
          );
        return dataFormat.sort((a, b) => compareDate(b.createdAt, a.createdAt));

      default:
        return data;
    }
  };

  return (
    <Table
      aria-label="contributors table"
      sortDescriptor={descriptor}
      onSortChange={handleSort}
      bottomContent={
        pageCount > 0 && (
          <div className="flex w-full justify-center">
            <Pagination
              color="primary"
              currentPage={page}
              pageCount={pageCount}
              data-testid="pagination"
            />
          </div>
        )
      }
      classNames={{
        wrapper: 'bg-white dark:bg-indigo rounded-md overflow-hidden px-0 py-4',
      }}
    >
      <TableHeader>
        {CONTRIBUTOR_COLUMN.map(
          ({ key, label, allowsSorting, visibleOnMobile }) => (
            <TableColumn
              key={key}
              data-testid={`table-header-${key}`}
              allowsSorting={allowsSorting}
              className={cn('bg-transparent pb-2 pl-4', {
                'hidden sm:table-cell': !visibleOnMobile,
              })}
            >
              <Text
                variant={TEXT_VARIANT.SECONDARY}
                as="span"
                size={TEXT_SIZE.sm}
              >
                {label}
              </Text>
            </TableColumn>
          ),
        )}
      </TableHeader>
      <TableBody items={dataFormat} emptyContent="No Contributors to display.">
        {(item) => {
          return (
            <TableRow key={item.id} className="hover:bg-default-200">
              {(columnKey) => (
                <TableCell
                  className={cn(
                    'pt-[15px] w-1/4 pl-4',
                    visibleOnMobileByKey[columnKey]
                      ? ''
                      : 'hidden sm:table-cell',
                  )}
                >
                  {formatContributor(item, columnKey as keyof ContributorData)}
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};

export default ContributorTable;
