import { ProgressProps } from '@/components/Progress/Progress.types';
import { Progress as AntProgress } from 'antd';
import React from 'react';

export const Progress: React.FC<ProgressProps> = ({
  type = 'line',
  percent = 0,
  size = 'medium',
  status = 'normal',
  showInfo = true,
  strokeWidth,
  strokeColor,
  className,
  style,
  ...rest
}) => {
  // Convert size to proper format for antd Progress
  const getProgressSize = (size: ProgressProps['size']) => {
    const sizes = {
      small: { width: 120, height: 120 },
      medium: { width: 160, height: 160 },
      large: { width: 200, height: 200 },
    };
    if (size === undefined) return sizes['medium'];
    return sizes[size] || sizes.medium;
  };

  return (
    <AntProgress
      type={type}
      percent={percent}
      size={type !== 'line' ? getProgressSize(size) : undefined}
      status={status}
      showInfo={showInfo}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default Progress;
