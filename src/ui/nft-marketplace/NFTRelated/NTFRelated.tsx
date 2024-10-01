'use client';

// Components
import NFTCard from '../NFTCard';
import { Button, Text } from '@/components';

// Models
import { NFTDataExtend } from '@/models/NFT';

// Icons
import { ArrowLeft, ArrowRight } from '@/icons';

// Hooks
import useScroll from '@/hooks/useScroll';

interface NTFRelatedProps {
  relatedList: NFTDataExtend[];
}

const NTFRelated = ({ relatedList }: NTFRelatedProps) => {
  const { ref, handleScrollLeft, handleScrollRight } =
    useScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">NFTs Related</Text>
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
        {relatedList.map((item) => (
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

export default NTFRelated;
