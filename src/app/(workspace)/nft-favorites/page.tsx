// Component
import { NFTFavorites } from '@/ui/nft-marketplace';

// Mocks
import { MOCK_NFTS } from '@/mocks/nft';

const NFTFavoritesPage = () => (
  <NFTFavorites listFavorites={MOCK_NFTS} pageSize={3} activePage={1} />
);

export default NFTFavoritesPage;
