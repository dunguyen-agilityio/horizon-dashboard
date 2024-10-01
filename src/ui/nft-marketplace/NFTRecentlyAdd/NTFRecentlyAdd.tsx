'use client';

// Models
import { NFTResponse } from '@/models/NFT';

import NFTCard from '../NFTCard';
import { Button, Text } from '@/components';

// Hooks
import useScroll from '@/hooks/useScroll';

// Icons
import { ArrowLeft, ArrowRight } from '@/icons';
import { StrapiResponse } from '@/types/strapi';
import { formatNFTResponse } from '@/utils/nft';

interface NTFRecentlyAddProps {
  recentlyList: StrapiResponse<NFTResponse>[];
}

const NTFRecentlyAdd = ({ recentlyList }: NTFRecentlyAddProps) => {
  const { ref, handleScrollLeft, handleScrollRight } =
    useScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">Recently Added</Text>
        <div className="flex gap-5">
          <Button
            isIconOnly
            aria-label="arrow left icon"
            onClick={handleScrollLeft}
            className="bg-white dark:bg-default [&_path]:stroke-blue-450 [&_path]:dark:stroke-white rounded-full"
          >
            <ArrowLeft />
          </Button>
          <Button
            isIconOnly
            aria-label="arrow right icon"
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
        {recentlyList.map((item) => {
          const formatter = formatNFTResponse(item);
          return (
            <NFTCard
              key={item.id}
              {...formatter}
              data-testid={`nft-card-${item.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NTFRecentlyAdd;
