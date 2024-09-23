import NFTDetailSkeleton from '@/components/Skeleton/NFTDetailSkeleton';
import { HorizontalNFTsSkeleton } from '@/ui/nft-marketplace';

const Loading = () => (
  <div className="flex flex-col w-full overflow-hidden">
    <NFTDetailSkeleton />
    <HorizontalNFTsSkeleton />
  </div>
);

export default Loading;
