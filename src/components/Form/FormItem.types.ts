import { BaseProps } from '@/core/types';

export interface FormItemProps extends BaseProps {
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}
