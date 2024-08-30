import {
  NFTTrending,
  NFTRecentlyAdd,
  NFTTopCreators,
  NFTHistory,
  NFTBanner,
} from '@/ui/nft-marketplace';
import { MOCK_NFTS } from '@/mocks/nft';
import { MOCK_CREATORS } from '@/mocks/creators';
import { histories } from '@/mocks/histories';

const NFTMarketPage = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-10 flex-1">
        <NFTBanner />
        <NFTTrending trends={MOCK_NFTS} />
        <NFTRecentlyAdd recentlyList={MOCK_NFTS} />
      </div>
      <div className="flex flex-col gap-10">
        <NFTTopCreators data={MOCK_CREATORS} />
        <NFTHistory historyList={histories} />
      </div>
    </div>
  );
};

export default NFTMarketPage;
