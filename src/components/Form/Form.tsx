import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { FormProps } from './Form.types';

export const Form: React.FC<FormProps> = (props) => {
  const kit = useUIKit();
  const FormComponent = kit.components.Form;

  return <FormComponent {...props} />;
};
