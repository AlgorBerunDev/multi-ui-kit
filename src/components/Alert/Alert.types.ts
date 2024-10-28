import { BaseProps } from '@/core/types';
import { ReactNode } from 'react';

export interface AlertProps extends BaseProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: ReactNode;
  description?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
}
