import { DatePickerProps } from '@/components/DatePicker/DatePicker.types';
import { DatePicker as AntDatePicker } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import dayjs from 'dayjs';
import React from 'react';

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue,
  onChange,
  format = 'YYYY-MM-DD',
  disabled,
  placeholder,
  size,
  showTime,
  disabledDate,
  className,
  style,
  ...rest
}) => {
  // Convert Size to SizeType
  const getSize = (size: DatePickerProps['size']): SizeType => {
    const sizeMap: Record<string, SizeType> = {
      small: 'small',
      medium: 'middle',
      large: 'large',
    };
    if (size === undefined) return sizeMap.medium;
    return sizeMap[size] || 'middle';
  };

  // Convert Date to Dayjs
  const dayjsValue = value ? dayjs(value) : undefined;
  const dayjsDefaultValue = defaultValue ? dayjs(defaultValue) : undefined;

  // Convert disabledDate function to work with dayjs
  const disabledDateFn = disabledDate
    ? (date: dayjs.Dayjs) => disabledDate(date.toDate())
    : undefined;

  const handleChange = (date: dayjs.Dayjs | null) => {
    onChange?.(date ? date.toDate() : null);
  };

  return (
    <AntDatePicker
      value={dayjsValue}
      defaultValue={dayjsDefaultValue}
      onChange={handleChange}
      format={format}
      disabled={disabled}
      placeholder={placeholder}
      size={getSize(size)}
      showTime={showTime}
      disabledDate={disabledDateFn}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default DatePicker;
