import { BadgeProps } from '@/components/Badge/Badge.types';
import { Badge as AntBadge } from 'antd';
import React from 'react';

export const Badge: React.FC<BadgeProps> = ({
  count,
  dot,
  showZero,
  color,
  offset,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <AntBadge
      count={count}
      dot={dot}
      showZero={showZero}
      color={color}
      offset={offset}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntBadge>
  );
};

export default Badge;
