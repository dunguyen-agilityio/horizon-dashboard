// components
import { Skeleton } from '@nextui-org/skeleton';

const NFTTopCreatorsSkeleton = () => (
  <div className="flex flex-col bg-white dark:bg-indigo rounded-md w-full 4xl:max-w-nftCard overflow-auto shadow-md pb-[46px] pt-[19px] h-[605px] gap-3">
    <div className="flex items-center justify-between p-[18px]">
      <Skeleton className="dark:bg-indigo-light w-28 h-10 rounded-lg" />
      <Skeleton className="dark:bg-indigo-light w-20 h-10 rounded-lg" />
    </div>

    <div className="flex-1 flex justify-center flex-col gap-2 px-3">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div className="flex-1 w-full px-4" key={index}>
            <Skeleton className="dark:bg-indigo-light h-10 flex-1 rounded-lg" />
          </div>
        ))}
    </div>
  </div>
);

export default NFTTopCreatorsSkeleton;
