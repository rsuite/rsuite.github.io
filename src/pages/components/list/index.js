import React from 'react';
import { List, Tag, Button, Icon, Animation, FlexboxGrid } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'List',
  examples: ['default', 'size', 'bordered', 'hover', 'sortable', 'collection', 'custom'],
  dependencies: {
    List,
    Tag,
    Button,
    Icon,
    FlexboxGrid
  }
});