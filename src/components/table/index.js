import React from 'react';
import ComponentExample from '../ComponentExample';
import { Table, Toggle, Popover, Whisper, Button, Icon } from '../../rsuiteSource';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';

const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;

const context = require('./index.md');
const examples = [require('./default.md')];
const tabExamples = [
  {
    title: '可调整列宽',
    sorce: require('./resizable.md')
  },
  {
    title: '流体列宽',
    sorce: require('./fluid-column.md')
  },
  {
    title: '自动换行',
    sorce: require('./word-wrap.md')
  },
  {
    title: '自定义列',
    sorce: require('./custom-column.md')
  },
  {
    title: '排序',
    sorce: require('./sort.md')
  },
  {
    title: '分页',
    sorce: require('./pagination.md')
  },
  {
    title: '树',
    sorce: require('./tree.md')
  },
  {
    title: '编辑',
    sorce: require('./edit.md')
  },
  {
    title: 'loading',
    sorce: require('./loading.md')
  },

  {
    title: '合并单元格',
    sorce: require('./colspan.md')
  }
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Toggle,
        fakeData,
        fakeTreeData,
        fakeDataForColSpan,
        TablePagination,
        Popover,
        Whisper,
        Icon,
        Table,
        Button,
        HeaderCell,
        Cell,
        Column
      }}
      context={context}
      examples={examples}
      tabExamples={tabExamples}
    />
  );
};
