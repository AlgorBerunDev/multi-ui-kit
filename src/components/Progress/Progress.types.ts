import { BaseProps } from '@/core/types';
import { Size } from '@/core/types/common';

export interface ProgressProps extends BaseProps {
  type?: 'line' | 'circle' | 'dashboard';
  percent?: number;
  size?: Size;
  status?: 'success' | 'exception' | 'active' | 'normal';
  showInfo?: boolean;
  strokeWidth?: number;
  strokeColor?: string;
}
