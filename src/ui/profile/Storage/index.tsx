'use client';

import { Progress } from '@nextui-org/react';

// icons
import { More, Cloud } from '@/icons';

// components
import { BoxIcon, Text } from '@/components';

interface StorageProps {
  usedSize: number;
  totalSize: number;
  valueProgress: number;
}

const Storage = ({ usedSize, totalSize, valueProgress }: StorageProps) => (
  <div className="flex flex-col h-[365px] bg-white dark:bg-indigo p-5 rounded-md">
    <div className="flex justify-end">
      <BoxIcon
        icon={<More />}
        customClass="rotate-90 w-9 h-9 bg-gray dark:bg-indigo-light rounded-lg fill-blue-450 dark:fill-white"
      />
    </div>
    <div className="flex flex-col items-center pb-12">
      <div className="w-[100px] h-[100px] rounded-full bg-gray dark:bg-indigo-light flex items-center justify-center mb-3">
        <BoxIcon
          icon={<Cloud />}
          customClass="fill-indigo-light w-11 h-8 rounded-lg fill-blue-450 dark:fill-white"
        />
      </div>
      <Text className="font-bold text-[24px]">Your Storage</Text>
      <Text className="font-normal text-secondary text-center w-2/3 leading-relaxed">
        Supervise your drive space in the easiest way
      </Text>
    </div>

    <div>
      <div className="flex justify-between gap-1">
        <Text className="font-normal text-secondary">{usedSize}Gb</Text>
        <Text className="font-normal text-secondary">{totalSize}Gb</Text>
      </div>
      <Progress aria-label="Storage" value={valueProgress} />
    </div>
  </div>
);

export default Storage;
