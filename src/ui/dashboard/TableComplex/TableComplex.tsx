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
import { Progress } from '@nextui-org/progress';
import { Text } from '@/components';
import { Info, Error, Check } from '@/icons';

// Utils
import { formatShortDate } from '@/utils/format';

// Types
import { TColumn } from '@/types/common';
import { Complex, ComplexStatus } from '@/types/complex';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const columnsByKey: Record<string, TColumn> = {
  name: {
    key: 'name',
    label: 'NAME',
  },
  status: {
    key: 'status',
    label: 'STATUS',
    visibleOnMobile: false,
  },
  createdAt: {
    key: 'createdAt',
    label: 'DATE',
    visibleOnMobile: false,
  },
  progress: {
    key: 'progress',
    label: 'PROGRESS',
  },
};

const columns = Object.values(columnsByKey);

interface TableComplexProps {
  data: Complex[];
}

const formatDataCheck = (row: Complex, key: keyof Complex) => {
  const value = getKeyValue(row, key);

  const renderStatus = () => {
    switch (getKeyValue(row, 'status') as ComplexStatus) {
      case ComplexStatus.APPROVED:
        return <Check />;

      case ComplexStatus.ERROR:
        return <Error />;

      default:
        return <Info />;
    }
  };

  switch (key) {
    case 'name':
      return (
        <div className="flex flex-col">
          <Text as="span" className="bg-transparent">
            {value}
          </Text>
          <Text
            as="span"
            size={TEXT_SIZE.sm}
            className="!text-secondary block sm:hidden bg-transparent"
          >
            {formatShortDate(new Date(getKeyValue(row, 'createdAt')))}
          </Text>
        </div>
      );
    case 'createdAt':
      return (
        <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
          {formatShortDate(new Date(value))}
        </Text>
      );

    case 'progress':
      return (
        <div className="flex flex-col items-end sm:items-start">
          <div className="w-full">
            <Text
              as="span"
              className="text-end sm:text-center block md:hidden !text-success !bg-transparent"
              size={TEXT_SIZE.sm}
            >
              {value}%
            </Text>
            <Progress
              aria-label="Loading..."
              value={value}
              className="hidden md:block max-w-md"
            />
          </div>

          <div className="flex md:hidden items-center gap-[5px]">
            {renderStatus()}
            <Text as="span" size={TEXT_SIZE.sm} className="bg-transparent">
              {getKeyValue(row, 'status')}
            </Text>
          </div>
        </div>
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
  <div className="flex-1 bg-white dark:bg-indigo p-2 pt-5 md:pl-[30px] md:pb-[28px] md:pr-[25px] rounded-md">
    <Text as="h2" size={TEXT_SIZE.extra}>
      Complex Table
    </Text>
    <Table
      aria-label="Rows actions table example with dynamic content"
      classNames={{
        table: 'first:[&_*:is(th,td)]:pl-0 last:[&_*:is(th,td)]:pr-0',
        thead: 'hidden sm:table-header-group',
        tbody: '[&_span]:!font-bold',
      }}
      className="mt-4 sm:mt-6 [&_*:not(div,span,svg,label)]:bg-white [&_*:not(div,span,svg,label)]:dark:bg-indigo [&>div]:p-0 [&>div]:shadow-none [&_*:is(th,td)]:pt-2 [&_*:is(th,td)]:pb-2 [&>div]:overflow-visible"
    >
      <TableHeader columns={columns}>
        {({ key, label }) => (
          <TableColumn key={key}>
            <Text variant={TEXT_VARIANT.SECONDARY} size={TEXT_SIZE.sm}>
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
                    visibleOnMobile ? '' : 'hidden sm:table-cell',
                    'group-aria-[selected=false]:group-data-[hover=true]:bg-transparent',
                  )}
                >
                  {formatDataCheck(item, columnKey as keyof Complex)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

export default TableComplex;
