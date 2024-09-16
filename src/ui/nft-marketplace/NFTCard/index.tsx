'use client';

// Libs
import { useState } from 'react';

// Components
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components';
import FavoriteIcon from '@/icons/Favorite';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';

// Constants
import { PUBLIC_ROUTES } from '@/constants/routes';
import { NFT_IMAGES } from '@/constants/images';

// Models
import { NFTData } from '@/models/NFT';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { Button } from '@nextui-org/react';

interface INFTProps extends NFTData {
  isShowIcon?: boolean;
}

const NFTCard = ({
  image = NFT_IMAGES.DEFAULT,
  name,
  author,
  members,
  id,
  price,
  isShowIcon = true,
}: INFTProps) => {
  const [isPending, setIsPending] = useState(false);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPending(true);
    // TODO: handle api for like card
    setIsPending(false);
  };

  return (
    <Link
      href={`${PUBLIC_ROUTES.NFT_MARKETPLACE}/${id}`}
      prefetch
      className="relative"
      data-testid="nft-card"
    >
      <div className="bg-white dark:bg-indigo rounded-md p-5">
        <div className="relative w-[308px] h-[205px] rounded-[18px] overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
          {isShowIcon && (
            <Button
              isIconOnly
              data-testid="like-btn"
              className="absolute top-[14px] right-[14px] bg-transparent rounded-full"
              onClick={handleLike}
            >
              <FavoriteIcon />
            </Button>
          )}
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <Text size={TEXT_SIZE.lg} className="text-large">
              {name}
            </Text>
            <Text
              variant={TEXT_VARIANT.SECONDARY}
              size={TEXT_SIZE.sm}
            >{`By ${author.fullName}`}</Text>
          </div>
          <AvatarGroup
            isBordered
            max={3}
            className="[&>span]:w-[27px] [&>span]:h-[27px] [&>span]:ring-offset-0"
          >
            {members.map(({ id, avatar, fullName }) => (
              <Avatar
                key={id}
                src={avatar}
                ImgComponent={Image}
                alt={fullName}
                imgProps={{ width: 27, height: 27 }}
              />
            ))}
          </AvatarGroup>
        </div>
        <Text
          className="text-blue-450 font-bold pt-[25px]"
          size={TEXT_SIZE.sm}
        >{`Current Bid: ${price} USD`}</Text>
      </div>
      {isPending && (
        <div
          className="absolute z-0 cursor-not-allowed"
          data-testid="nft-overlay"
        />
      )}
    </Link>
  );
};

export default NFTCard;
