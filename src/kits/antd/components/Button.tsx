import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from '../../../components/Button/Button.types';
import { Size, Variant } from '@/core/types/common';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  htmlType,
  children,
  ...props
}) => {
  const getAntdType = (v: Variant) => {
    switch (v) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'text':
        return 'link';
      default:
        return 'primary';
    }
  };

  const getAntdSize = (s: Size) => {
    switch (s) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'middle';
    }
  };

  return (
    <AntButton type={getAntdType(variant)} size={getAntdSize(size)} {...props}>
      {children}
    </AntButton>
  );
};
