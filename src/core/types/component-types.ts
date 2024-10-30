import { ButtonProps } from '@/components/Button';
import { ReactNode } from 'react';
import { ThemeConfig } from './theme';
import { AlertProps } from '@/components/Alert/Alert.types';
import { AvatarProps } from '@/components/Avatar/Avatar.types';
import { BadgeProps } from '@/components/Badge/Badge.types';
import { CardProps } from '@/components/Card/Card.types';
import { CheckboxProps } from '@/components/Checkbox/Checkbox.types';
import { DatePickerProps } from '@/components/DatePicker/DatePicker.types';
import { DrawerProps } from '@/components/Drawer/Drawer.types';
import { FormProps } from '@/components/Form/Form.types';
import { InputProps } from '@/components/Input/Input.types';
import { MenuProps } from '@/components/Menu/Menu.types';
import { ModalProps } from '@/components/Modal/Modal.types';
import { ProgressProps } from '@/components/Progress/Progress.types';
import { SelectProps } from '@/components/Select/Select.types';
import { SelectOptionProps } from '@/components/Select/SelectOption.types';
import { TabProps } from '@/components/Tab/Tab.types';
import { TabsProps } from '@/components/Tab/Tabs.types';
import { TableProps } from '@/components/Table/Table.types';
import { MenuItemProps } from '@/components/Menu/MenuItem.types';
import { TextAreaProps } from '@/components/TextArea/TextArea.types';
import { TooltipProps } from '@/components/Tooltip/Tooltip.types';
import { FormItemProps } from '@/components/Form/FormItem.types';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface UIKit {
  name: string;
  components: {
    Alert: React.ComponentType<AlertProps>;
    Avatar: React.ComponentType<AvatarProps>;
    Badge: React.ComponentType<BadgeProps>;
    Button: React.ComponentType<ButtonProps>;
    Card: React.ComponentType<CardProps>;
    Checkbox: React.ComponentType<CheckboxProps>;
    DatePicker: React.ComponentType<DatePickerProps>;
    Drawer: React.ComponentType<DrawerProps>;
    Form: React.ComponentType<FormProps>;
    FormItem: React.ComponentType<FormItemProps>;
    Input: React.ComponentType<InputProps>;
    Menu: React.ComponentType<MenuProps>;
    MenuItem: React.ComponentType<MenuItemProps>;
    Modal: React.ComponentType<ModalProps>;
    Progress: React.ComponentType<ProgressProps>;
    Select: React.ComponentType<SelectProps>;
    SelectOption: React.ComponentType<SelectOptionProps>;
    Tab: React.ComponentType<TabProps>;
    Tabs: React.ComponentType<TabsProps>;
    Table: React.ComponentType<TableProps>;
    TextArea: React.ComponentType<TextAreaProps>;
    Tooltip: React.ComponentType<TooltipProps>;
  };
  theme: ThemeConfig;
}
