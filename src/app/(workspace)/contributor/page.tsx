import { Suspense } from 'react';

// Types
import { ISearchParams } from '@/types/query-params';

// Components
import ContributorTable from '@/ui/contributor/ContributorContainer';
import { ContributorTableSkeleton } from '@/ui/contributor/ContributorTableSkeleton';

const ContributorPage = ({ searchParams }: { searchParams: ISearchParams }) => (
  <>
    <Suspense fallback={<ContributorTableSkeleton />}>
      <ContributorTable searchParams={searchParams} />
    </Suspense>
  </>
);

export default ContributorPage;
