import { Skeleton } from '@nextui-org/skeleton';
import NFTCardSkeleton from '../NFTCard/NFTCardSkeleton';

const HorizontalNFTsSkeleton = () => (
  <div className="flex flex-col gap-5 flex-1">
    <div className="w-full flex justify-between">
      <Skeleton className="w-32 h-10 rounded-lg dark:bg-indigo-light" />
      <div className="flex gap-5">
        <Skeleton className="w-10 h-10 rounded-full dark:bg-indigo-light" />
        <Skeleton className="w-10 h-10 rounded-full dark:bg-indigo-light" />
      </div>
    </div>
    <div className="flex gap-5 w-full overflow-x-hidden">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <NFTCardSkeleton key={index} />
        ))}
    </div>
  </div>
);

export default HorizontalNFTsSkeleton;
