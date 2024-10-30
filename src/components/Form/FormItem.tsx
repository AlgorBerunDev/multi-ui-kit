import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { FormItemProps } from './FormItem.types';

export const FormItem: React.FC<FormItemProps> = (props) => {
  const kit = useUIKit();
  const FormItemComponent = kit.components.FormItem;

  return <FormItemComponent {...props} />;
};
