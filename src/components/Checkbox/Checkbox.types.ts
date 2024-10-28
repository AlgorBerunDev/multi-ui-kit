import { BaseProps } from '@/core/types';
import { Size } from '@/core/types/common';

export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  value?: string | number;
  size?: Size;
  error?: boolean;
  helperText?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
