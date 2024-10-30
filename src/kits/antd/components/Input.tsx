import { InputProps } from '@/components/Input/Input.types';
import { Input as AntInput } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';

export const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  placeholder,
  type = 'text',
  size = 'medium',
  disabled,
  error,
  helperText,
  label,
  required,
  fullWidth,
  startAdornment,
  endAdornment,
  onChange,
  onBlur,
  onFocus,
  className,
  style,
  ...rest
}) => {
  const getSize = (size: InputProps['size']): SizeType => {
    const sizeMap: Record<string, SizeType> = {
      small: 'small',
      medium: 'middle',
      large: 'large',
    };
    if (size === undefined) return sizeMap.middle;
    return sizeMap[size];
  };

  const inputStyle = {
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
      <AntInput
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        size={getSize(size)}
        status={error ? 'error' : undefined}
        prefix={startAdornment}
        suffix={endAdornment}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className}
        style={inputStyle}
        {...rest}
      />
      {helperText && (
        <div style={{ color: error ? '#ff4d4f' : '#666', fontSize: '12px' }}>{helperText}</div>
      )}
    </div>
  );
};

export default Input;
