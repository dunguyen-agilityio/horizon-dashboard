// Component
import { NFTFavorites } from '@/ui/nft-marketplace';

// Mocks
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';

const NFTFavoritesPage = () => (
  <NFTFavorites
    listFavorites={MOCK_NFTS_RESPONSE}
    pageSize={3}
    activePage={1}
  />
);

export default NFTFavoritesPage;
