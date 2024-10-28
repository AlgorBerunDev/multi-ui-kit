import { Color, Size, Variant } from '@/core/types/common';
import { BaseProps } from '../../core/types/component-types';
import { ReactNode } from 'react';

export interface ButtonProps extends BaseProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
