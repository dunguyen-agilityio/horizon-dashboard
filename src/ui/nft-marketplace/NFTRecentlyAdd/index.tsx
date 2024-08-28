// Models
import { NFT } from '@/models/NFT';

import { Text } from '@/components';
import NFTCard from '../NFTCard';

interface NTFRecentlyAddProps {
  recentlyList: NFT[];
}

const NTFRecentlyAdd = ({ recentlyList }: NTFRecentlyAddProps) => {
  // TODO: handle call api get recently list

  return (
    <div>
      <div className="flex justify-between pb-5">
        <Text className="font-bold text-[24px]">Recently Added</Text>
      </div>

      <div className="flex flex-wrap gap-5">
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
