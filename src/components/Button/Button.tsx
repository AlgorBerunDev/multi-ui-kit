import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
  const kit = useUIKit();
  const ButtonComponent = kit.components.Button;

  return <ButtonComponent {...props} />;
};
