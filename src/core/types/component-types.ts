import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    success: string;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
}

export interface UIKit {
  name: string;
  components: {
    Button: React.ComponentType<any>;
    // Add other components here
  };
  theme: ThemeConfig;
}
