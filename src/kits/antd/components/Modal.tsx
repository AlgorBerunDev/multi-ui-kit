import { ModalProps } from '@/components/Modal/Modal.types';
import { Modal as AntModal } from 'antd';
import React from 'react';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  footer,
  width = 520,
  centered = false,
  closable = true,
  maskClosable = true,
  destroyOnClose = false,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <AntModal
      open={open}
      onCancel={onClose}
      title={title}
      footer={footer}
      width={width}
      centered={centered}
      closable={closable}
      maskClosable={maskClosable}
      destroyOnClose={destroyOnClose}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
