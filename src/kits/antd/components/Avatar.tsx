import { AvatarProps } from '@/components/Avatar/Avatar.types';
import { Avatar as AntAvatar } from 'antd';
import React from 'react';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'medium',
  shape = 'circle',
  icon,
  className,
  style,
  ...rest
}) => {
  const getSize = (size: AvatarProps['size']): number => {
    const sizeMap = {
      small: 24,
      medium: 32,
      large: 40,
    };
    if (size === undefined) return sizeMap.medium;
    if (typeof size === 'number') return size;
    return sizeMap[size];
  };

  return (
    <AntAvatar
      src={src}
      alt={alt}
      size={getSize(size)}
      shape={shape}
      icon={icon}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default Avatar;
