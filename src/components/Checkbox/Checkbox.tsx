import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const kit = useUIKit();
  const CheckboxComponent = kit.components.Checkbox;
  return <CheckboxComponent {...props} />;
};
