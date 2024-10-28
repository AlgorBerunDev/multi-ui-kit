import { BaseProps } from '@/core/types';
import { ReactNode } from 'react';

export interface ModalProps extends BaseProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  width?: number | string;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
}
