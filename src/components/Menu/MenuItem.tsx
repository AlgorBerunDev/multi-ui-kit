import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { MenuItemProps } from './MenuItem.types';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const kit = useUIKit();
  const MenuItemComponent = kit.components.MenuItem;

  return <MenuItemComponent {...props} />;
};
