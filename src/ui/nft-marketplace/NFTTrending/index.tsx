// Services
import { getNFTsRecentlyAdded } from '@/services/nft';

// Components
import NFTTrending from './NFTTrending';
import { ErrorFallback } from '@/components';

const NFTTrendingContainer = async () => {
  const { data, error } = await getNFTsRecentlyAdded();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NFTTrending trends={data} />;
};

export default NFTTrendingContainer;
