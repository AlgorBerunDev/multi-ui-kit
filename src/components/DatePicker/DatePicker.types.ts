import { BaseProps } from '@/core/types';
import { Size } from '@/core/types/common';

export interface DatePickerProps extends BaseProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | null) => void;
  format?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: Size;
  showTime?: boolean;
  disabledDate?: (date: Date) => boolean;
}
