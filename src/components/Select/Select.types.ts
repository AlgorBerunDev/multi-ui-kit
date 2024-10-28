import { Size } from '@/core/types/common';
import { BaseProps } from '@/core/types';
import { SelectOption } from './SelectOption.types';

export interface SelectProps extends BaseProps {
  value?: string | number | Array<string | number>;
  defaultValue?: string | number | Array<string | number>;
  options: SelectOption[];
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiple?: boolean;
  loading?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  onChange?: (value: string | number | Array<string | number>) => void;
}
