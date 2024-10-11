import { Skeleton } from '@nextui-org/skeleton';

const NFTDetailSkeleton = () => (
  <div className="flex gap-10 pb-20 flex-wrap 2xl:flex-nowrap">
    <div className="relative h-[450px] w-[900px] rounded-md overflow-hidden">
      <Skeleton className="w-full h-full dark:bg-indigo-dark" />
    </div>
    <div className="flex flex-col xl:w-2/3 2xl:w-1/3 gap-5">
      <div className="flex gap-2 items-center">
        <Skeleton className="w-[100px] h-[24px] dark:bg-indigo-dark" />
        <Skeleton className="w-[200px] h-[24px] dark:bg-indigo-dark" />
      </div>
      <div className="flex gap-2 items-center">
        <Skeleton className="w-[100px] h-[24px] dark:bg-indigo-dark" />
        <Skeleton className="w-[150px] h-[24px] dark:bg-indigo-dark" />
      </div>
      <Skeleton className="w-[150px] h-[20px] dark:bg-indigo-dark" />
      <Skeleton className="w-2/3 xl:w-full h-[100px] dark:bg-indigo-dark" />
    </div>
  </div>
);

export default NFTDetailSkeleton;
