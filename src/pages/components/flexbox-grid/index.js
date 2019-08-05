import React from 'react';
import { FlexboxGrid, Button, Icon, Divider } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'FlexboxGrid',
  examples: ['basic', 'justify', 'align', 'order'],
  dependencies: {
    Divider,
    Icon,
    Button,
    FlexboxGrid
  }
});
