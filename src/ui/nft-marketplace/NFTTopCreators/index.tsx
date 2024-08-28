import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Avatar, Progress } from '@nextui-org/react';

// components
import { Text, Button } from '@/components';

// types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { TColumn } from '@/types/common';
import { Creator } from '@/types/creator';

// Utils
import { cn } from '@nextui-org/theme';
import { formatUserName } from '@/utils/format';

const columns: TColumn[] = [
  {
    key: 'userName',
    label: 'Name',
  },
  {
    key: 'artwork',
    label: 'Artworks',
  },
  {
    key: 'rating',
    label: 'Rating',
  },
];

interface TopCreatorsProps {
  data: Creator[];
}

const NFTTopCreators = ({ data }: TopCreatorsProps) => {
  const handleSeeAll = () => {
    // TODO: Should handle it later
  };

  const formatDataCreator = (row: Creator, key: keyof Creator) => {
    const { avatar, userName, rating } = row;
    switch (key) {
      case 'userName':
        return (
          <div className="flex items-center pl-7">
            <Avatar src={avatar} alt={userName} className="mr-2" />
            <Text
              as="span"
              size={TEXT_SIZE.sm}
              className="bg-transparent text-primary"
            >
              {formatUserName(userName)}
            </Text>
          </div>
        );

      case 'rating':
        return (
          <Progress
            aria-label="Rating"
            value={rating}
            classNames={{
              base: 'pr-3 h-2',
              indicator: 'bg-blue-450 dark:bg-purple-750',
            }}
          />
        );

      default:
        return (
          <Text
            as="span"
            size={TEXT_SIZE.sm}
            className="bg-transparent text-secondary"
          >
            {getKeyValue(row, key)}
          </Text>
        );
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-indigo-light rounded-md w-[484px] overflow-auto shadow-md">
      <div className="flex items-center justify-between p-[18px]">
        <Text className="leading-8 font-poppins font-bold text-blue-450">
          Top Creators
        </Text>

        <Button
          className="text-blue-450 dark:text-white font-medium bg-gray dark:bg-purple-750 rounded-[70px]"
          onClick={handleSeeAll}
        >
          See all
        </Button>
      </div>

      <Table
        classNames={{
          thead: 'bg-transparent',
          tbody: 'bg-gray dark:bg-indigo',
        }}
        className="mt-3 first:[&_*:is(th,td)]:pr-0 [&_*:is(th,td)]:bg-transparent [&_*:is(th,td)]:dark:transparent [&>div]:p-0 [&>div]:bg-transparent [&>div]:shadow-none [&_*:is(th,td)]:pt-2 [&_*:is(th,td)]:pb-4 [&>div]:overflow-visible"
      >
        <TableHeader columns={columns}>
          {({ key, label }) => (
            <TableColumn key={key} className={key === 'userName' ? 'pl-7' : ''}>
              <Text variant={TEXT_VARIANT.SECONDARY} size={TEXT_SIZE.sm}>
                {label}
              </Text>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data} emptyContent="No creator to display.">
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell
                  className={cn(
                    columnKey === 'userName' ? 'px-0' : '',
                    'group-aria-[selected=false]:group-data-[hover=true]:bg-transparent',
                  )}
                >
                  {formatDataCreator(item, columnKey as keyof Creator)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default NFTTopCreators;
