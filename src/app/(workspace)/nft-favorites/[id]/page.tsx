// component
import { NFTFavorites } from '@/ui/nft-marketplace';

interface NFTFavoritesProps {
  params: {
    id: number;
  };
}

const NFTFavoritesPage = ({ params }: NFTFavoritesProps) => {
  return (
    <div className="flex flex-col">
      <NFTFavorites id={params.id} />
    </div>
  );
};

export default NFTFavoritesPage;
