import { BaseProps } from '@/core/types';
import { Size } from '@/core/types/common';
import { ReactNode } from 'react';

export interface AvatarProps extends BaseProps {
  src?: string;
  alt?: string;
  size?: Size | number;
  shape?: 'circle' | 'square';
  icon?: ReactNode;
}
