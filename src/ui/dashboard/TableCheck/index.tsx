import { Text } from '@/components';
import { TCheck } from '@/types/check';
import { TColumn } from '@/types/common';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  cn,
} from '@nextui-org/react';

const columns: TColumn[] = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'quantity',
    label: 'QUANTITY',
  },
  {
    key: 'progress',
    label: 'PROGRESS',
  },
  {
    key: 'createdAt',
    label: 'DATE',
  },
];

interface TableCheckProps {
  rows: TCheck[];
}

const formatDataCheck = (row: TCheck, key: keyof TCheck) => {
  switch (key) {
    case 'createdAt':
      return (getKeyValue(row, key) as Date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });

    default:
      return getKeyValue(row, key);
  }
};

const TableCheck = ({ rows }: TableCheckProps) => (
  <div className="flex-1 bg-white dark:bg-indigo pt-5 pl-[30px] pb-[28px] pr-[25px] rounded-md">
    <Text as="h2" size={TEXT_SIZE.extra}>
      Check Table
    </Text>
    <Table
      aria-label="Rows actions table example with dynamic content"
      selectionMode="multiple"
      selectionBehavior="toggle"
      className="mt-6 [&_*:not(span,svg,label)]:bg-white [&_*:not(span,svg,label)]:dark:bg-indigo first:[&_th]:pr-0 first:[&_tr>*:is(th,td)]:pr-0 [&>div]:p-0 [&>div]:shadow-none"
    >
      <TableHeader columns={columns}>
        {({ key, label }) => (
          <TableColumn key={key} className={key === 'name' ? 'pr-0' : ''}>
            <Text variant={TEXT_VARIANT.SECONDARY} size={TEXT_SIZE.sm}>
              {label}
            </Text>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
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
                  {formatDataCheck(item, columnKey as keyof TCheck)}
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
