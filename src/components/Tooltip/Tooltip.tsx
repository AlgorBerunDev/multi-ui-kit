import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const kit = useUIKit();
  const TooltipComponent = kit.components.Tooltip;

  return <TooltipComponent {...props} />;
};
