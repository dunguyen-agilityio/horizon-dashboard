'use client';

import { useState } from 'react';

import { Avatar } from '@nextui-org/avatar';
import { SharedSelection } from '@nextui-org/system';
import { Select, SelectItem } from '@nextui-org/select';

// Constants
import { FLAG, FLAG_KEYS } from '@/constants/flag';

interface SelectFlagProps {
  defaultFlag?: keyof typeof FLAG;
}

const SelectFlag = ({ defaultFlag = FLAG_KEYS[0] }: SelectFlagProps) => {
  const [flag, setFlag] = useState<SharedSelection>();

  return (
    <>
      <Avatar
        src={FLAG[(flag?.currentKey || defaultFlag) as keyof typeof FLAG]}
        classNames={{ base: 'min-w-[50px] h-[50px]' }}
      />
      <Select
        defaultSelectedKeys={flag}
        onSelectionChange={setFlag}
        classNames={{
          base: 'w-14 h-14 justify-start',
          trigger: '!bg-transparent px-0 w-10 shadow-none',
          popoverContent: 'w-fit bg-white dark:bg-indigo-light',
          innerWrapper: 'hidden',
        }}
        aria-label="select flag"
        popoverProps={{
          classNames: { base: 'w-[200px] -left-[150px] sm:left-0' },
        }}
      >
        {FLAG_KEYS.map((key) => (
          <SelectItem
            key={key}
            title={key}
            classNames={{ title: '' }}
            startContent={<Avatar src={FLAG[key]} size="sm" />}
          />
        ))}
      </Select>
    </>
  );
};

export default SelectFlag;
