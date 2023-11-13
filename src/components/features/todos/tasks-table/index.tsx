import React from 'react';
import { useTranslations } from '@/modules/locales/locales.hook';
import { QUERY_KEYS } from '@modules/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Skeleton, Table } from 'antd';
import { doGetTask } from '@components/features/todos';

import { columns } from './tasks-column.component';

function TaskTable() {
  const { t } = useTranslations();

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_TASKS],
    queryFn: doGetTask,
    placeholderData: keepPreviousData,
  });

  return (
    <Skeleton loading={isLoading} active paragraph={{ rows: 20 }}>
      <Table columns={columns(t)} dataSource={data?.data} rowKey={'id'} />
    </Skeleton>
  );
}

export default TaskTable;
