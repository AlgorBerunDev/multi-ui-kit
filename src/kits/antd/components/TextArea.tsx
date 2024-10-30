import { TextAreaProps } from '@/components/TextArea/TextArea.types';
import { Input as AntInput } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';

const { TextArea: AntTextArea } = AntInput;

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  defaultValue,
  placeholder,
  size = 'medium',
  disabled,
  error,
  helperText,
  label,
  required,
  fullWidth,
  rows = 4,
  onChange,
  onBlur,
  onFocus,
  className,
  style,
  ...rest
}) => {
  const getSize = (size: TextAreaProps['size']): SizeType => {
    const sizeMap: Record<string, SizeType> = {
      small: 'small',
      medium: 'middle',
      large: 'large',
    };
    if (size === undefined) return sizeMap['medium'];
    return sizeMap[size];
  };

  const textAreaStyle = {
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
      <AntTextArea
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        size={getSize(size)}
        status={error ? 'error' : undefined}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className}
        style={textAreaStyle}
        {...rest}
      />
      {helperText && (
        <div style={{ color: error ? '#ff4d4f' : '#666', fontSize: '12px' }}>{helperText}</div>
      )}
    </div>
  );
};

export default TextArea;
