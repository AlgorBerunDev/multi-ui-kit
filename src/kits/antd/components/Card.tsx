import { CardProps } from '@/components/Card/Card.types';
import { Card as AntCard } from 'antd';
import React from 'react';

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  actions,
  cover,
  bordered = true,
  hoverable = false,
  loading = false,
  className,
  style,
  children,
  ...rest
}) => {
  const extra = subtitle && <div>{subtitle}</div>;

  return (
    <AntCard
      title={title}
      extra={extra}
      actions={actions}
      cover={cover}
      bordered={bordered}
      hoverable={hoverable}
      loading={loading}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntCard>
  );
};

export default Card;
