'use client';
// Components
import { Text } from '@/components';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';

// Libs
import { cn } from '@nextui-org/theme';
import { formatShortDate } from '@/utils/format';

// Types
import { Check } from '@/types/check';
import { TColumn } from '@/types/common';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const columns: TColumn[] = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'progress',
    label: 'PROGRESS',
  },
  {
    key: 'quantity',
    label: 'QUANTITY',
  },
  {
    key: 'createdAt',
    label: 'DATE',
  },
];

interface TableCheckProps {
  data: Check[];
}

const formatDataCheck = (row: Check, key: keyof Check) => {
  const value = getKeyValue(row, key);

  switch (key) {
    case 'createdAt':
      return formatShortDate(value as Date);

    case 'progress':
      return `${value}%`;

    case 'quantity':
      return value.toLocaleString('de-DE');

    default:
      return value;
  }
};

const TableCheck = ({ data }: TableCheckProps) => (
  <div className="flex-1 bg-white dark:bg-indigo md:pt-5 md:pl-[30px] md:pb-[28px] md:pr-[25px] p-1 rounded-md">
    <Text as="h2" size={TEXT_SIZE.extra}>
      Check Table
    </Text>
    <Table
      aria-label="Rows actions table example with dynamic content"
      selectionMode="multiple"
      selectionBehavior="toggle"
      className="mt-6 [&_*:not(div,span,svg,label)]:bg-white [&_*:not(div,span,svg,label)]:dark:bg-indigo first:[&_*:is(th,td)]:pr-0 [&>div]:p-0 [&>div]:shadow-none [&_*:is(th,td)]:pt-2 [&_*:is(th,td)]:pb-2 [&>div]:overflow-visible"
    >
      <TableHeader columns={columns}>
        {({ key, label }) => (
          <TableColumn key={key} className={key === 'name' ? 'pl-0' : ''}>
            <Text variant={TEXT_VARIANT.SECONDARY} size={TEXT_SIZE.sm}>
              {label}
            </Text>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data} emptyContent="No rows to display.">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={cn(
                  columnKey === 'name' ? 'pl-0' : '',
                  'group-aria-[selected=false]:group-data-[hover=true]:bg-transparent',
                )}
              >
                <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
                  {formatDataCheck(item, columnKey as keyof Check)}
                </Text>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

export default TableCheck;
