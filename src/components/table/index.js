import React from 'react';
import ComponentExample from '../ComponentExample';
import { Table, Toggle, Popover, Whisper, Button, Icon } from '../../rsuiteSource';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';

const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;

const context = require('./index.md');
const examples = [
  require('./default.md'),
  require('./resizable.md'),
  require('./fluid-column.md'),
  require('./word-wrap.md'),
  require('./custom-column.md'),
  require('./sort.md'),
  require('./pagination.md'),
  require('./tree.md'),
  require('./edit.md'),
  require('./loading.md'),
  require('./colspan.md')
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
    />
  );
};
