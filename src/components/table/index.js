import React from 'react';
import {
  Table,
  Toggle,
  Popover,
  Whisper,
  Button,
  IconButton,
  Divider,
  Icon,
  Checkbox
} from '../../rsuiteSource';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';
import createComponentExample from '../createComponentExample';
import LOCALE_ENV from '../../LOCALE_ENV';
import { getDict } from '../../locales';

const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;
const localePath = LOCALE_ENV === 'en' ? 'en/' : '';

const dict = getDict();

const tabExamples = [
  'resizable',
  'fluid-column',
  'word-wrap',
  'custom-cell',
  'sort',
  'pagination',
  'tree',
  'expanded',
  'edit',
  'loading',
  'colspan'
].map(item => ({
  title: dict.table[`tab.${item}`],
  sorce: require(`./${localePath}${item}.md`)
}));

const ComponentExample = createComponentExample({
  id: 'Table',
  examples: ['default'],
  dependencies: {
    Checkbox,
    Toggle,
    fakeData,
    fakeTreeData,
    fakeDataForColSpan,
    TablePagination,
    Popover,
    Whisper,
    Icon,
    Divider,
    IconButton,
    Table,
    Button,
    HeaderCell,
    Cell,
    Column
  }
});

export default () => <ComponentExample tabExamples={tabExamples} />;
