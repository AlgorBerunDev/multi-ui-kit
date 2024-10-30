import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { MenuProps } from './Menu.types';

export const Menu: React.FC<MenuProps> = (props) => {
  const kit = useUIKit();
  const MenuComponent = kit.components.Menu;

  return <MenuComponent {...props} />;
};
