import { ReactNode } from 'react';

export interface TableColumn {
  key: string;
  title: string;
  dataIndex: string;
  render?: (value: any, record: any, index: number) => ReactNode;
  width?: number | string;
  fixed?: 'left' | 'right';
  sorter?: boolean | ((a: any, b: any) => number);
  filters?: { text: string; value: string | number }[];
  onFilter?: (value: string | number, record: any) => boolean;
}
