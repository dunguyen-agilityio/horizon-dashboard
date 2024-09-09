// Components
import { Text } from '@/components';
import NFTCard from '../NFTCard';

// Mock
import { MOCK_NFTS } from '@/mocks/nft';

interface NFTFavoritesProps {
  id: number;
}

const NFTFavorites = (_: NFTFavoritesProps) => {
  // TODO: handle call api get NFT favorite list

  return (
    <>
      <div className="flex justify-between pb-5 mb-5 lg:mb-0">
        <Text className="font-bold text-[24px]">Favorite NFTs</Text>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start max-w-[716px] xl:max-w-[1084px] 2xl:max-w-[1452px]">
          {MOCK_NFTS.map((trend) => (
            <NFTCard
              isShowIcon={false}
              key={trend.id}
              {...trend}
              data-testid={`nft-card-${trend.id}`}
            />
          ))}
        </div>
      </div>
      {/* TODO: Will handle Pagination */}
    </>
  );
};

export default NFTFavorites;
