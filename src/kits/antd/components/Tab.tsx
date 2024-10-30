import { TabProps } from '@/components/Tab/Tab.types';
import { Tabs } from 'antd';
import React from 'react';

export const Tab: React.FC<TabProps> = ({
  label,
  value,
  disabled,
  icon,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <Tabs.TabPane
      tab={
        <span>
          {icon}
          {label}
        </span>
      }
      key={value}
      disabled={disabled}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tabs.TabPane>
  );
};

export default Tab;
