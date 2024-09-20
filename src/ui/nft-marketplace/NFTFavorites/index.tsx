// Components
import NFTCard from '../NFTCard';
import { ItemNotFound } from '@/components';

// Constants
import { PUBLIC_ROUTES } from '@/constants';

// Models
import { NFTData } from '@/models/NFT';
import { formatUser } from '@/utils/user';

interface INFTFavoriteProps {
  listFavorites: NFTData[];
}

const NFTFavorites = ({ listFavorites }: INFTFavoriteProps) => {
  if (listFavorites.length === 0)
    return (
      <ItemNotFound
        title="Start Find Your Favorite NFTs"
        description="Browse our collection and click the heart icon to add NFTs to your favorites list!"
        href={PUBLIC_ROUTES.NFT_MARKETPLACE}
        label="Explore NFTs"
      />
    );

  return (
    <div className="flex justify-center mt-1 sm:mt-4">
      <div className="flex flex-wrap justify-center gap-5 sm:justify-start max-w-[738px] xl:max-w-[1084px] 2xl:max-w-[1500px] w-full">
        {listFavorites.map((nft) => {
          const { members, author, ...favorite } = nft;
          return (
            <NFTCard
              key={favorite.id}
              data-testid={`nft-card-${favorite.id}`}
              isShowIcon={false}
              author={formatUser(author)}
              members={members}
              {...favorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NFTFavorites;
export { default as NFTFavoritesSkeleton } from './NFTFavoritesSkeleton';
