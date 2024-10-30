import { CheckboxProps } from '@/components/Checkbox/Checkbox.types';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  label,
  value,
  size = 'medium',
  error,
  helperText,
  onChange,
  className,
  style,
  ...rest
}) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    onChange?.(e.target.checked, e as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const checkboxStyle = {
    ...style,
    ...(size === 'small' ? { transform: 'scale(0.875)' } : {}),
    ...(size === 'large' ? { transform: 'scale(1.125)' } : {}),
  };

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  };

  return (
    <div style={wrapperStyle}>
      <AntCheckbox
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        indeterminate={indeterminate}
        value={value}
        onChange={handleChange}
        className={`${className} ${error ? 'ant-checkbox-error' : ''}`}
        style={checkboxStyle}
        {...rest}
      >
        {label}
      </AntCheckbox>
      {helperText && (
        <div style={{ color: error ? '#ff4d4f' : '#666', fontSize: '12px' }}>{helperText}</div>
      )}
    </div>
  );
};

export default Checkbox;
