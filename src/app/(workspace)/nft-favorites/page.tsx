// component
import { MOCK_NFTS } from '@/mocks/nft';
import { NFTFavorites } from '@/ui/nft-marketplace';

const NFTFavoritesPage = () => {
  return <NFTFavorites listFavorites={MOCK_NFTS} pageSize={7} activePage={1} />;
};

export default NFTFavoritesPage;
