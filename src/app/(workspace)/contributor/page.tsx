// Components
import { ContributorTable } from '@/ui/contributor';
import ErrorFallback from '@/components/ErrorFallback';
import DateRangePicker from '@/components/DateRangePicker';

// Constants
import { PAGE_SIZE } from '@/constants/query';

// Services
import { getContributor } from '@/services/contributor';

// Types
import { ISearchParams } from '@/types/query-params';

// Utils
import { mapContributorsData } from '@/utils/contributor';

const ContributorPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const { page = '1', startDate, endDate } = searchParams;

  const { data, error } = await getContributor({
    page,
    startDate: startDate || '2024-09-13',
    endDate: `${endDate}T23:59:59.999Z` || '2024-09-18T23:59:59.999Z',
    pageSize: PAGE_SIZE.MEDIUM,
    cacheOptions: 'no-store',
  });

  if (error)
    return (
      <ErrorFallback
        message={error.message}
        className="h-[860px] bg-gray dark:bg-indigo-dark"
      />
    );

  const { data: dataContributor, meta } = data;
  const { pageCount = 0 } = meta?.pagination || {};

  const dataFormatted = mapContributorsData(dataContributor);

  return (
    <>
      <div className="flex w-full justify-center mt-4 xs:justify-end">
        <DateRangePicker />
      </div>
      <ContributorTable
        data={dataFormatted}
        page={parseInt(page, 10)}
        pageCount={pageCount}
      />
    </>
  );
};

export default ContributorPage;
