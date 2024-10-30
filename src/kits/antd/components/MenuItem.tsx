import { MenuItemProps } from '@/components/Menu/MenuItem.types';
import { Menu } from 'antd';
import React from 'react';

export const MenuItem: React.FC<MenuItemProps> = ({
  key,
  icon,
  disabled,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <Menu.Item
      key={key}
      icon={icon}
      disabled={disabled}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Menu.Item>
  );
};

export default MenuItem;
