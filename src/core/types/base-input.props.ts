import { Size } from './common';
import { BaseProps } from './component-types';

export interface BaseInputProps extends BaseProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
}
