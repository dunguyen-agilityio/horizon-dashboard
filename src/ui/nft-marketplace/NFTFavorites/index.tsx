'use client';

import { useState } from 'react';

// Components
import NFTCard from '../NFTCard';
import { Pagination } from '@nextui-org/pagination';
import { ItemNotFound } from '@/components';

// Constants
import { PUBLIC_ROUTES } from '@/constants';

// Models
import { NFTResponse } from '@/models/NFT';

// Types
import { StrapiResponse } from '@/types/strapi';

// Utils
import { formatNFTResponse } from '@/utils/nft';

interface INFTFavoriteProps {
  listFavorites: StrapiResponse<NFTResponse>[];
  pageSize: number;
  activePage: number;
}

const NFTFavorites = ({
  listFavorites,
  pageSize,
  activePage,
}: INFTFavoriteProps) => {
  const [currentPage, setCurrentPage] = useState<number>(activePage);

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
          const { members, author, ...favorite } = formatNFTResponse(nft);
          return (
            <NFTCard
              key={favorite.id}
              data-testid={`nft-card-${favorite.id}`}
              isShowIcon={false}
              author={author}
              members={members}
              {...favorite}
            />
          );
        })}
        {!!listFavorites.length && (
          <div className="w-full flex justify-center lg:justify-end my-8">
            <Pagination
              data-testid="pagination"
              showControls
              showShadow
              color="primary"
              total={pageSize}
              page={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTFavorites;
