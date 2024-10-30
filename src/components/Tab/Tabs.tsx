import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { TabsProps } from './Tabs.types';

export const Tabs: React.FC<TabsProps> = (props) => {
  const kit = useUIKit();
  const TabsComponent = kit.components.Tabs;

  return <TabsComponent {...props} />;
};
