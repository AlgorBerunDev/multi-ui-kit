import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from '../../../components/Button/Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const getAntdType = () => {
    switch (variant) {
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

  const getAntdSize = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'middle';
    }
  };

  return (
    <AntButton type={getAntdType()} size={getAntdSize()} {...props}>
      {children}
    </AntButton>
  );
};
