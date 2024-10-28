import { BaseProps } from '@/core/types';
import { ReactNode } from 'react';

export interface TabProps extends BaseProps {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: ReactNode;
}
