import {
  NFTTrending,
  NFTRecentlyAdd,
  NFTTopCreators,
  NFTHistory,
  NFTBanner,
} from '@/ui/nft-marketplace';

// Mocks
import { MOCK_NFTS } from '@/mocks/nft';
import { MOCK_CREATORS } from '@/mocks/creators';
import { histories } from '@/mocks/histories';

// Styles
import '@/styles/scroll.css';

const NFTMarketPage = () => (
  <div className="flex flex-col xl:grid xl:grid-cols-[calc(100%-504px)_484px] xl:grid-rows-[420px_1fr] gap-5">
    <div className="col-span-2 2xl:col-span-1">
      <NFTBanner />
    </div>
    <div className="row-start-2 row-end-2 col-span-1 flex flex-col gap-10 pb-10">
      <NFTTrending trends={MOCK_NFTS} />
      <NFTRecentlyAdd recentlyList={MOCK_NFTS} />
    </div>
    <div className="col-start-2 col-span-2 flex flex-col gap-10 pb-10">
      <div className="flex-1">
        <NFTTopCreators data={MOCK_CREATORS} />
      </div>
      <div className="flex-1">
        <NFTHistory historyList={histories} />
      </div>
    </div>
  </div>
);

export default NFTMarketPage;
