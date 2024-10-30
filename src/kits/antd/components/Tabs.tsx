import { TabsProps } from '@/components/Tab/Tabs.types';
import { Tabs as AntTabs } from 'antd';
import { TabsType } from 'antd/es/tabs';
import React from 'react';

export const Tabs: React.FC<TabsProps> = ({
  value,
  defaultValue,
  onChange,
  variant = 'standard',
  orientation = 'horizontal',
  centered,
  className,
  style,
  children,
  ...rest
}) => {
  const getTabPosition = () => {
    return orientation === 'vertical' ? 'left' : 'top';
  };

  const getType = (v: 'standard' | 'contained' | 'scrollable'): TabsType => {
    const typeMap: Record<string, TabsType> = {
      standard: 'line',
      contained: 'card',
      scrollable: 'line',
    };
    if (v === undefined) return typeMap['standard'];
    return typeMap[v];
  };

  const tabStyle = {
    ...style,
    ...(centered ? { justifyContent: 'center' } : {}),
  };

  return (
    <AntTabs
      activeKey={value?.toString()}
      defaultActiveKey={defaultValue?.toString()}
      onChange={onChange}
      type={getType(variant)}
      tabPosition={getTabPosition()}
      centered={centered}
      className={className}
      style={tabStyle}
      {...rest}
    >
      {children}
    </AntTabs>
  );
};

export default Tabs;
