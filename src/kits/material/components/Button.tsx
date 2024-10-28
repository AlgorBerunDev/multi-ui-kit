import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '../../../components/Button/Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const getMuiVariant = () => {
    switch (variant) {
      case 'primary':
        return 'contained';
      case 'secondary':
        return 'outlined';
      case 'text':
        return 'text';
      default:
        return 'contained';
    }
  };

  return (
    <MuiButton variant={getMuiVariant()} size={size} {...props}>
      {children}
    </MuiButton>
  );
};
