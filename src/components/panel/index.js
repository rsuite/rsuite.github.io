import React from 'react';
import { Button, Icon, Panel, PanelGroup, Table } from '../../rsuiteSource';
import tableData from '../table/data/users';
import createComponentExample from '../createComponentExample';

const { HeaderCell, Pagination, Cell, Column } = Table;

export default createComponentExample({
  id: 'Panel',
  examples: [
    'basic',
    'bordered',
    'no-header',
    'collapsible',
    'body-fill',
    'panel-group',
    'accordion-group',
    'accordion-group-active'
  ],
  dependencies: {
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
  }
});
