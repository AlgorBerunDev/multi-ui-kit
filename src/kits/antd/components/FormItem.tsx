import { FormItemProps } from '@/components/Form/FormItem.types';
import { Form } from 'antd';
import React from 'react';

export const FormItem: React.FC<FormItemProps> = ({
  label,
  required = false,
  error = false,
  helperText,
  fullWidth = false,
  className,
  style,
  children,
  ...rest
}) => {
  const itemStyle = {
    ...style,
    ...(fullWidth ? { width: '100%' } : {}),
  };

  return (
    <Form.Item
      label={label}
      required={required}
      validateStatus={error ? 'error' : undefined}
      help={helperText}
      className={className}
      style={itemStyle}
      {...rest}
    >
      {children}
    </Form.Item>
  );
};

export default FormItem;
