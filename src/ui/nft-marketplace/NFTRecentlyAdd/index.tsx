'use client';

// Models
import { NFT } from '@/models/NFT';

import NFTCard from '../NFTCard';
import { Button, Text } from '@/components';

// Hooks
import useScroll from '@/hooks/useScroll';

// Icons
import { ArrowLeft, ArrowRight } from '@/icons';

interface NTFRecentlyAddProps {
  recentlyList: NFT[];
}

const NTFRecentlyAdd = ({ recentlyList }: NTFRecentlyAddProps) => {
  const { ref, handleScrollLeft, handleScrollRight } =
    useScroll<HTMLDivElement>();

  return (
    <div className="">
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">Recently Added</Text>
        <div className="flex gap-5">
          <Button
            isIconOnly
            onClick={handleScrollLeft}
            className="bg-white dark:bg-default [&_path]:stroke-blue-450 [&_path]:dark:stroke-white rounded-full"
          >
            <ArrowLeft />
          </Button>
          <Button
            isIconOnly
            onClick={handleScrollRight}
            className="bg-white dark:bg-default [&_path]:stroke-blue-450 [&_path]:dark:stroke-white rounded-full"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div
        className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
        ref={ref}
      >
        {recentlyList.map((item) => (
          <NFTCard
            key={item.id}
            {...item}
            data-testid={`nft-card-${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NTFRecentlyAdd;
