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
    <div className="2xl:flex 2xl:flex-row gap-10 lg:flex-col">
      <div className="flex flex-col gap-10 flex-1 pb-10">
        <NFTBanner />
        <NFTTrending trends={MOCK_NFTS} />
        <NFTRecentlyAdd recentlyList={MOCK_NFTS} />
      </div>
      <div className="flex flex-col items-center 2xl:flex-col 2xl:justify-start lg:flex-row lg:justify-center lg:items-start gap-10">
        <NFTTopCreators data={MOCK_CREATORS} />
        <NFTHistory historyList={histories} />
      </div>
    </div>
  );
};

export default NFTMarketPage;
