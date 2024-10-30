import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { TabProps } from './Tab.types';

export const Tab: React.FC<TabProps> = (props) => {
  const kit = useUIKit();
  const TabComponent = kit.components.Tab;

  return <TabComponent {...props} />;
};
