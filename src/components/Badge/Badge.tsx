import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = (props) => {
  const kit = useUIKit();
  const BadgeComponent = kit.components.Badge;

  return <BadgeComponent {...props} />;
};
