// components
import { Skeleton } from '@nextui-org/skeleton';

const NFTHistoryCardSkeleton = () => (
  <div className="flex items-center gap-4 h-[106px] px-4 py-2">
    <Skeleton className="h-[66px] w-[66px] rounded-md dark:bg-indigo-light" />
    <div className="flex flex-col gap-2 flex-1 px-6">
      <Skeleton className="h-10 w-full rounded-lg dark:bg-indigo-light" />
      <Skeleton className="h-6 w-full rounded-lg dark:bg-indigo-light" />
    </div>
  </div>
);

const NFTHistorySkeleton = () => (
  <div className="flex flex-col bg-white dark:bg-indigo rounded-md w-full 4xl:max-w-nftCard overflow-y-hidden shadow-md pb-[46px] pt-[19px] h-[605px] gap-3">
    <div className="flex items-center justify-between p-[18px]">
      <Skeleton className="dark:bg-indigo-light w-28 h-10 rounded-lg" />
      <Skeleton className="dark:bg-indigo-light w-20 h-10 rounded-lg" />
    </div>

    <div className="flex-1 flex justify-center flex-col gap-2 px-3">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <NFTHistoryCardSkeleton key={index} />
        ))}
    </div>
  </div>
);

export default NFTHistorySkeleton;
