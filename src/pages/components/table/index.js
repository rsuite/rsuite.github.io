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
  Nav,
  Checkbox,
  Dropdown
} from 'rsuite';
import clone from 'lodash/clone';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';
import createComponentExample from '@/utils/createComponentExample';
import { getDict } from '@/locales';
import fakeLargeData from './data/fakeLargeData.json';



const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;

export default locale => {
  const dict = getDict(locale);
  const localePath = locale === 'en' ? 'en/' : '';
  const tabExamples = [
    'resizable',
    'fluid-column',
    'fixed',
    'word-wrap',
    'custom-cell',
    'sort',
    'pagination',
    'tree',
    'expanded',
    'edit',
    'loading',
    'colspan',
    'summary'
  ].map(item => ({
    title: dict.table[`tab.${item}`],
    sorce: require(`./${localePath}${item}.md`)
  }));


  const ComponentExample = createComponentExample({
    id: 'Table',
    examples: ['default', 'large'],
    dict,
    dependencies: {
      _clone: clone,
      Nav,
      Checkbox,
      Toggle,
      fakeData,
      fakeTreeData,
      fakeDataForColSpan,
      fakeLargeData,
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
      Column,
      Dropdown
    }
  })(locale);

  return () => <ComponentExample tabExamples={tabExamples} />;
};
