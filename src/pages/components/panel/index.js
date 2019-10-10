import React from 'react';
import { Button, Icon, Panel, PanelGroup, Table } from 'rsuite';
import tableData from '../table/data/users';
import createComponentExample from '@/utils/createComponentExample';

const { HeaderCell, Pagination, Cell, Column } = Table;

export default createComponentExample({
  id: 'Panel',
  examples: [
    'basic',
    'bordered',
    'shaded',
    'no-header',
    'collapsible',
    'body-fill',
    'panel-group',
    'accordion-group',
    'accordion-group-active',
    'card'
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
