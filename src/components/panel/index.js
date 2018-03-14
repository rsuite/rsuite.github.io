import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, Icon, Panel, PanelGroup, Table } from '../../rsuiteSource';
import tableData from '../table/data/users';

const { HeaderCell, Pagination, Cell, Column } = Table;

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./bordered.md'),
  require('./collapsible.md'),
  require('./body-fill.md'),
  require('./panel-group.md'),
  require('./accordion-group.md'),
  require('./accordion-group-active.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Table,
        PanelGroup,
        Panel,
        Icon,
        Button,
        HeaderCell,
        Pagination,
        Cell,
        Column,
        tableData
      }}
      context={context}
      examples={examples}
    />
  );
};
