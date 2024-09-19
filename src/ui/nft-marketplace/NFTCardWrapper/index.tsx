// Types
import { TEXT_SIZE } from '@/types/text';
import { Text } from '@/components';

// Mock
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';

// Components
import NFTCard from '@/ui/nft-marketplace/NFTCard';
import { formatNFTResponse } from '@/utils/nft';

const NFTCardWrapper = async () => {
  // TODO: should handle call api here
  return (
    <div className="flex flex-col">
      <Text size={TEXT_SIZE.extra} className="pb-10">
        Product Related
      </Text>
      <div className="flex flex-wrap gap-10">
        {MOCK_NFTS_RESPONSE.map((item) => {
          const formatter = formatNFTResponse(item);
          return <NFTCard key={item.id} {...formatter} />;
        })}
      </div>
    </div>
  );
};

export default NFTCardWrapper;
