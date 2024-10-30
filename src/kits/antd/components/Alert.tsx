import { AlertProps } from '@/components/Alert/Alert.types';
import { Alert as AntAlert } from 'antd';
import React from 'react';

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  description,
  showIcon = true,
  closable,
  onClose,
  className,
  style,
  ...rest
}) => {
  return (
    <AntAlert
      type={type}
      message={message}
      description={description}
      showIcon={showIcon}
      closable={closable}
      onClose={onClose}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default Alert;
