import { BaseProps } from '@/core/types';
import { Placement } from '@/core/types/common';
import { ReactNode } from 'react';

export interface TooltipProps extends BaseProps {
  title: ReactNode;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  arrow?: boolean;
}
