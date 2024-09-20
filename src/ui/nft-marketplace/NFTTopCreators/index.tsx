// types
import { Creator } from '@/types/creator';

// Constants
import { API_ENTITY } from '@/constants';

// Services
import { apiClient } from '@/services/api';

// Components
import { ErrorFallback } from '@/components';
import NFTTopCreators from './NFTTopCreators';

const NFTTopCreatorsContainer = async () => {
  const { data, error } = await apiClient.get<Creator[]>(
    API_ENTITY.TOP_CONTRIBUTORS,
  );

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NFTTopCreators data={data} />;
};

export default NFTTopCreatorsContainer;
