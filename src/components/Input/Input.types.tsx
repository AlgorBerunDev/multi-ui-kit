import { BaseProps } from '@/core/types';
import { Size } from '@/core/types/common';
import { ReactNode } from 'react';

export interface InputProps extends BaseProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  size?: Size;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
