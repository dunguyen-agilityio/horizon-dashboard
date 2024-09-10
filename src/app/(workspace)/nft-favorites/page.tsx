// component
import { MOCK_NFTS } from '@/mocks/nft';
import { NFTFavorites } from '@/ui/nft-marketplace';

const NFTFavoritesPage = () => {
  return <NFTFavorites NFTFavoriteData={MOCK_NFTS} pageSize={7} page={1} />;
};

export default NFTFavoritesPage;
