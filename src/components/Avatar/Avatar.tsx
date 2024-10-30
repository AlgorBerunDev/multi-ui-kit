import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const kit = useUIKit();
  const AvatarComponent = kit.components.Avatar;

  return <AvatarComponent {...props} />;
};
