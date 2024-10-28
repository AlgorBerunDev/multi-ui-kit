import { BaseProps } from '@/core/types';

export interface FormProps extends BaseProps {
  onSubmit?: (values: any) => void;
  onReset?: () => void;
  initialValues?: Record<string, any>;
}
