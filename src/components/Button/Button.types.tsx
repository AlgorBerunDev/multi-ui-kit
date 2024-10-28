import { Color, Size, Variant } from '@/core/types/common';
import { BaseProps } from '../../core/types/component-types';
import { ReactNode } from 'react';

export interface ButtonProps extends BaseProps {
  variant?: Variant;
  size?: Size;
  color?: Color;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
