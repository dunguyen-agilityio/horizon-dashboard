'use client';

// Libs
import { cn } from '@nextui-org/theme';

// Components
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Text } from '@/components';

// Utils
import { formatShortDate } from '@/utils/format';

// Types
import { Check } from '@/types/check';
import { TColumn } from '@/types/common';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const columnsByKey: Record<string, TColumn> = {
  name: {
    key: 'name',
    label: 'NAME',
  },
  progress: {
    key: 'progress',
    label: 'PROGRESS',
    visibleOnMobile: false,
  },
  quantity: { key: 'quantity', label: 'QUANTITY' },
  createdAt: { key: 'createdAt', label: 'DATE', visibleOnMobile: false },
};

const columns = Object.values(columnsByKey);

interface TableCheckProps {
  data: Check[];
}

const formatDataCheck = (row: Check, key: keyof Check) => {
  const value = getKeyValue(row, key);

  switch (key) {
    case 'createdAt':
      return (
        <Text as="span" className="bg-transparent">
          {formatShortDate(new Date(value))}
        </Text>
      );

    case 'progress':
      return (
        <Text as="span" className="bg-transparent">
          {`${value}%`}
        </Text>
      );

    case 'quantity':
      return (
        <div className="flex flex-col items-end sm:items-start">
          <Text
            as="span"
            className="bg-transparent"
          >{`${value.toLocaleString('de-DE')}`}</Text>
          <Text
            as="span"
            size={TEXT_SIZE.sm}
            className="!text-success block sm:hidden bg-transparent"
          >{`${getKeyValue(row, 'progress')}%`}</Text>
        </div>
      );

    case 'name':
      return (
        <>
          <Text
            as="span"
            size={TEXT_SIZE.sm}
            className="font-bold bg-transparent"
          >
            {value}
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            as="span"
            className="!text-secondary block sm:hidden bg-transparent"
          >
            {formatShortDate(new Date(getKeyValue(row, 'createdAt')))}
          </Text>
        </>
      );

    default:
      return (
        <Text size={TEXT_SIZE.sm} as="span" className="bg-transparent">
          {value}
        </Text>
      );
  }
};

const TableCheck = ({ data }: TableCheckProps) => (
  <div className="flex-1 bg-white dark:bg-indigo p-2 pt-5 md:pl-[30px] md:pb-[28px] md:pr-[25px] rounded-md">
    <Text as="h2" size={TEXT_SIZE.extra}>
      Check Table
    </Text>
    <Table
      aria-label="Rows actions table example with dynamic content"
      selectionMode="multiple"
      selectionBehavior="toggle"
      classNames={{
        table:
          '[&_*:is(td,th):first-child]:hidden sm:[&_*:is(td,th):first-child]:table-cell sm:[&_*:is(td,th):first-child_span:before]:dark:border-white sm:[&_*:is(td,th):first-child_span]:rounded-none sm:[&_*:is(td,th):first-child_span:before]:rounded-none sm:[&_*:is(td,th):first-child_span:after]:rounded-none',
        thead: 'hidden sm:table-header-group',
        tbody: '[&_span]:!font-bold',
        td: 'data-[selected=true]:before:opacity-70',
      }}
      className="mt-4 sm:mt-6 [&_*:not(div,span,svg,label)]:bg-white [&_*:not(div,span,svg,label)]:dark:bg-indigo first:[&_*:is(th,td)]:pr-0 [&>div]:p-0 [&>div]:shadow-none [&_*:is(th,td)]:pt-2 [&_*:is(th,td)]:pb-2 [&>div]:overflow-visible"
    >
      <TableHeader columns={columns}>
        {({ key, label }) => (
          <TableColumn key={key} className={key === 'name' ? 'pl-0' : ''}>
            <Text
              variant={TEXT_VARIANT.SECONDARY}
              size={TEXT_SIZE.sm}
              className="bg-white"
            >
              {label}
            </Text>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data} emptyContent="No rows to display.">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => {
              const { visibleOnMobile = true } = columnsByKey[columnKey];
              return (
                <TableCell
                  className={cn(
                    columnKey === 'name' ? 'pl-0' : '',
                    visibleOnMobile ? '' : 'hidden sm:table-cell',
                    'group-aria-[selected=false]:group-data-[hover=true]:bg-transparent',
                  )}
                >
                  {formatDataCheck(item, columnKey as keyof Check)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

export default TableCheck;
