import { BaseProps } from '@/core/types';
import { ReactNode } from 'react';

export interface MenuItemProps extends BaseProps {
  key: string;
  icon?: ReactNode;
  disabled?: boolean;
}
