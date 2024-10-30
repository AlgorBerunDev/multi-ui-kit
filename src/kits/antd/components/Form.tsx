import React from 'react';
import { FormProps } from '@/components/Form/Form.types';
import { Form as AntForm } from 'antd';

export const Form: React.FC<FormProps> = ({
  onSubmit,
  onReset,
  initialValues,
  className,
  style,
  children,
  ...rest
}) => {
  const handleFinish = (values: any) => {
    onSubmit?.(values);
  };

  const handleReset = () => {
    onReset?.();
  };

  return (
    <AntForm
      onFinish={handleFinish}
      onReset={handleReset}
      initialValues={initialValues}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntForm>
  );
};

export default Form;
