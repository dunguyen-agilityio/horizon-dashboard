// Services
import { getNFTsRelated } from '@/services/nft';

// Components
import NFTTrending from './NFTTrending';
import { ErrorFallback } from '@/components';

const NFTTrendingContainer = async () => {
  const { data, error } = await getNFTsRelated();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NFTTrending trends={data} />;
};

export default NFTTrendingContainer;
