// Components
import { BLUR_IMAGE } from '@/constants/images';

// Constants
import Image, { StaticImageData } from 'next/image';

// Types
import { CSSProperties } from 'react';

interface IProps {
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  objectFit?: string;
  style?: CSSProperties;
  additionalClasses?: string;
  src: string | StaticImageData;
}

export const ImageWithBlur = ({
  src,
  alt,
  width,
  height,
  sizes = '',
  style = {},
  fill = false,
  objectFit = '',
  priority = false,
  additionalClasses = '',
}: IProps) => (
  <Image
    src={src}
    alt={alt}
    fill={fill}
    sizes={sizes}
    width={width}
    height={height}
    style={style}
    placeholder="blur"
    priority={priority}
    objectFit={objectFit}
    className={additionalClasses}
    blurDataURL={BLUR_IMAGE}
    quality={100}
  />
);

export default ImageWithBlur;
