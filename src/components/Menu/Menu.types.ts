import { BaseProps } from '@/core/types';

export interface MenuProps extends BaseProps {
  mode?: 'vertical' | 'horizontal' | 'inline';
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  openKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: (selectedKeys: string[]) => void;
  onOpenChange?: (openKeys: string[]) => void;
}
