'use client';

import { cn } from '@nextui-org/theme';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Avatar } from '@nextui-org/avatar';
import { Progress } from '@nextui-org/progress';

// constants
import { ROW_CREATOR } from '@/constants/topCreator';

// components
import { Text, Button } from '@/components';

// types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { TColumn } from '@/types/common';
import { Creator } from '@/types/creator';

// Utils

import { formatNumber, formatUserName } from '@/utils/format';

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

const formatDataCreator = (row: Creator, key: keyof Creator) => {
  const { avatar, username, rating, artwork } = row;
  const { USER_NAME, ART_WORK, RATING } = ROW_CREATOR;
  switch (key) {
    case USER_NAME:
      return (
        <div className="flex items-center pl-7">
          <Avatar src={avatar?.url} alt={username} size="sm" className="mr-2" />
          <Text
            as="span"
            size={TEXT_SIZE.sm}
            className="bg-transparent text-primary"
          >
            {formatUserName(username)}
          </Text>
        </div>
      );

    case ART_WORK:
      return (
        <Text
          as="span"
          size={TEXT_SIZE.sm}
          className="bg-transparent text-secondary"
        >
          {formatNumber(artwork)}
        </Text>
      );

    case RATING:
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

const NFTTopCreators = ({ data }: TopCreatorsProps) => {
  const handleSeeAll = () => {
    // TODO: Should handle it later
  };

  return (
    <div className="flex flex-col bg-white dark:bg-indigo-light rounded-md w-full 4xl:max-w-nftCard overflow-auto shadow-md pt-[19px]">
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
