import React from 'react';
import { useUIKit } from '@/core/hooks/useUIKit';
import { TableProps } from './Table.types';

export const Table: React.FC<TableProps> = (props) => {
  const kit = useUIKit();
  const TableComponent = kit.components.Table;

  return <TableComponent {...props} />;
};
