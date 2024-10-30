import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { SelectOptionProps } from './SelectOption.types';

export const SelectOption: React.FC<SelectOptionProps> = (props) => {
  const kit = useUIKit();
  const SelectOptionComponent = kit.components.SelectOption;

  return <SelectOptionComponent {...props} />;
};
