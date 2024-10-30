import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { ProgressProps } from './Progress.types';

export const Progress: React.FC<ProgressProps> = (props) => {
  const kit = useUIKit();
  const ProgressComponent = kit.components.Progress;

  return <ProgressComponent {...props} />;
};
