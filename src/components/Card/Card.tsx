import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = (props) => {
  const kit = useUIKit();
  const CardComponent = kit.components.Card;

  return <CardComponent {...props} />;
};
