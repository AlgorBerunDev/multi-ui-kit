import { SelectProps } from '@/components/Select/Select.types';
import { Select as AntSelect } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';

export const Select: React.FC<SelectProps> = ({
  value,
  defaultValue,
  options,
  placeholder,
  size = 'medium',
  disabled,
  error,
  helperText,
  label,
  required,
  fullWidth,
  multiple,
  loading,
  clearable,
  searchable,
  onChange,
  className,
  style,
  ...rest
}) => {
  const getSize = (size: SelectProps['size']): SizeType => {
    const sizeMap: Record<string, SizeType> = {
      small: 'small',
      medium: 'middle',
      large: 'large',
    };
    if (size === undefined) return sizeMap['medium'];
    return sizeMap[size];
  };

  const selectStyle = {
    ...style,
    ...(fullWidth ? { width: '100%' } : {}),
  };

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    ...(fullWidth ? { width: '100%' } : {}),
  };

  return (
    <div style={wrapperStyle}>
      {label && (
        <div style={{ marginBottom: '4px' }}>
          {label}
          {required && <span style={{ color: '#ff4d4f', marginLeft: '4px' }}>*</span>}
        </div>
      )}
      <AntSelect
        value={value}
        defaultValue={defaultValue}
        options={options}
        placeholder={placeholder}
        size={getSize(size)}
        disabled={disabled}
        status={error ? 'error' : undefined}
        mode={multiple ? 'multiple' : undefined}
        loading={loading}
        allowClear={clearable}
        showSearch={searchable}
        onChange={onChange}
        className={className}
        style={selectStyle}
        {...rest}
      />
      {helperText && (
        <div style={{ color: error ? '#ff4d4f' : '#666', fontSize: '12px' }}>{helperText}</div>
      )}
    </div>
  );
};

export default Select;
