import React from 'react';
import { FlexboxGird, Button, Icon, Divider } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'FlexboxGrid',
  examples: ['basic', 'justify', 'align', 'order'],
  dependencies: {
    Divider,
    Icon,
    Button,
    FlexboxGrid: FlexboxGird
  }
});
