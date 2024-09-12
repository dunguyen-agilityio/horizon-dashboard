'use client';

import { useState } from 'react';

// Components
import NFTCard from '../NFTCard';
import { Pagination } from '@nextui-org/pagination';

// Models
import { NFT } from '@/models/NFT';
import { ItemNotFound } from '@/components';
import { PUBLIC_ROUTES } from '@/constants';

interface INFTFavoriteProps {
  listFavorites: NFT[];
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
        {listFavorites.map((favorite) => (
          <NFTCard
            key={favorite.id}
            data-testid={`nft-card-${favorite.id}`}
            isShowIcon={false}
            {...favorite}
          />
        ))}
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
