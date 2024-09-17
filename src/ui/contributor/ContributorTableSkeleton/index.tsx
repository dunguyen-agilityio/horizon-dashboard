import { Skeleton } from '@nextui-org/skeleton';

const SkeletonRow = ({
  count,
  className,
}: {
  count: number;
  className: string;
}) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <Skeleton key={index} className={className} />
    ))}
  </>
);

export const ContributorTableSkeleton = () => (
  <div className="space-y-5 p-4 rounded-xl bg-white dark:bg-indigo-light">
    <div className="flex gap-4 h-14 lg:h-20 mb-4 lg:mb-8">
      <Skeleton className="hidden sm:block w-full rounded-lg bg-white dark:bg-indigo-dark" />
      <SkeletonRow
        count={3}
        className="w-full rounded-lg bg-white dark:bg-indigo-dark"
      />
    </div>

    <div className="space-y-3">
      <SkeletonRow
        count={10}
        className="h-14 rounded-lg bg-white dark:bg-indigo-dark"
      />
      <Skeleton className="h-12 w-2/5 rounded-xl bg-white dark:bg-indigo-dark mx-auto" />
    </div>
  </div>
);
