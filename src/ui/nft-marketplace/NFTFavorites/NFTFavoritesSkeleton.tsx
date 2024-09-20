import NFTCardSkeleton from '../NFTCard/NFTCardSkeleton';

const NFTFavoritesSkeleton = () => (
  <div className="flex justify-center mt-1 sm:mt-4">
    <div className="flex flex-wrap justify-center gap-5 sm:justify-start max-w-[738px] xl:max-w-[1084px] 2xl:max-w-[1500px] w-full">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <NFTCardSkeleton key={index} />
        ))}
    </div>
  </div>
);

export default NFTFavoritesSkeleton;
