'use client';

// Libs
import { useState } from 'react';

// Components
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components';
import FavoriteIcon from '@/icons/Favorite';
import { Button } from '@nextui-org/button';
import ImageWithBlur from '@/components/ImageWithBlur';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';

// Constants
import { PUBLIC_ROUTES } from '@/constants/routes';

// Models
import { NFTDataExtend } from '@/models/NFT';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { NFT_IMAGES } from '@/constants';

interface INFTProps extends NFTDataExtend {
  isShowIcon?: boolean;
}

const NFTCard = ({
  image,
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
          <ImageWithBlur
            src={image?.url || NFT_IMAGES.DEFAULT}
            alt={name}
            fill
            additionalClasses="object-cover"
          />
          {isShowIcon && (
            <Button
              isIconOnly
              aria-label="favorite icon"
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
            <Text size={TEXT_SIZE.lg} className="text-large truncate max-w-60">
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
            {members.map(({ id, avatar, username }) => (
              <Avatar
                key={id}
                src={avatar?.url}
                ImgComponent={Image}
                alt={username}
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
