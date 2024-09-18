// Constants
import { API_ENTITY } from '@/constants';

// Services
import { apiClient } from '@/services/api';

// Types
import { Complex } from '@/types/complex';

// Components
import TableComplex from './TableComplex';
import { ErrorFallback } from '@/components';

const TableComplexContainer = async () => {
  const { data, error } = await apiClient.get<Complex[]>(
    API_ENTITY.COMPLEX_REPORT,
  );

  if (error) {
    return (
      <ErrorFallback message={error.message} className="h-[350px] 2xl:flex-1" />
    );
  }

  return <TableComplex data={data} />;
};

export default TableComplexContainer;
