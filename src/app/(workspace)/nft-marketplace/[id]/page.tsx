import { Suspense } from 'react';

// component
import NFTDetailSkeleton from '@/components/Skeleton/NFTDetailSkeleton';
import NFTCardDetail from '@/ui/nft-marketplace/NFTCardDetail';
import NFTCardWrapper from '@/ui/nft-marketplace/NFTCardWrapper';

interface NFTMarketDetailProps {
  params: {
    id: number;
  };
}

const NFTMarketDetail = ({ params: { id } }: NFTMarketDetailProps) => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<NFTDetailSkeleton />}>
        <NFTCardDetail id={id} />
      </Suspense>

      <NFTCardWrapper />
    </div>
  );
};

export default NFTMarketDetail;
