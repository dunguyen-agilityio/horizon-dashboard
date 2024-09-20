// Component
import { NFTFavorites } from '@/ui/nft-marketplace';

// Mocks
import { getNFTsFavorite } from '@/services/nft';
import { ErrorFallback } from '@/components';

const NFTFavoritesPage = async () => {
  const { data, error } = await getNFTsFavorite();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NFTFavorites listFavorites={data} />;
};

export default NFTFavoritesPage;
