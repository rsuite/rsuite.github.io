import React from 'react';
import { Pagination, Button, Icon, Toggle, Divider } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Pagination',
  examples: ['basic', 'size', 'disabled', 'advanced'],
  dependencies: {
    Toggle,
    Icon,
    Pagination,
    Button,
    Divider
  }
});
