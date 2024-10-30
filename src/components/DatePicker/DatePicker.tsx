import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const kit = useUIKit();
  const DatePickerComponent = kit.components.DatePicker;

  return <DatePickerComponent {...props} />;
};
