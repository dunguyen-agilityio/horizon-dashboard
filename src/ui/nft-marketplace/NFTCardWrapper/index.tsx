// Types
import { TEXT_SIZE } from '@/types/text';
import { Text } from '@/components';

// Mock
import { MOCK_NFTS } from '@/mocks/nft';

// Components
import NFTCard from '@/ui/nft-marketplace/NFTCard';

const NFTCardWrapper = async () => {
  // TODO: should handle call api here
  return (
    <div className="flex flex-col">
      <Text size={TEXT_SIZE.extra} className="pb-10">
        Product Related
      </Text>
      <div className="flex flex-wrap gap-10">
        {MOCK_NFTS.map((item) => (
          <NFTCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NFTCardWrapper;
