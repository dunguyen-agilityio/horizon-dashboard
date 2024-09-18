// Components
import { ContributorTable } from '@/ui/contributor';
import ErrorFallback from '@/components/ErrorFallback';

// Services
import { getContributor } from '@/services/contributor';

// Types
import { ISearchParams } from '@/types/query-params';

// Utils
import { mapContributorsData } from '@/utils/contributor';

const ContributorContainer = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const { page = '1' } = searchParams;

  const { data, error } = await getContributor({
    page,
  });

  if (error !== null)
    return (
      <ErrorFallback
        message={error}
        className="h-[860px] bg-gray dark:bg-indigo-dark"
      />
    );

  const { data: dataContributor, meta } = data;
  const { pageCount = 0 } = meta?.pagination || {};

  const dataFormatted = mapContributorsData(dataContributor);

  return (
    <ContributorTable
      data={dataFormatted}
      page={parseInt(page, 10)}
      pageCount={pageCount}
    />
  );
};

export default ContributorContainer;
