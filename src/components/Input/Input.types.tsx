import { BaseInputProps } from '@/core/types/base-input.props';
import { ReactNode } from 'react';

export interface InputProps extends BaseInputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
