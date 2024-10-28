import { BaseProps } from '@/core/types';
import { Position } from '@/core/types/common';
import { ReactNode } from 'react';

export interface DrawerProps extends BaseProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  placement?: Position;
  width?: number | string;
  height?: number | string;
  mask?: boolean;
  maskClosable?: boolean;
  footer?: ReactNode;
}
