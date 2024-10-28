import { BaseProps } from '@/core/types';
import { TableColumn } from './TableColumn.types';

export interface TableProps extends BaseProps {
  columns: TableColumn[];
  dataSource: any[];
  loading?: boolean;
  pagination?:
    | boolean
    | {
        current?: number;
        pageSize?: number;
        total?: number;
        onChange?: (page: number, pageSize: number) => void;
      };
  rowKey?: string;
  rowSelection?: {
    selectedRowKeys?: string[] | number[];
    onChange?: (selectedRowKeys: string[] | number[], selectedRows: any[]) => void;
  };
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
}
