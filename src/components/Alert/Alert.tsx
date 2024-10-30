import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { AlertProps } from './Alert.types';

export const Alert: React.FC<AlertProps> = (props) => {
  const kit = useUIKit();
  const AlertComponent = kit.components.Alert;

  return <AlertComponent {...props} />;
};
