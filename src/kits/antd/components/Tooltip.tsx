import { TooltipProps } from '@/components/Tooltip/Tooltip.types';
import { Tooltip as AntTooltip } from 'antd';
import type { TooltipPlacement } from 'antd/es/tooltip';
import React from 'react';

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = 'top',
  open,
  defaultOpen,
  onOpenChange,
  arrow = true,
  className,
  style,
  children,
  ...rest
}) => {
  const getPlacement = (placement: TooltipProps['placement']): TooltipPlacement => {
    const placementMap: Record<string, TooltipPlacement> = {
      'top-start': 'topLeft',
      top: 'top',
      'top-end': 'topRight',
      'right-start': 'rightTop',
      right: 'right',
      'right-end': 'rightBottom',
      'bottom-start': 'bottomLeft',
      bottom: 'bottom',
      'bottom-end': 'bottomRight',
      'left-start': 'leftTop',
      left: 'left',
      'left-end': 'leftBottom',
    };
    if (placement === undefined) return placementMap['top'];
    return placementMap[placement] || 'top';
  };

  return (
    <AntTooltip
      title={title}
      placement={getPlacement(placement)}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      arrow={arrow}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntTooltip>
  );
};

export default Tooltip;
