import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = (props) => {
  const kit = useUIKit();
  const ModalComponent = kit.components.Modal;

  return <ModalComponent {...props} />;
};
