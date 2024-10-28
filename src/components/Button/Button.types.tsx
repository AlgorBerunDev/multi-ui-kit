import { BaseProps } from '../../core/types/component-types';

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}
