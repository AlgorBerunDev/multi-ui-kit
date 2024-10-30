import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = (props) => {
  const kit = useUIKit();
  const InputComponent = kit.components.Input;

  return <InputComponent {...props} />;
};
