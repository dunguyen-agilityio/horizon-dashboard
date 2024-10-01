'use client';

// Models
import { NFTResponse } from '@/models/NFT';

// Components
import NFTCard from '../NFTCard';
import { Button, Text } from '@/components';

// Hooks
import useScroll from '@/hooks/useScroll';

// Icons
import { ArrowRight, ArrowLeft } from '@/icons';

// Types
import { StrapiResponse } from '@/types/strapi';

// Utils
import { formatNFTResponse } from '@/utils/nft';

interface NFTTrendingProps {
  trends: StrapiResponse<NFTResponse>[];
}

const NFTTrending = ({ trends }: NFTTrendingProps) => {
  // TODO: handle call api get trending list
  const { ref, handleScrollLeft, handleScrollRight } =
    useScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">Trending NFTs</Text>
        <div className="flex gap-5">
          <Button
            isIconOnly
            onClick={handleScrollLeft}
            aria-label="arrow left icon"
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
        {trends.map((trend) => {
          const formatter = formatNFTResponse(trend);

          return (
            <NFTCard
              key={trend.id}
              {...formatter}
              data-testid={`nft-card-${trend.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NFTTrending;
