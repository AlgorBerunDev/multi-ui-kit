import { BaseProps } from '@/core/types';

export interface TabsProps extends BaseProps {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  variant?: 'standard' | 'contained' | 'scrollable';
  orientation?: 'horizontal' | 'vertical';
  centered?: boolean;
}
