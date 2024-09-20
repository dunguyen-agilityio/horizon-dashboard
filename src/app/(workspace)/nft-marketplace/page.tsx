import {
  NFTTrending,
  NFTRecentlyAdd,
  NFTTopCreators,
  NFTHistory,
  NFTBanner,
} from '@/ui/nft-marketplace';

// Styles
import '@/styles/scroll.css';
import { Suspense } from 'react';

const NFTMarketPage = () => (
  <div className="flex flex-col xl:grid xl:grid-cols-[calc(100%-504px)_484px] xl:grid-rows-[420px_1fr] gap-5">
    <div className="col-span-2 2xl:col-span-1">
      <NFTBanner />
    </div>
    <div className="row-start-2 row-end-2 col-span-1 flex flex-col gap-10 pb-10">
      {/** TODO: Will improve Skeleton later */}
      <Suspense>
        <NFTTrending />
      </Suspense>
      <Suspense>
        <NFTRecentlyAdd />
      </Suspense>
    </div>
    <div className="col-start-2 col-span-2 flex flex-col gap-10 pb-10">
      <div className="flex-1">
        <Suspense>
          <NFTTopCreators />
        </Suspense>
      </div>
      <div className="flex-1">
        <Suspense>
          <NFTHistory />
        </Suspense>
      </div>
    </div>
  </div>
);

export default NFTMarketPage;
