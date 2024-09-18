// Constants
import { API_ENTITY } from '@/constants';

// Services
import { apiClient } from '@/services/api';

// Types
import { Check } from '@/types/check';

// Components
import TableCheck from './TableCheck';
import { ErrorFallback } from '@/components';

const Container = async () => {
  const { data, error } = await apiClient.get<Check[]>(API_ENTITY.CHECK_REPORT);

  if (error)
    return (
      <ErrorFallback message={error.message} className="h-[350px] 2xl:flex-1" />
    );

  return <TableCheck data={data} />;
};

export default Container;

export { default as TableCheckSkeleton } from './TableCheckSkeleton';
