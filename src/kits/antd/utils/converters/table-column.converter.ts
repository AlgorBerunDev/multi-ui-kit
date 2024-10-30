import { TableColumn } from '@/components/Table/TableColumn.types';
import type { ColumnType } from 'antd/es/table';
import type { Key, ReactNode } from 'react';

export const transformToAntColumn = (column: TableColumn): ColumnType<any> => {
  const handleSorter = (sorter: TableColumn['sorter']) => {
    if (typeof sorter === 'function') {
      return { compare: sorter };
    }
    return sorter;
  };

  const transformFilters = (filters: TableColumn['filters']) => {
    return filters?.map((filter) => ({
      text: filter.text as ReactNode,
      value: filter.value,
    }));
  };

  return {
    key: column.key,
    title: column.title,
    dataIndex: column.dataIndex,
    render: (value, record, index) => {
      const rendered = column.render?.(value, record, index);
      return rendered as ReactNode;
    },
    width: column.width,
    fixed: column.fixed,
    sorter: handleSorter(column.sorter),
    filters: transformFilters(column.filters),
    onFilter: column.onFilter
      ? (value: boolean | Key, record: any) => column.onFilter!(value as string | number, record)
      : undefined,
  };
};

export const transformFromAntColumn = (column: ColumnType<any>): TableColumn => {
  const handleSorter = (sorter: ColumnType<any>['sorter']) => {
    if (typeof sorter === 'object' && sorter.compare) {
      return sorter.compare as (a: any, b: any) => number;
    }
    return sorter as boolean | ((a: any, b: any) => number) | undefined;
  };

  const transformFilters = (filters: any[] | undefined) => {
    return filters?.map((filter) => ({
      text: String(filter.text),
      value: filter.value as string | number,
    }));
  };

  return {
    key: column.key as string,
    title: column.title as string,
    dataIndex: column.dataIndex as string,
    render: column.render as ((value: any, record: any, index: number) => ReactNode) | undefined,
    width: column.width,
    fixed: column.fixed as 'left' | 'right' | undefined,
    sorter: handleSorter(column.sorter),
    filters: transformFilters(column.filters),
    onFilter: column.onFilter as ((value: string | number, record: any) => boolean) | undefined,
  };
};
