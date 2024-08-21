// Components
import { Text } from '@/components';
import Check from '@/icons/Check';
import Error from '@/icons/Error';
import Info from '@/icons/Info';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Progress } from '@nextui-org/progress';

import { cn } from '@nextui-org/theme';

// Types
import { TColumn } from '@/types/common';
import { Complex, ComplexStatus } from '@/types/complex';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const columns: TColumn[] = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
  {
    key: 'createdAt',
    label: 'DATE',
  },
  {
    key: 'progress',
    label: 'PROGRESS',
  },
];

interface TableComplexProps {
  data: Complex[];
}

const formatDataCheck = (row: Complex, key: keyof Complex) => {
  const value = getKeyValue(row, key);

  const renderStatus = () => {
    switch (value as ComplexStatus) {
      case ComplexStatus.APPROVED:
        return <Check />;

      case ComplexStatus.ERROR:
        return <Error />;

      default:
        return <Info />;
    }
  };

  switch (key) {
    case 'createdAt':
      return (
        <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
          {(value as Date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      );

    case 'progress':
      return (
        <Progress aria-label="Loading..." value={value} className="max-w-md" />
      );

    case 'status':
      return (
        <div className="flex items-center gap-[5px]">
          {renderStatus()}
          <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
            {value}
          </Text>
        </div>
      );

    default:
      return (
        <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
          {value}
        </Text>
      );
  }
};

const TableComplex = ({ data }: TableComplexProps) => (
  <div className="flex-1 bg-white dark:bg-indigo pt-5 pl-[30px] pb-[28px] pr-[25px] rounded-md">
    <Text as="h2" size={TEXT_SIZE.extra}>
      Complex Table
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
                {formatDataCheck(item, columnKey as keyof Complex)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

export default TableComplex;
