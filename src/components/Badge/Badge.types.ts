import { BaseProps } from '@/core/types';

export interface BadgeProps extends BaseProps {
  count?: number | string;
  max?: number;
  dot?: boolean;
  showZero?: boolean;
  color?: string;
  offset?: [number, number];
}
