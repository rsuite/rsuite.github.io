import React from 'react';
import { List, Tag, Button, Icon, Animation, FlexboxGrid } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'List',
  examples: ['default', 'size', 'bordered', 'hover', 'axis', 'sortable', 'collection', 'custom'],
  dependencies: {
    List,
    Tag,
    Button,
    Icon,
    FlexboxGrid
  }
});