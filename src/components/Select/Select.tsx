import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = (props) => {
  const kit = useUIKit();
  const SelectComponent = kit.components.Select;

  return <SelectComponent {...props} />;
};
