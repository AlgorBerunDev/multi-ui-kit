import { DrawerProps } from '@/components/Drawer/Drawer.types';
import { Drawer as AntDrawer } from 'antd';
import React from 'react';

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  placement = 'right',
  width = 378,
  height = 378,
  mask = true,
  maskClosable = true,
  footer,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <AntDrawer
      open={open}
      onClose={onClose}
      title={title}
      placement={placement}
      width={placement === 'left' || placement === 'right' ? width : '100%'}
      height={placement === 'top' || placement === 'bottom' ? height : '100%'}
      mask={mask}
      maskClosable={maskClosable}
      footer={footer}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntDrawer>
  );
};

export default Drawer;
