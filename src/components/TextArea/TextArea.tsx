import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { TextAreaProps } from './TextArea.types';

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const kit = useUIKit();
  const TextAreaComponent = kit.components.TextArea;

  return <TextAreaComponent {...props} />;
};
