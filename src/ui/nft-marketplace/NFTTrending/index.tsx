// Models
import { NFT } from '@/models/NFT';

import { Text } from '@/components';
import NFTCard from '../NFTCard';

interface NFTTrendingProps {
  trends: NFT[];
}

const NFTTrending = ({ trends }: NFTTrendingProps) => {
  // TODO: handle call api get trending list

  return (
    <div>
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">Trending NFTs</Text>
      </div>

      <div className="flex flex-wrap gap-5">
        {trends.map((trend) => (
          <NFTCard
            key={trend.id}
            {...trend}
            data-testid={`nft-card-${trend.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTTrending;
