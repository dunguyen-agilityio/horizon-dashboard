'use client';

import { useState } from 'react';

// Components
import NFTCard from '../NFTCard';
import { Pagination } from '@nextui-org/pagination';

// Models
import { NFT } from '@/models/NFT';

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

  return (
    <div className="flex justify-center mt-1 sm:mt-4">
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 max-w-[716px] xl:max-w-[1084px] 2xl:max-w-[1452px]">
        {listFavorites.map((favorite) => (
          <NFTCard
            key={favorite.id}
            data-testid={`nft-card-${favorite.id}`}
            isShowIcon={false}
            {...favorite}
          />
        ))}
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
      </div>
    </div>
  );
};

export default NFTFavorites;
