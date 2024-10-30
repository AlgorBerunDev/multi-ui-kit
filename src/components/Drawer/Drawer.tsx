import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<DrawerProps> = (props) => {
  const kit = useUIKit();
  const DrawerComponent = kit.components.Drawer;

  return <DrawerComponent {...props} />;
};
