import { ReactNode } from 'react';

type TableProps = {
  header: ReactNode;
  data: ReactNode,
  pagination?: ReactNode;
  totalCount: number;
  noDataMessage: string;
}

export default TableProps;
