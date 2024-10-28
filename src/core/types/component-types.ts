import { ButtonProps } from '@/components/Button';
import { ReactNode } from 'react';
import { ThemeConfig } from './theme';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface UIKit {
  name: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
  };
  theme: ThemeConfig;
}
