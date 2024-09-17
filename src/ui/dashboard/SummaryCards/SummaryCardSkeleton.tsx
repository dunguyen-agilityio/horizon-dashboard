'use client';

import { Skeleton } from '@nextui-org/skeleton';

const SummaryCardSkeleton = () => (
  <Skeleton className="h-[80px] sm:h-[101px] 4xl:h-[117px] sm:flex-1 p-3 4xl:p-5 bg-white dark:bg-indigo-light rounded-md" />
);

const SummaryCardsSkeleton = () => (
  <div className="flex flex-col flex-wrap xs:grid xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-3 md:grid-rows-2 2xl:flex 2xl:flex-row 2xl:flex-nowrap gap-5">
    <SummaryCardSkeleton />
    <SummaryCardSkeleton />
    <SummaryCardSkeleton />
    <SummaryCardSkeleton />
    <SummaryCardSkeleton />
    <SummaryCardSkeleton />
  </div>
);

export default SummaryCardsSkeleton;
