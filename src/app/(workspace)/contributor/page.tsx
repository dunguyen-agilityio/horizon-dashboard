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

const ContributorPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const { page = '1', startDate, endDate } = searchParams;

  const { data, error } = await getContributor({
    page,
    startDate: startDate,
    endDate: `${endDate}T23:59:59.999Z`, // To get all time of end date
    pageSize: PAGE_SIZE.MEDIUM,
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

  return (
    <>
      <div className="flex w-full justify-center mt-4 xs:justify-end">
        <DateRangePicker />
      </div>
      <ContributorTable
        data={dataContributor}
        page={parseInt(page, 10)}
        pageCount={pageCount}
      />
    </>
  );
};

export default ContributorPage;
