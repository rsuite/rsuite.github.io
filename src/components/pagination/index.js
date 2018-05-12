import React from 'react';
import { Pagination, Button, Icon, Toggle, Divider } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Pagination',
  examples: ['basic', 'size', 'advanced'],
  dependencies: {
    Toggle,
    Icon,
    Pagination,
    Button,
    Divider
  }
});
