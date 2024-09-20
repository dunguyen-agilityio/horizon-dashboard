import { ErrorFallback } from '@/components';
import NTFRecentlyAdd from './NTFRecentlyAdd';
import { getNFTsRecentlyAdded } from '@/services/nft';

const NTFRecentlyAddContainer = async () => {
  const { data, error } = await getNFTsRecentlyAdded();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NTFRecentlyAdd recentlyList={data} />;
};

export default NTFRecentlyAddContainer;
