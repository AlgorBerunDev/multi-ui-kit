import { TableProps } from '@/components/Table/Table.types';
import { Table as AntTable } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import type { Key } from 'react';
import React from 'react';
import { transformToAntColumn } from '../utils/converters/table-column.converter';
import { TableRowSelection } from 'antd/es/table/interface';

export const Table: React.FC<TableProps> = ({
  columns,
  dataSource,
  loading,
  pagination,
  rowKey = 'id',
  rowSelection,
  scroll,
  className,
  style,
  ...rest
}) => {
  const antColumns = columns.map(transformToAntColumn);

  const getPagination = (): false | TablePaginationConfig => {
    if (pagination === false) return false;
    if (typeof pagination === 'object') {
      return {
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        onChange: pagination.onChange,
      };
    }
    return {};
  };

  const getRowSelection = (): TableRowSelection<any> | undefined => {
    if (!rowSelection) return undefined;

    return {
      selectedRowKeys: rowSelection.selectedRowKeys,
      onChange: (selectedRowKeys: Key[], selectedRows: any[], info: any) => {
        rowSelection.onChange?.(selectedRowKeys as string[] | number[], selectedRows);
      },
    };
  };

  return (
    <AntTable
      columns={antColumns}
      dataSource={dataSource}
      loading={loading}
      pagination={getPagination()}
      rowKey={rowKey}
      rowSelection={getRowSelection()}
      scroll={scroll}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default Table;
