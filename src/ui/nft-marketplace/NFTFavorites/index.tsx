'use client';

import { useState } from 'react';

// Components
import NFTCard from '../NFTCard';
import { Pagination } from '@nextui-org/pagination';

// Mock
import { MOCK_NFTS } from '@/mocks/nft';

const NFTFavorites = () => {
  // TODO: handle call api get NFT favorite list instead of using mock data
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="flex justify-center mt-1 sm:mt-4">
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 max-w-[716px] xl:max-w-[1084px] 2xl:max-w-[1452px]">
        {MOCK_NFTS.map((favorite) => (
          <NFTCard
            key={favorite.id}
            data-testid={`nft-card-${favorite.id}`}
            isShowIcon={false}
            {...favorite}
          />
        ))}
        <div className="w-full flex justify-center lg:justify-end my-8">
          <Pagination
            showControls
            showShadow
            color="primary"
            total={7} // TODO: Will handle get page size
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTFavorites;
