import { Skeleton } from '@nextui-org/skeleton';

const NFTCardSkeleton = () => (
  <div className="w-fit bg-white dark:bg-indigo rounded-md p-5 h-[360px]">
    <div className="relative w-[308px] h-[205px] rounded-[18px] overflow-hidden">
      <Skeleton className="absolute inset-0 dark:bg-indigo-light" />
    </div>
    <Skeleton className="mt-4 w-full h-14 rounded-lg dark:bg-indigo-light" />
    <Skeleton className="mt-4 w-36 h-8 rounded-lg dark:bg-indigo-light" />
  </div>
);

export default NFTCardSkeleton;
