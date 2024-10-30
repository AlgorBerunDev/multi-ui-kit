import { SelectOptionProps } from '@/components/Select/SelectOption.types';
import { Select } from 'antd';
import React from 'react';

export const Option: React.FC<SelectOptionProps> = ({ value, label, disabled }) => {
  return (
    <Select.Option value={value} disabled={disabled}>
      {label}
    </Select.Option>
  );
};

export default Option;
