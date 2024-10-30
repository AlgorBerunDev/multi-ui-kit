import { MenuProps } from '@/components/Menu/Menu.types';
import { Menu as AntMenu } from 'antd';
import type { MenuProps as AntMenuProps } from 'antd/es/menu';
import React from 'react';

export const Menu: React.FC<MenuProps> = ({
  mode = 'vertical',
  selectedKeys,
  defaultSelectedKeys,
  openKeys,
  defaultOpenKeys,
  onSelect,
  onOpenChange,
  className,
  style,
  children,
  ...rest
}) => {
  const handleSelect: AntMenuProps['onSelect'] = ({ selectedKeys }) => {
    onSelect?.(selectedKeys);
  };

  return (
    <AntMenu
      mode={mode}
      selectedKeys={selectedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      openKeys={openKeys}
      defaultOpenKeys={defaultOpenKeys}
      onSelect={handleSelect}
      onOpenChange={onOpenChange}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntMenu>
  );
};

export default Menu;
