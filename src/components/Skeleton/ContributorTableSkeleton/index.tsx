// Constants
import { PAGE_SIZE } from '@/constants/query';

// Components
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
  <>
    <div className="flex justify-center xs:justify-end mb-4 mt-2">
      <Skeleton className="w-96 h-10 rounded-lg dark:bg-indigo-dark" />
    </div>

    <div className="space-y-5 p-4 rounded-xl dark:bg-indigo-light">
      <div className="flex gap-4 h-12 lg:h-20 mb-4 lg:mb-8">
        <Skeleton className="w-full rounded-lg dark:bg-indigo-dark" />
      </div>

      <div className="space-y-3">
        <SkeletonRow
          count={parseInt(PAGE_SIZE.HIGH)}
          className="h-10 rounded-lg dark:bg-indigo-dark"
        />
        <Skeleton className="h-10 w-2/5 rounded-xl dark:bg-indigo-dark mx-auto" />
      </div>
    </div>
  </>
);
