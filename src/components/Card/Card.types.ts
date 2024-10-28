import { BaseProps } from '@/core/types';
import { ReactNode } from 'react';

export interface CardProps extends BaseProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode[];
  cover?: ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  loading?: boolean;
}
